"use client";

import { useSearchParams } from "next/navigation";
import { dayLabel } from "@/lib/theme";

type PickupNoticeProps = {
  day: number;
};

export function PickupNotice({ day }: PickupNoticeProps) {
  const searchParams = useSearchParams();

  if (searchParams.get("pickup") !== "1") return null;

  return (
    <p
      className="mt-8 max-w-[var(--text-col)] border-b pb-4 text-ink-soft"
      style={{ borderColor: "var(--ink-hair)" }}
    >
      Pick up where you left off. Day {dayLabel(day)} is ready. No reset
      required.
    </p>
  );
}
