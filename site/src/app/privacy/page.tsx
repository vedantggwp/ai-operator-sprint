import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { accentStyleForDay } from "@/lib/theme";

export const metadata = {
  title: "Privacy — AI Operator Sprint",
  description: "Plain-English privacy notes for AI Operator Sprint.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 overflow-x-hidden" style={accentStyleForDay(0)}>
      <SiteHeader />
      <article className="mx-auto w-full max-w-6xl px-5 pt-10 pb-24 sm:px-10">
        <p className="font-mono text-xs uppercase text-ink-soft">Privacy</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-none text-ink">
          Small by design.
        </h1>

        <div className="mt-12 max-w-[var(--text-col)] space-y-10 text-lg leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-2xl font-semibold text-ink">What is stored</h2>
            <p className="mt-3">
              If you start the sprint, this browser stores your start date,
              progress, and Day 0 commitment. If you add an email, that email is
              stored for sprint updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink">What never is</h2>
            <p className="mt-3">
              No tracking before consent. No session recording. No selling your
              data. No hidden locked-content profile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink">Delete it</h2>
            <p className="mt-3">
              Send one email and ask for deletion. The launch address will
              replace this stub before the site opens.
            </p>
            {/* TODO(claude): replace the mailto address before launch. */}
            <a
              href="mailto:privacy@example.com?subject=Delete%20my%20AI%20Operator%20Sprint%20data"
              className="mt-4 inline-flex min-h-11 items-center rounded-full border px-4 font-mono text-xs uppercase text-ink"
              style={{ borderColor: "var(--ink-line)" }}
            >
              Delete my data
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink">Analytics</h2>
            <p className="mt-3">
              PostHog EU is coming at launch, only after consent and only for
              aggregate product signals.
            </p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
