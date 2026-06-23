import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { accentStyleForDay } from "@/lib/theme";

export const metadata = {
  title: "About — AI Operator Sprint",
  description: "Why AI Operator Sprint is free and built in public.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-x-hidden" style={accentStyleForDay(0)}>
      <SiteHeader />
      <article className="mx-auto w-full max-w-6xl px-5 pt-10 pb-24 sm:px-10">
        <p className="font-mono text-xs uppercase text-ink-soft">About</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-none text-ink">
          Built in public by @thevedlabs.
        </h1>

        <div className="mt-12 max-w-[var(--text-col)] space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            AI Operator Sprint is free because the useful proof is the public
            work: people shipping small systems, keeping the artefacts, and
            showing the demo.
          </p>
          <p>
            The source is open at{" "}
            <Link
              href="https://github.com/vedantggwp/ai-operator-sprint"
              className="text-ink underline decoration-[var(--ink-hair)] underline-offset-4"
            >
              github.com/vedantggwp/ai-operator-sprint
            </Link>
            .
          </p>
          {/* TODO(claude): tighten the final founder note before launch. */}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
