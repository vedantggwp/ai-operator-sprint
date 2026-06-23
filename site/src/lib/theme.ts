import type { CSSProperties } from "react";

export const LAST_DAY = 30;

export function dayLabel(day: number): string {
  return String(day).padStart(2, "0");
}

export function clampDay(day: number): number {
  if (!Number.isFinite(day)) return 0;
  return Math.min(LAST_DAY, Math.max(0, Math.trunc(day)));
}

export function weekIndexForDay(day: number): 1 | 2 | 3 | 4 {
  if (day <= 7) return 1;
  if (day <= 14) return 2;
  if (day <= 21) return 3;
  return 4;
}

export function weekAccentVar(day: number): string {
  return `var(--w${weekIndexForDay(day)})`;
}

export function weekAccentInkVar(day: number): string {
  return `var(--w${weekIndexForDay(day)}-ink)`;
}

type AccentStyle = CSSProperties & {
  "--accent": string;
  "--accent-ink": string;
};

export function accentStyleForDay(day: number): AccentStyle {
  return {
    "--accent": weekAccentVar(day),
    "--accent-ink": weekAccentInkVar(day),
  };
}

