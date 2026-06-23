"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  readStoredProgress,
  subscribeToProgress,
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
      setDone(readStoredProgress().completed?.includes(day) ?? false);
    }

    refresh();
    return subscribeToProgress(refresh);
  }, [day]);

  return (
    <li className="border-b" style={{ borderColor: "var(--ink-hair)" }}>
      <Link
        href={href}
        aria-label={`Day ${dayLabel(day)}: ${title}. ${done ? "Done" : "Not done"}.`}
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
            aria-hidden="true"
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
