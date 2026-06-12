"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  SPRINT_PROGRESS_EVENT,
  SPRINT_PROGRESS_KEY,
  type SprintProgress,
  normaliseCompleted,
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

    const progress = readProgress();
    const next: SprintProgress = {
      ...progress,
      sprintStart: todayISO(),
      commitment: {
        build: build.trim(),
        demoTo: demoTo.trim(),
      },
      completed: normaliseCompleted(progress.completed),
    };

    window.localStorage.setItem(SPRINT_PROGRESS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(SPRINT_PROGRESS_EVENT));
    router.push("/day/0");
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-24 sm:px-10">
      <form onSubmit={submit} className="relative">
        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-bold leading-[1.02] text-ink">
          <span>In 30 days I&apos;ll build </span>
          <input
            aria-label="What you will build"
            value={build}
            onChange={(event) => setBuild(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="a working system"
            className="inline-block min-h-11 w-full max-w-[11ch] border-0 border-b bg-transparent px-1 font-display text-inherit leading-none outline-none placeholder:text-ink-soft sm:w-[11ch]"
            style={{ borderColor: "var(--ink-line)" }}
          />
          <span> and demo it to </span>
          <input
            aria-label="Who you will demo it to"
            value={demoTo}
            onChange={(event) => setDemoTo(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="someone real"
            className="inline-block min-h-11 w-full max-w-[11ch] border-0 border-b bg-transparent px-1 font-display text-inherit leading-none outline-none placeholder:text-ink-soft sm:w-[11ch]"
            style={{ borderColor: "var(--ink-line)" }}
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
            aria-disabled={!ready}
            aria-describedby={reasonId}
            className={[
              "min-h-11 rounded-full border bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-[border-color,opacity] duration-150",
              ready ? "opacity-100 hover:border-[color:var(--accent)]" : "opacity-45",
            ].join(" ")}
            style={{ borderColor: "var(--ink-line)" }}
          >
            Lock it in
          </button>
          <p id={reasonId} className="max-w-sm text-sm text-ink-soft">
            {ready
              ? "This stores your start date and commitment in this browser."
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

function readProgress(): SprintProgress {
  try {
    const raw = window.localStorage.getItem(SPRINT_PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as SprintProgress) : {};
  } catch {
    return {};
  }
}

function todayISO(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
