import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DayShell } from "@/components/DayShell";
import { MarkdownBody } from "@/components/MarkdownBody";
import { getAllDays, getDay } from "@/lib/curriculum";
import { getMarkdownAnchorIds } from "@/lib/markdown";

export const dynamicParams = false;

type DayPageProps = {
  params: Promise<{ n: string }>;
};

export function generateStaticParams() {
  return getAllDays().map((day) => ({
    n: String(day.day),
  }));
}

export async function generateMetadata({
  params,
}: DayPageProps): Promise<Metadata> {
  const { n } = await params;
  const day = getDay(Number(n));

  if (!day) {
    return {
      title: "Day not found — AI Operator Sprint",
    };
  }

  return {
    title: `Day ${day.day}: ${day.title} — AI Operator Sprint`,
    description: `${day.week}. ${day.time}.`,
  };
}

export default async function DayPage({ params }: DayPageProps) {
  const { n } = await params;
  const dayNumber = Number(n);
  const day = getDay(dayNumber);

  if (!day) notFound();

  const nextDay = getDay(day.day + 1);
  const anchorIds = getMarkdownAnchorIds(day.body);
  const missingAnchors = ["build", "ship"].filter(
    (anchor) => !anchorIds.has(anchor),
  );

  return (
    <DayShell
      day={day}
      nextDay={nextDay}
      missingAnchors={missingAnchors}
    >
      <MarkdownBody markdown={day.body} />
    </DayShell>
  );
}
