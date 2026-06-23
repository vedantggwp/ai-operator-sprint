"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  readStoredProgress,
  resolveToday,
  subscribeToProgress,
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
      const progress = readStoredProgress();
      const today = resolveToday(progress);

      setState({
        completed: today.completed,
        activeDay: currentDay ?? today.activeDay,
      });
    }

    refresh();
    return subscribeToProgress(refresh);
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
                aria-label={[
                  `Day ${dayLabel(day)}`,
                  isCurrent ? "current" : "",
                  isDone ? "done" : "not done",
                ]
                  .filter(Boolean)
                  .join(", ")}
                className={[
                  "flex h-14 w-12 flex-col justify-between rounded-[12px] border bg-paper p-2 font-mono text-[11px] tabular-nums transition-[transform,border-color,background-color,color,opacity] duration-150",
                  isCurrent
                    ? "-translate-y-0.5 bg-card text-ink shadow-[0_2px_10px_var(--ink-hair)]"
                    : isDone
                      ? "text-ink"
                      : "bg-transparent text-ink-soft opacity-50",
                ].join(" ")}
                style={{
                  borderColor: isCurrent || isDone ? accent : "var(--ink-hair)",
                }}
              >
                <span>{dayLabel(day)}</span>
                <span
                  aria-hidden="true"
                  className="h-1 rounded-full"
                  style={{
                    background: isDone || isCurrent ? accent : "var(--ink-hair)",
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
