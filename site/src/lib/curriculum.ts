import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { dayLabel, weekIndexForDay } from "./theme";

export type DayMeta = {
  day: number;
  title: string;
  week: string;
  time: string;
  status: string;
  fileName: string;
  href: string;
  weekIndex: 1 | 2 | 3 | 4;
};

export type DayContent = DayMeta & {
  body: string;
};

export type WeekGroup = {
  week: string;
  weekIndex: 1 | 2 | 3 | 4;
  days: DayMeta[];
};

const dayFilePattern = /^day-(\d{2})\.md$/;

/**
 * Resolve the canonical curriculum/days directory regardless of the build cwd.
 *
 * The markdown lives at the repository root (`curriculum/days`), the public
 * agent-readable contract. Depending on where the build runs, cwd may be the
 * Next app (`site/`), the repo root, or one level deeper, so we probe upward
 * rather than trusting a single relative hop. Resolved once and cached.
 */
let cachedDaysDir: string | null = null;
function resolveDaysDir(): string {
  if (cachedDaysDir) return cachedDaysDir;

  const candidates = [
    path.join(process.cwd(), "curriculum", "days"),
    path.join(process.cwd(), "..", "curriculum", "days"),
    path.join(process.cwd(), "..", "..", "curriculum", "days"),
  ];

  for (const dir of candidates) {
    if (fs.existsSync(dir)) {
      cachedDaysDir = dir;
      return dir;
    }
  }

  throw new Error(
    `curriculum/days not found. cwd=${process.cwd()}; searched: ${candidates.join(", ")}`,
  );
}

export function getAllDays(): DayMeta[] {
  return fs
    .readdirSync(resolveDaysDir())
    .filter((fileName) => dayFilePattern.test(fileName))
    .map((fileName) => readDayMeta(fileName))
    .sort((a, b) => a.day - b.day);
}

export function getDay(day: number): DayContent | null {
  const fileName = `day-${dayLabel(day)}.md`;
  const filePath = path.join(resolveDaysDir(), fileName);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  return {
    ...normaliseFrontmatter(parsed.data, fileName),
    body: parsed.content.trim(),
  };
}

export function getWeekGroups(days: DayMeta[] = getAllDays()): WeekGroup[] {
  const groups = new Map<string, WeekGroup>();

  for (const day of days) {
    const existing = groups.get(day.week);
    if (existing) {
      existing.days.push(day);
      continue;
    }

    groups.set(day.week, {
      week: day.week,
      weekIndex: day.weekIndex,
      days: [day],
    });
  }

  return Array.from(groups.values());
}

function readDayMeta(fileName: string): DayMeta {
  const raw = fs.readFileSync(path.join(resolveDaysDir(), fileName), "utf8");
  return normaliseFrontmatter(matter(raw).data, fileName);
}

function normaliseFrontmatter(
  data: Record<string, unknown>,
  fileName: string,
): DayMeta {
  const day = Number(data.day);
  const title = stringValue(data.title);
  const week = stringValue(data.week);
  const time = stringValue(data.time);
  const status = stringValue(data.status);

  if (!Number.isInteger(day) || day < 0 || day > 30) {
    throw new Error(`Invalid day frontmatter in ${fileName}`);
  }

  if (!title || !week || !time || !status) {
    throw new Error(`Missing frontmatter in ${fileName}`);
  }

  return {
    day,
    title,
    week,
    time,
    status,
    fileName,
    href: `/day/${day}`,
    weekIndex: weekIndexForDay(day),
  };
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value : "";
}

