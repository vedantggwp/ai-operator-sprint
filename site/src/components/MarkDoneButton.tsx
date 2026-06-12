"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  SPRINT_PROGRESS_EVENT,
  SPRINT_PROGRESS_KEY,
  type SprintProgress,
  normaliseCompleted,
} from "@/lib/progress";

type MarkDoneButtonProps = {
  day: number;
};

export function MarkDoneButton({ day }: MarkDoneButtonProps) {
  const completedSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getCompletedSnapshot,
    () => "[]",
  );
  const completed = useMemo(
    () => normaliseCompleted(JSON.parse(completedSnapshot)),
    [completedSnapshot],
  );
  const done = completed.includes(day);

  function markDone() {
    const progress = readProgress();
    const nextCompleted = completed.includes(day)
      ? completed
      : [...completed, day].sort((a, b) => a - b);

    writeProgress({
      ...progress,
      completed: nextCompleted,
    });
  }

  return (
    <button
      type="button"
      aria-pressed={done}
      onClick={markDone}
      className="min-h-11 rounded-full border bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-colors duration-150 hover:border-[color:var(--accent)]"
      style={{ borderColor: "var(--ink-line)" }}
    >
      {done ? "Marked done" : "Mark today done"}
    </button>
  );
}

function readProgress(): SprintProgress {
  try {
    const raw = window.localStorage.getItem(SPRINT_PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as SprintProgress) : {};
  } catch {
    return {};
  }
}

function readCompleted(): number[] {
  return normaliseCompleted(readProgress().completed);
}

function getCompletedSnapshot(): string {
  return JSON.stringify(readCompleted());
}

function subscribeToProgress(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(SPRINT_PROGRESS_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(SPRINT_PROGRESS_EVENT, callback);
  };
}

function writeProgress(progress: SprintProgress) {
  window.localStorage.setItem(SPRINT_PROGRESS_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event(SPRINT_PROGRESS_EVENT));
}
