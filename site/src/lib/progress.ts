import { LAST_DAY, clampDay, weekIndexForDay } from "./theme";

export const SPRINT_PROGRESS_KEY = "ai-operator-sprint:progress";
export const SPRINT_PROGRESS_EVENT = "ai-operator-sprint:progress";

export type SprintArtifact = {
  id: string;
  day: number;
  title: string;
  date: string;
  detail?: string;
};

export type SprintProgress = {
  sprintStart?: string;
  completed?: number[];
  artifacts?: SprintArtifact[];
  celebrations?: string[];
  commitment?: {
    build?: string;
    demoTo?: string;
  };
};

export type ProgressCelebration = {
  key: string;
  message: string;
};

export type TodayResolution =
  | {
      status: "new";
      activeDay: null;
      daysSinceStart: 0;
      completed: number[];
      isGapped: false;
    }
  | {
      status: "active" | "gapped" | "finished";
      activeDay: number;
      daysSinceStart: number;
      completed: number[];
      isGapped: boolean;
    };

export function normaliseCompleted(completed: unknown): number[] {
  if (!Array.isArray(completed)) return [];

  return Array.from(
    new Set(
      completed
        .map((day) => Number(day))
        .filter((day) => Number.isInteger(day) && day >= 0 && day <= LAST_DAY),
    ),
  ).sort((a, b) => a - b);
}

export function normaliseArtifacts(artifacts: unknown): SprintArtifact[] {
  if (!Array.isArray(artifacts)) return [];

  const byId = new Map<string, SprintArtifact>();

  for (const artifact of artifacts) {
    if (!artifact || typeof artifact !== "object") continue;

    const item = artifact as Partial<SprintArtifact>;
    const day = Number(item.day);
    if (
      typeof item.id !== "string" ||
      typeof item.title !== "string" ||
      typeof item.date !== "string" ||
      !Number.isInteger(day) ||
      day < 0 ||
      day > LAST_DAY
    ) {
      continue;
    }

    byId.set(item.id, {
      id: item.id,
      day,
      title: item.title,
      date: item.date.slice(0, 10),
      detail: typeof item.detail === "string" ? item.detail : undefined,
    });
  }

  return Array.from(byId.values()).sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.date.localeCompare(b.date);
  });
}

export function normaliseCelebrations(celebrations: unknown): string[] {
  if (!Array.isArray(celebrations)) return [];

  return Array.from(
    new Set(
      celebrations.filter(
        (celebration): celebration is string => typeof celebration === "string",
      ),
    ),
  );
}

export function normaliseProgress(
  progress: SprintProgress | null | undefined,
): SprintProgress {
  return {
    ...progress,
    completed: normaliseCompleted(progress?.completed),
    artifacts: normaliseArtifacts(progress?.artifacts),
    celebrations: normaliseCelebrations(progress?.celebrations),
  };
}

export function upsertArtifact(
  artifacts: SprintArtifact[] | undefined,
  artifact: SprintArtifact,
): SprintArtifact[] {
  return normaliseArtifacts([
    ...(artifacts ?? []).filter((item) => item.id !== artifact.id),
    artifact,
  ]);
}

export function readStoredProgress(): SprintProgress {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(SPRINT_PROGRESS_KEY);
    return normaliseProgress(raw ? (JSON.parse(raw) as SprintProgress) : {});
  } catch {
    return {};
  }
}

export function writeStoredProgress(progress: SprintProgress) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    SPRINT_PROGRESS_KEY,
    JSON.stringify(normaliseProgress(progress)),
  );
  window.dispatchEvent(new Event(SPRINT_PROGRESS_EVENT));
}

export function subscribeToProgress(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(SPRINT_PROGRESS_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(SPRINT_PROGRESS_EVENT, callback);
  };
}

export function todayISO(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function celebrationForCompletion(
  day: number,
  completed: number[],
  celebrated: string[] | undefined,
): ProgressCelebration | null {
  const normalisedCompleted = normaliseCompleted(completed);
  const normalisedCelebrated = normaliseCelebrations(celebrated);

  if (day === LAST_DAY && normalisedCompleted.length === LAST_DAY + 1) {
    const key = "day-30";
    return normalisedCelebrated.includes(key)
      ? null
      : { key, message: "Demo Day complete. The full ledger is shipped." };
  }

  const week = weekIndexForDay(day);
  const key = `week-${week}`;

  if (
    normalisedCelebrated.includes(key) ||
    !daysInWeek(week).every((weekDay) => normalisedCompleted.includes(weekDay))
  ) {
    return null;
  }

  return {
    key,
    message: `Week ${week} pigment row complete.`,
  };
}

/**
 * Resolves the day that /today should open from local sprint progress.
 *
 * Rules:
 * - no sprintStart means the sprint has not started and /today should send the user to /start
 * - otherwise activeDay is min(daysSinceStart, max(completed) + 1), clamped to 0..30
 * - gapped means the calendar has moved past the next uncompleted day
 * - finished means every day from 0..30 is already marked complete
 */
export function resolveToday(
  progress: SprintProgress | null | undefined,
  now: Date = new Date(),
): TodayResolution {
  const completed = normaliseCompleted(progress?.completed);

  if (!progress?.sprintStart) {
    return {
      status: "new",
      activeDay: null,
      daysSinceStart: 0,
      completed,
      isGapped: false,
    };
  }

  const daysSinceStart = Math.max(0, daysBetween(progress.sprintStart, now));
  const maxCompleted = completed.length ? completed[completed.length - 1] : -1;
  const nextUncompleted = maxCompleted + 1;
  const activeDay = clampDay(Math.min(daysSinceStart, nextUncompleted));
  const finished = completed.length === LAST_DAY + 1;
  const isGapped = !finished && nextUncompleted < daysSinceStart;

  return {
    status: finished ? "finished" : isGapped ? "gapped" : "active",
    activeDay,
    daysSinceStart,
    completed,
    isGapped,
  };
}

function daysBetween(startISO: string, now: Date): number {
  const start = parseLocalDate(startISO);
  if (!start) return 0;

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((today.getTime() - start.getTime()) / 86_400_000);
}

function daysInWeek(week: 1 | 2 | 3 | 4): number[] {
  const firstDay = week === 1 ? 0 : (week - 1) * 7 + 1;
  const lastDay = week === 4 ? LAST_DAY : week * 7;

  return Array.from(
    { length: lastDay - firstDay + 1 },
    (_, index) => firstDay + index,
  );
}

function parseLocalDate(value: string): Date | null {
  const match = value.slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;

  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return Number.isNaN(date.getTime()) ? null : date;
}
