import Link from "next/link";
import { Suspense } from "react";
import { DaySubnav } from "./DaySubnav";
import { GeometryAccent } from "./GeometryAccent";
import { MarkDoneButton } from "./MarkDoneButton";
import { PickupNotice } from "./PickupNotice";
import { PigmentRail } from "./PigmentRail";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import type { DayContent, DayMeta } from "@/lib/curriculum";
import { accentStyleForDay, dayLabel } from "@/lib/theme";

type DayShellProps = {
  day: DayContent;
  nextDay: DayMeta | null;
  children: React.ReactNode;
  missingAnchors?: string[];
};

export function DayShell({
  day,
  nextDay,
  children,
  missingAnchors = [],
}: DayShellProps) {
  return (
    <main
      className="relative flex-1 overflow-x-hidden"
      style={accentStyleForDay(day.day)}
    >
      <SiteHeader />

      <section className="relative mx-auto w-full max-w-6xl px-5 pt-8 pb-12 sm:px-10">
        <GeometryAccent className="-top-4 right-[8%] size-36 sm:size-52" />
        <p className="font-mono text-xs uppercase text-ink-soft">
          {day.week} · {day.time}
        </p>
        <h1 className="relative mt-5 max-w-5xl font-display text-[clamp(3rem,9vw,7rem)] font-bold leading-none text-ink">
          Day {dayLabel(day.day)}
          <br />
          {day.title}
        </h1>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-10">
        <PigmentRail currentDay={day.day} />
      </section>

      <article className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-10">
        <DaySubnav day={day.day} />

        <Suspense fallback={null}>
          <PickupNotice day={day.day} />
        </Suspense>

        <section id="lesson" className="scroll-mt-28 pt-10">
          {children}
        </section>

        {missingAnchors.map((anchor) => (
          <span
            key={anchor}
            id={anchor}
            className="block scroll-mt-28"
            aria-hidden="true"
          />
        ))}

        <div className="mt-12 flex min-h-11 items-center">
          <MarkDoneButton day={day.day} />
        </div>

        <section
          id="tomorrow"
          className="mt-12 max-w-[var(--text-col)] scroll-mt-28 rounded-[var(--radius-card)] border bg-card p-6"
          style={{ borderColor: "var(--ink-hair)" }}
        >
          <p className="text-xl font-semibold text-ink">
            You&apos;re done for today.
          </p>
          {nextDay ? (
            <p className="mt-3 text-ink-soft">
              Tomorrow:{" "}
              <Link
                href={nextDay.href}
                className="text-ink underline decoration-[var(--ink-hair)] underline-offset-4"
              >
                {nextDay.title}
              </Link>
            </p>
          ) : (
            /* TODO(claude): replace this with the final Day 30 close copy. */
            <p className="mt-3 text-ink-soft">
              Demo day is complete.
            </p>
          )}
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
