import { renderPaperLedgerOg, OG_SIZE } from "@/lib/og-image";
import { clampDay, dayLabel, LAST_DAY } from "@/lib/theme";

export const runtime = "nodejs";
export const alt = "AI Operator Sprint day";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamicParams = false;

type DayOgProps = {
  params: Promise<{ n: string }>;
};

export function generateStaticParams() {
  return Array.from({ length: LAST_DAY + 1 }, (_, day) => ({ n: String(day) }));
}

export default async function Image({ params }: DayOgProps) {
  const { n } = await params;
  const dayNumber = clampDay(Number(n));
  const label = dayLabel(dayNumber);

  return renderPaperLedgerOg({
    day: dayNumber,
    numeral: label,
    title: `Day ${label} / 30`,
    meta: "AI OPERATOR SPRINT",
  });
}
