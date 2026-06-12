import Link from "next/link";
import { GeometryAccent } from "@/components/GeometryAccent";
import { SiteHeader } from "@/components/SiteChrome";
import { accentStyleForDay } from "@/lib/theme";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={accentStyleForDay(0)}
    >
      <SiteHeader />
      <GeometryAccent className="top-28 right-[12%] size-36 sm:size-56" />
      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-16 sm:px-10">
        <div>
          <p className="font-mono text-5xl tabular-nums text-ink">404</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-none text-ink">
            Page not found.
          </h1>
          <Link
            href="/"
            className="mt-10 inline-flex min-h-11 items-center rounded-full border bg-card px-5 font-mono text-xs uppercase text-ink"
            style={{ borderColor: "var(--ink-line)" }}
          >
            Go home
          </Link>
        </div>
      </section>
    </main>
  );
}

