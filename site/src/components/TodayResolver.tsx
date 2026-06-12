"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  SPRINT_PROGRESS_KEY,
  type SprintProgress,
  resolveToday,
} from "@/lib/progress";

export function TodayResolver() {
  const router = useRouter();

  useEffect(() => {
    const resolution = resolveToday(readProgress());

    if (resolution.status === "new") {
      router.replace("/start");
      return;
    }

    const suffix = resolution.status === "gapped" ? "?pickup=1" : "";
    router.replace(`/day/${resolution.activeDay}${suffix}`);
  }, [router]);

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

function readProgress(): SprintProgress | null {
  try {
    const raw = window.localStorage.getItem(SPRINT_PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as SprintProgress) : null;
  } catch {
    return null;
  }
}
