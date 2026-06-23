import { GeometryAccent } from "@/components/GeometryAccent";
import { LedgerRow } from "@/components/LedgerRow";
import { PigmentRail } from "@/components/PigmentRail";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllDays, getWeekGroups } from "@/lib/curriculum";
import { accentStyleForDay, dayLabel, weekAccentVar } from "@/lib/theme";

export const metadata = {
  title: "Curriculum — AI Operator Sprint",
  description: "The 31-day AI Operator Sprint curriculum ledger.",
};

export default function CurriculumPage() {
  const days = getAllDays();
  const weeks = getWeekGroups(days);

  return (
    <main
      className="relative flex-1 overflow-x-hidden"
      style={accentStyleForDay(0)}
    >
      <SiteHeader />

      <section className="relative mx-auto w-full max-w-6xl px-5 pt-10 pb-12 sm:px-10">
        <GeometryAccent className="-top-3 right-[10%] size-32 sm:size-48" />
        <p className="font-mono text-xs uppercase text-ink-soft">
          31 open days · no locked states
        </p>
        <h1 className="relative mt-5 max-w-4xl font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-none text-ink">
          Curriculum ledger.
        </h1>
        <p className="mt-8 max-w-[var(--text-col)] text-lg leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">
            Every row is reachable from day one.
          </span>{" "}
          Use /today for pacing, or open any day when you need the lesson.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-10">
        <PigmentRail />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-10">
        {weeks.map((week, index) => {
          const headingId = `week-${index}`;

          return (
          <section key={week.week} className="mb-14" aria-labelledby={headingId}>
            <div className="mb-3 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-3 rounded-full"
                style={{ background: weekAccentVar(week.days[0]?.day ?? 0) }}
              />
              <h2
                id={headingId}
                className="font-mono text-xs uppercase text-ink-soft"
              >
                {week.week}
              </h2>
            </div>
            <ol aria-label={`${week.week} days`}>
              {week.days.map((day) => (
                <LedgerRow
                  key={day.day}
                  day={day.day}
                  title={day.title}
                  time={day.time}
                  href={day.href}
                />
              ))}
            </ol>
          </section>
          );
        })}
        {/* TODO(claude): confirm final launch copy around the public demo promise. */}
        <p className="font-mono text-xs text-ink-soft">
          {dayLabel(days.length - 1)} is Demo Day.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
