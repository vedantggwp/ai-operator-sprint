import { renderPaperLedgerOg, OG_SIZE } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "AI Operator Sprint";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderPaperLedgerOg({
    day: 0,
    numeral: "30",
    title: "Ship something real in 30 days.",
    meta: "AI OPERATOR SPRINT / 31 OPEN DAYS",
  });
}
