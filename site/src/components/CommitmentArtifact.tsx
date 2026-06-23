"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  normaliseArtifacts,
  readStoredProgress,
  subscribeToProgress,
} from "@/lib/progress";

export function CommitmentArtifact() {
  const progressSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    () => "{}",
  );
  const progress = useMemo(() => JSON.parse(progressSnapshot), [progressSnapshot]);
  const artifact = normaliseArtifacts(progress.artifacts).find(
    (item) => item.id === "day-0-commitment",
  );

  if (!artifact) return null;

  return (
    <section
      aria-label="Committed artefact"
      className="mt-8 max-w-[var(--text-col)] rounded-[var(--radius-card)] border bg-card p-5"
      style={{ borderColor: "var(--ink-hair)" }}
    >
      <p className="font-mono text-xs uppercase text-ink-soft">
        {artifact.title} · {artifact.date}
      </p>
      {artifact.detail ? (
        <p className="mt-3 text-lg leading-relaxed text-ink">{artifact.detail}</p>
      ) : null}
    </section>
  );
}

function getProgressSnapshot(): string {
  return JSON.stringify(readStoredProgress());
}
