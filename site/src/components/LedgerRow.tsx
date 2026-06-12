"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SPRINT_PROGRESS_EVENT,
  SPRINT_PROGRESS_KEY,
  type SprintProgress,
  normaliseCompleted,
} from "@/lib/progress";
import { dayLabel, weekAccentVar } from "@/lib/theme";

type LedgerRowProps = {
  day: number;
  title: string;
  time: string;
  href: string;
};

export function LedgerRow({ day, title, time, href }: LedgerRowProps) {
  const [done, setDone] = useState(false);
  const accent = weekAccentVar(day);

  useEffect(() => {
    function refresh() {
      setDone(readCompleted().includes(day));
    }

    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener(SPRINT_PROGRESS_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(SPRINT_PROGRESS_EVENT, refresh);
    };
  }, [day]);

  return (
    <li className="border-b" style={{ borderColor: "var(--ink-hair)" }}>
      <Link
        href={href}
        className="grid min-h-14 grid-cols-[3rem_1fr] items-center gap-4 py-4 sm:grid-cols-[4rem_1fr_auto] sm:gap-6"
      >
        <span className="font-mono text-sm tabular-nums text-ink-soft">
          {dayLabel(day)}
        </span>
        <span className={done ? "text-ink-soft line-through" : "text-ink"}>
          {title}
        </span>
        <span className="col-start-2 flex items-center gap-3 font-mono text-xs text-ink-soft sm:col-start-auto">
          <span>{time}</span>
          <span
            aria-label={done ? "done" : "not done"}
            className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border font-mono text-[11px]"
            style={{
              borderColor: done ? accent : "var(--ink-hair)",
              background: done ? accent : "transparent",
              color: done ? "var(--card)" : "transparent",
            }}
          >
            ✓
          </span>
        </span>
      </Link>
    </li>
  );
}

function readCompleted(): number[] {
  try {
    const raw = window.localStorage.getItem(SPRINT_PROGRESS_KEY);
    const progress = raw ? (JSON.parse(raw) as SprintProgress) : null;
    return normaliseCompleted(progress?.completed);
  } catch {
    return [];
  }
}

