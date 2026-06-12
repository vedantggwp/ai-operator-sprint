import { LAST_DAY, clampDay } from "./theme";

export const SPRINT_PROGRESS_KEY = "ai-operator-sprint:progress";
export const SPRINT_PROGRESS_EVENT = "ai-operator-sprint:progress";

export type SprintProgress = {
  sprintStart?: string;
  completed?: number[];
  commitment?: {
    build?: string;
    demoTo?: string;
  };
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

function parseLocalDate(value: string): Date | null {
  const match = value.slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;

  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return Number.isNaN(date.getTime()) ? null : date;
}

