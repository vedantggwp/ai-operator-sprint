import live from "@/data/live.json";
import { InstrumentCounter } from "@/components/InstrumentCounter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { accentStyleForDay, dayLabel } from "@/lib/theme";

export const metadata = {
  title: "Live ledger — AI Operator Sprint",
  description: "Public AI Operator Sprint commitment and shipping ledger.",
};

export default function LivePage() {
  return (
    <main className="flex-1 overflow-x-hidden" style={accentStyleForDay(0)}>
      <SiteHeader />
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 pb-20 sm:px-10">
        <p className="font-mono text-xs uppercase text-ink-soft">
          Public ledger
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-none text-ink">
          Proof as rows.
        </h1>

        <dl className="mt-12 grid gap-6 md:grid-cols-3">
          {live.counters.map((counter) => (
            <InstrumentCounter
              key={counter.label}
              label={counter.label}
              value={counter.value}
            />
          ))}
        </dl>

        <section className="mt-16" aria-labelledby="ledger-rows">
          <h2 id="ledger-rows" className="font-mono text-xs uppercase text-ink-soft">
            Recent rows
          </h2>
          <ul className="mt-4">
            {live.rows.map((row) => (
              <li
                key={`${row.handle}-${row.day}-${row.artefact}`}
                className="grid min-h-14 grid-cols-1 gap-2 border-b py-4 sm:grid-cols-[1fr_auto] sm:gap-4"
                style={{ borderColor: "var(--ink-hair)" }}
              >
                <span className="text-ink">
                  {row.handle} · {row.status} · day {dayLabel(row.day)}
                </span>
                <span className="font-mono text-xs text-ink-soft">
                  {row.artefact}
                </span>
              </li>
            ))}
          </ul>
          {/* TODO(claude): replace this placeholder with launch ledger copy and Supabase wiring plan. */}
          <p className="mt-5 max-w-[var(--text-col)] text-sm text-ink-soft">
            This ledger is JSON-backed for launch preparation and shaped for a
            later database swap.
          </p>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
