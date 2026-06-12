import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pt-9 pb-6 sm:px-10 lg:flex-row lg:items-baseline lg:justify-between">
      <Link
        href="/"
        className="min-h-11 font-mono text-xs uppercase text-ink"
        aria-label="AI Operator Sprint home"
      >
        AI Operator Sprint
      </Link>
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase text-ink-soft"
      >
        <Link className="min-h-11 py-3 hover:text-ink" href="/curriculum">
          Curriculum
        </Link>
        <Link className="min-h-11 py-3 hover:text-ink" href="/today">
          Today
        </Link>
        <Link className="min-h-11 py-3 hover:text-ink" href="/live">
          Live ledger
        </Link>
        <Link className="min-h-11 py-3 hover:text-ink" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-10">
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

