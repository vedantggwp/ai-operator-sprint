"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import {
  celebrationForCompletion,
  normaliseCompleted,
  normaliseProgress,
  readStoredProgress,
  subscribeToProgress,
  todayISO,
  writeStoredProgress,
} from "@/lib/progress";

type MarkDoneButtonProps = {
  day: number;
};

export function MarkDoneButton({ day }: MarkDoneButtonProps) {
  const [message, setMessage] = useState("");
  const progressSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    () => "{}",
  );
  const progress = useMemo(
    () => normaliseProgress(JSON.parse(progressSnapshot)),
    [progressSnapshot],
  );
  const completed = useMemo(
    () => normaliseCompleted(progress.completed),
    [progress.completed],
  );
  const done = completed.includes(day);

  function markDone() {
    if (done) return;

    const storedProgress = normaliseProgress(readStoredProgress());
    const currentCompleted = normaliseCompleted(storedProgress.completed);
    const nextCompleted = currentCompleted.includes(day)
      ? currentCompleted
      : [...currentCompleted, day].sort((a, b) => a - b);
    const celebration = celebrationForCompletion(
      day,
      nextCompleted,
      storedProgress.celebrations,
    );
    const celebrations = celebration
      ? [...(storedProgress.celebrations ?? []), celebration.key]
      : storedProgress.celebrations;

    writeStoredProgress({
      ...storedProgress,
      sprintStart: storedProgress.sprintStart ?? todayISO(),
      completed: nextCompleted,
      celebrations,
    });

    setMessage(celebration?.message ?? "Progress saved.");
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        aria-pressed={done}
        onClick={markDone}
        className="min-h-11 rounded-full border bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-colors duration-150 hover:border-[color:var(--accent)]"
        style={{ borderColor: "var(--ink-line)" }}
      >
        {done ? "Marked done" : "Mark today done"}
      </button>
      {message ? (
        <p
          aria-live="polite"
          className="max-w-[var(--text-col)] border-l pl-3 text-sm text-ink-soft"
          style={{ borderColor: "var(--accent)" }}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}

function getProgressSnapshot(): string {
  return JSON.stringify(readStoredProgress());
}
