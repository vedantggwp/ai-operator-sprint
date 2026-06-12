"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SPRINT_PROGRESS_EVENT,
  SPRINT_PROGRESS_KEY,
  type SprintProgress,
  resolveToday,
} from "@/lib/progress";
import { LAST_DAY, dayLabel, weekAccentVar } from "@/lib/theme";

type PigmentRailProps = {
  currentDay?: number;
};

type RailState = {
  completed: number[];
  activeDay: number | null;
};

export function PigmentRail({ currentDay }: PigmentRailProps) {
  const [state, setState] = useState<RailState>({
    completed: [],
    activeDay: currentDay ?? null,
  });

  useEffect(() => {
    function refresh() {
      const progress = readProgress();
      const today = resolveToday(progress);

      setState({
        completed: today.completed,
        activeDay: currentDay ?? today.activeDay,
      });
    }

    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener(SPRINT_PROGRESS_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(SPRINT_PROGRESS_EVENT, refresh);
    };
  }, [currentDay]);

  return (
    <nav aria-label="Sprint days" className="w-full">
      <ol className="flex flex-wrap gap-2">
        {Array.from({ length: LAST_DAY + 1 }, (_, day) => {
          const isCurrent = state.activeDay === day;
          const isDone = state.completed.includes(day);
          const accent = weekAccentVar(day);

          return (
            <li key={day}>
              <Link
                href={`/day/${day}`}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Day ${dayLabel(day)}`}
                className={[
                  "flex h-14 w-12 flex-col justify-between rounded-[12px] border p-2 font-mono text-[11px] tabular-nums transition-[transform,border-color,background-color,color,opacity] duration-150",
                  isCurrent
                    ? "-translate-y-0.5 bg-card text-ink shadow-[0_2px_10px_var(--ink-hair)]"
                    : isDone
                      ? "text-card"
                      : "bg-transparent text-ink-soft opacity-50",
                ].join(" ")}
                style={{
                  borderColor: isCurrent || isDone ? accent : "var(--ink-hair)",
                  background: isDone && !isCurrent ? accent : undefined,
                }}
              >
                <span>{dayLabel(day)}</span>
                <span
                  aria-hidden="true"
                  className="h-1 rounded-full"
                  style={{
                    background: isCurrent || isDone ? accent : "var(--ink-hair)",
                    opacity: isCurrent || isDone ? 1 : 0.8,
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function readProgress(): SprintProgress | null {
  try {
    const raw = window.localStorage.getItem(SPRINT_PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as SprintProgress) : null;
  } catch {
    return null;
  }
}

