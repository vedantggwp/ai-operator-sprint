import { CopyButton } from "./copy-button";

/* Week pigment for a day number — the calendar is the palette. */
function weekVar(day: number): string {
  if (day <= 7) return "var(--w1)";
  if (day <= 14) return "var(--w2)";
  if (day <= 21) return "var(--w3)";
  return "var(--w4)";
}

const SAMPLE_PROMPT = `You are my build coach for Day 1 of the AI Operator Sprint.
My goal for the next 30 days: [your demo, in one sentence].
Today, help me ship the smallest real version of: [today's artifact].
Hold me to one hour. Start by asking what's already in place.`;

const LEDGER_PREVIEW = [
  { day: "00", title: "Commit: name your demo and your demo day" },
  { day: "01", title: "Install the operator stack and ship a first artifact" },
  { day: "02", title: "Your first agent loop, end to end" },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* top bar */}
      <header className="flex items-baseline justify-between px-10 pt-10 pb-6 max-w-6xl mx-auto w-full">
        <span className="font-mono text-xs uppercase tracking-[0.18em]">
          AI Operator Sprint
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft tabular-nums">
          Days 00–30 · free · open
        </span>
      </header>

      {/* hero */}
      <section className="px-10 pt-16 pb-20 max-w-6xl mx-auto relative">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mb-6">
          A 30-day public build challenge
        </p>
        <div className="relative">
          <div
            aria-hidden
            className="absolute rounded-full -top-14 right-[6%] size-44 md:size-64"
            style={{ background: "var(--accent)" }}
          />
          <h1 className="font-display font-bold relative leading-[0.95] tracking-tight text-[clamp(3.4rem,9vw,8.5rem)]">
            Ship something
            <br />
            real in 30 days.
          </h1>
        </div>
        <p className="mt-10 max-w-[640px] text-lg leading-relaxed text-ink-soft">
          <span className="text-ink font-medium">
            One lesson, one build, one shipped artifact a day
          </span>{" "}
          — until you demo a working AI system to someone whose opinion you
          care about. No account. No card. Nothing locked.
        </p>
      </section>

      {/* pigment rail — the nav IS the tracker */}
      <section className="px-10 pb-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
          The ledger · week = pigment
        </p>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 31 }, (_, d) => (
            <div
              key={d}
              className={
                "w-14 h-16 rounded-[12px] border flex flex-col justify-between p-2 " +
                (d === 0
                  ? "bg-card -translate-y-0.5 shadow-[0_2px_10px_rgba(14,14,14,0.12)]"
                  : "bg-transparent")
              }
              style={{
                borderColor: d === 0 ? "var(--accent)" : "var(--ink-hair)",
              }}
            >
              <span
                className="font-mono text-[11px] tabular-nums"
                style={{ color: d === 0 ? "var(--accent-ink)" : "var(--ink-soft)" }}
              >
                {String(d).padStart(2, "0")}
              </span>
              <span
                aria-hidden
                className="h-1 rounded-full"
                style={{ background: weekVar(d), opacity: d === 0 ? 1 : 0.35 }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ledger rows */}
      <section className="px-10 pb-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mb-2">
          Week 1 · preview
        </p>
        <ul>
          {LEDGER_PREVIEW.map((row) => (
            <li
              key={row.day}
              className="flex items-baseline gap-6 py-4 border-b"
              style={{ borderColor: "var(--ink-hair)" }}
            >
              <span className="font-mono text-sm tabular-nums text-ink-soft w-8 shrink-0">
                {row.day}
              </span>
              <span className="text-lg">{row.title}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ink well */}
      <section className="px-10 pb-24 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
          Every day hands you a prompt like this
        </p>
        <div className="bg-well text-well-text rounded-[16px] p-6 max-w-[760px]">
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] opacity-60">
              Day 01 · starter prompt
            </span>
            <CopyButton payload={SAMPLE_PROMPT} />
          </div>
          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {SAMPLE_PROMPT}
          </pre>
        </div>
      </section>

      {/* footer */}
      <footer className="px-10 pb-16 max-w-6xl mx-auto w-full">
        <div
          className="border-t pt-6 flex flex-wrap gap-x-8 gap-y-2 items-baseline justify-between"
          style={{ borderColor: "var(--ink-hair)" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            Built in public by @thevedlabs
          </span>
          <span className="font-mono text-xs tracking-[0.14em] text-ink-soft">
            respects prefers-reduced-motion · no tracking before consent
          </span>
        </div>
      </footer>
    </main>
  );
}
