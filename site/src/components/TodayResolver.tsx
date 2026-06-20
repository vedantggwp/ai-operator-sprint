"use client";

import Link from "next/link";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  readStoredProgress,
  resolveToday,
  subscribeToProgress,
} from "@/lib/progress";
import { dayLabel } from "@/lib/theme";

export function TodayResolver() {
  const router = useRouter();
  const progressSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    () => "{}",
  );
  const resolution = useMemo(
    () => resolveToday(JSON.parse(progressSnapshot)),
    [progressSnapshot],
  );

  useEffect(() => {
    if (resolution.status === "new") {
      router.replace("/start");
      return;
    }

    if (resolution.status === "finished") return;

    const suffix = resolution.status === "gapped" ? "?pickup=1" : "";
    router.replace(`/day/${resolution.activeDay}${suffix}`);
  }, [resolution.activeDay, resolution.status, router]);

  if (resolution.status === "finished") {
    return (
      <section className="mx-auto flex min-h-[50vh] w-full max-w-6xl items-center px-5 py-16 sm:px-10">
        <div className="max-w-[var(--text-col)]">
          <p className="font-mono text-xs uppercase text-ink-soft">/today</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-none text-ink">
            The full ledger is shipped.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            All 31 days are marked done. Demo Day stays open for edits,
            evidence, and the next public link.
          </p>
          <Link
            href="/day/30"
            className="mt-8 inline-flex min-h-11 items-center rounded-full border bg-ink px-5 font-mono text-xs uppercase text-paper"
            style={{ borderColor: "var(--ink-line)" }}
          >
            Open Day {dayLabel(30)}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-6xl items-center px-5 py-16 sm:px-10">
      <div className="max-w-[var(--text-col)]">
        <p className="font-mono text-xs uppercase text-ink-soft">/today</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-none text-ink">
          Reading your local ledger.
        </h1>
      </div>
    </section>
  );
}

function getProgressSnapshot(): string {
  return JSON.stringify(readStoredProgress());
}
