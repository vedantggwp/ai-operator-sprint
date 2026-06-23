import { TodayResolver } from "@/components/TodayResolver";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { accentStyleForDay } from "@/lib/theme";

export const metadata = {
  title: "Today — AI Operator Sprint",
  description: "Resolve the next AI Operator Sprint day from local progress.",
};

export default function TodayPage() {
  return (
    <main className="flex-1 overflow-x-hidden" style={accentStyleForDay(0)}>
      <SiteHeader />
      <TodayResolver />
      <SiteFooter />
    </main>
  );
}

