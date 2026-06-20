import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pt-7 pb-5 sm:px-10 sm:pt-9 sm:pb-7 lg:flex-row lg:items-center lg:justify-between">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center font-mono text-xs uppercase text-ink"
        aria-label="AI Operator Sprint home"
      >
        AI Operator Sprint
      </Link>
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs uppercase text-ink-soft sm:gap-x-6"
      >
        <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/curriculum">
          Curriculum
        </Link>
        <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/today">
          Today
        </Link>
        <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/live">
          Live ledger
        </Link>
        <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-10 sm:pb-16">
      <div
        className="flex flex-col gap-3 border-t pt-6 font-mono text-xs text-ink-soft sm:flex-row sm:items-baseline sm:justify-between"
        style={{ borderColor: "var(--ink-hair)" }}
      >
        <span>Built in public by @thevedlabs</span>
        <span>prefers-reduced-motion honoured · no tracking before consent</span>
      </div>
    </footer>
  );
}
