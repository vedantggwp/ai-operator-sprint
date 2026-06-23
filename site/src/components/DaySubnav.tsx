"use client";

import { useEffect, useState } from "react";
import { dayLabel } from "@/lib/theme";

const anchors = [
  { id: "lesson", label: "Lesson" },
  { id: "build", label: "Build" },
  { id: "ship", label: "Ship" },
  { id: "tomorrow", label: "Tomorrow" },
];

type DaySubnavProps = {
  day: number;
};

export function DaySubnav({ day }: DaySubnavProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = anchors
      .map((anchor) => document.getElementById(anchor.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = anchors.findIndex(
          (anchor) => anchor.id === visible.target.id,
        );
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="sticky top-4 z-20 border-b bg-paper py-3 sm:top-6"
      style={{ borderColor: "var(--ink-hair)" }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <span className="font-mono text-xs uppercase text-ink-soft">
          DAY {dayLabel(day)} / 30
        </span>
        <nav
          aria-label="Day sections"
          className="relative grid min-h-11 grid-cols-4 overflow-hidden rounded-full border bg-paper-soft font-mono text-xs"
          style={{ borderColor: "var(--ink-hair)" }}
        >
          {anchors.map((anchor, index) => (
            <a
              key={anchor.id}
              href={`#${anchor.id}`}
              className="relative z-10 flex min-h-11 items-center justify-center px-3 text-ink-soft transition-colors duration-150 hover:text-ink"
              aria-current={active === index ? "location" : undefined}
              onClick={() => setActive(index)}
            >
              {anchor.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-1 w-1/4 bg-accent transition-transform duration-300"
            style={{ transform: `translateX(${active * 100}%)` }}
          />
        </nav>
      </div>
    </div>
  );
}
