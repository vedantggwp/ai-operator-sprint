"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  type SprintProgress,
  normaliseProgress,
  readStoredProgress,
  todayISO,
  upsertArtifact,
  writeStoredProgress,
} from "@/lib/progress";

type CommitmentSentenceProps = {
  emailAction: (formData: FormData) => Promise<void>;
};

export function CommitmentSentence({ emailAction }: CommitmentSentenceProps) {
  const router = useRouter();
  const reasonId = useId();
  const [build, setBuild] = useState("");
  const [demoTo, setDemoTo] = useState("");
  const [focused, setFocused] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const ready = Boolean(build.trim() && demoTo.trim());

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);

    if (!ready) return;

    const progress = normaliseProgress(readStoredProgress());
    const date = todayISO();
    const buildCommitment = build.trim();
    const demoCommitment = demoTo.trim();
    const next: SprintProgress = {
      ...progress,
      sprintStart: date,
      commitment: {
        build: buildCommitment,
        demoTo: demoCommitment,
      },
      artifacts: upsertArtifact(progress.artifacts, {
        id: "day-0-commitment",
        day: 0,
        title: "Day 0 commitment",
        date,
        detail: `${buildCommitment} -> ${demoCommitment}`,
      }),
    };

    writeStoredProgress(next);
    router.push("/day/0");
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-20 sm:px-10 sm:pt-10 sm:pb-24">
      <form onSubmit={submit} className="relative">
        <h1 className="max-w-[1040px] font-display text-[clamp(2.55rem,5.65vw,5.75rem)] font-bold leading-[1.04] text-ink">
          <span>In 30 days I&apos;ll build </span>
          <input
            aria-label="What you will build"
            aria-invalid={attempted && !build.trim()}
            value={build}
            onChange={(event) => setBuild(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="a working system"
            className="inline-block min-h-11 max-w-full border-0 border-b bg-transparent px-1 font-display text-inherit leading-none outline-none placeholder:text-ink-soft focus:border-b-2 focus:border-[color:var(--accent)]"
            style={{
              borderColor: "var(--ink-line)",
              inlineSize: "min(100%, 10.5ch)",
            }}
          />
          <span> and demo it to </span>
          <input
            aria-label="Who you will demo it to"
            aria-invalid={attempted && !demoTo.trim()}
            value={demoTo}
            onChange={(event) => setDemoTo(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="someone real"
            className="inline-block min-h-11 max-w-full border-0 border-b bg-transparent px-1 font-display text-inherit leading-none outline-none placeholder:text-ink-soft focus:border-b-2 focus:border-[color:var(--accent)]"
            style={{
              borderColor: "var(--ink-line)",
              inlineSize: "min(100%, 10.5ch)",
            }}
          />
          <span>.</span>
        </h1>

        <div
          className={[
            "mt-10 flex flex-col gap-5 transition-opacity duration-150 sm:flex-row sm:items-center",
            focused ? "opacity-60" : "opacity-100",
          ].join(" ")}
        >
          <button
            type="submit"
            disabled={!ready}
            aria-disabled={!ready}
            aria-describedby={reasonId}
            className={[
              "min-h-11 rounded-full border bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-[border-color,opacity] duration-150 disabled:pointer-events-none",
              ready
                ? "opacity-100 hover:border-[color:var(--accent)]"
                : "opacity-45",
            ].join(" ")}
            style={{ borderColor: "var(--ink-line)" }}
          >
            Lock it in
          </button>
          <p
            id={reasonId}
            aria-live="polite"
            className="max-w-sm text-sm text-ink-soft"
          >
            {ready
              ? "This stores your start date, commitment, and first artefact in this browser."
              : attempted
                ? "Add both slots to lock the commitment."
                : "Add both slots when you are ready."}
          </p>
        </div>
      </form>

      <form
        action={emailAction}
        className={[
          "mt-16 max-w-[var(--text-col)] border-t pt-6 transition-opacity duration-150",
          focused ? "opacity-60" : "opacity-100",
        ].join(" ")}
        style={{ borderColor: "var(--ink-hair)" }}
      >
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase text-ink-soft"
        >
          Launch note email, optional
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-11 flex-1 rounded-[var(--radius-ui)] border bg-card px-3 text-base text-ink outline-none"
            style={{ borderColor: "var(--ink-hair)" }}
          />
          <button
            type="submit"
            className="min-h-11 rounded-full border border-[color:var(--ink-line)] px-4 py-3 font-mono text-xs uppercase text-ink transition-colors duration-150 hover:border-[color:var(--accent)]"
          >
            Save email
          </button>
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          No launch email is sent until the list is wired.
        </p>
        {/* TODO(claude): confirm the final email promise before launch. */}
      </form>
    </div>
  );
}
