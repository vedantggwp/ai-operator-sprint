import Link from "next/link";
import { GeometryAccent } from "@/components/GeometryAccent";
import { LedgerRow } from "@/components/LedgerRow";
import { PigmentRail } from "@/components/PigmentRail";
import { PromptWell } from "@/components/PromptWell";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllDays } from "@/lib/curriculum";
import { accentStyleForDay } from "@/lib/theme";

const SAMPLE_PROMPT = `You are my build coach for Day 1 of the AI Operator Sprint.
My goal for the next 30 days: [your demo, in one sentence].
Today, help me ship the smallest real version of: [today's artefact].
Hold me to one hour. Start by asking what's already in place.`;

export default function Home() {
  const previewDays = getAllDays().slice(0, 3);

  return (
    <main
      className="relative flex-1 overflow-x-hidden"
      style={accentStyleForDay(0)}
    >
      <SiteHeader />

      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-10">
        <p className="mb-6 font-mono text-xs uppercase text-ink-soft">
          A 30-day public build challenge
        </p>
        <div className="relative">
          <GeometryAccent className="-top-14 right-[6%] size-44 md:size-64" />
          <h1 className="relative font-display text-[clamp(3.4rem,9vw,8.5rem)] font-bold leading-[0.95]">
            Ship something
            <br />
            real in 30 days.
          </h1>
        </div>
        <p className="mt-10 max-w-[var(--text-col)] text-lg leading-relaxed text-ink-soft">
          <span className="text-ink font-medium">
            One lesson, one build, one shipped artefact a day
          </span>{" "}
          — until you demo a working AI system to someone whose opinion you
          care about. No account. No card. Nothing locked.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="inline-flex min-h-11 items-center rounded-full border bg-ink px-5 font-mono text-xs uppercase text-paper"
            style={{ borderColor: "var(--ink-line)" }}
          >
            Start Day 0
          </Link>
          <Link
            href="/curriculum"
            className="inline-flex min-h-11 items-center rounded-full border bg-card px-5 font-mono text-xs uppercase text-ink"
            style={{ borderColor: "var(--ink-line)" }}
          >
            View curriculum
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-10">
        <p className="mb-4 font-mono text-xs uppercase text-ink-soft">
          The ledger · week = pigment
        </p>
        <PigmentRail currentDay={0} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-10">
        <p className="mb-2 font-mono text-xs uppercase text-ink-soft">
          Week 1 · preview
        </p>
        <ul>
          {previewDays.map((day) => (
            <LedgerRow
              key={day.day}
              day={day.day}
              title={day.title}
              time={day.time}
              href={day.href}
            />
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-10">
        <p className="mb-4 font-mono text-xs uppercase text-ink-soft">
          Every day hands you a prompt like this
        </p>
        <div className="max-w-[760px]">
          <PromptWell payload={SAMPLE_PROMPT} label="Day 01 · starter prompt" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
