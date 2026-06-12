import { CommitmentSentence } from "@/components/CommitmentSentence";
import { GeometryAccent } from "@/components/GeometryAccent";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { accentStyleForDay } from "@/lib/theme";
import { captureEmail } from "./actions";

export const metadata = {
  title: "Start — AI Operator Sprint",
  description: "Lock your Day 30 demo commitment and start Day 0.",
};

export default function StartPage() {
  return (
    <main
      className="relative flex-1 overflow-x-hidden"
      style={accentStyleForDay(0)}
    >
      <SiteHeader />
      <GeometryAccent className="top-32 right-[10%] size-36 sm:size-56" />
      <CommitmentSentence emailAction={captureEmail} />
      <SiteFooter />
    </main>
  );
}

