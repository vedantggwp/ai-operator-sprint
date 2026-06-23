import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { weekIndexForDay } from "./theme";

const tokenNames = [
  "paper",
  "card",
  "ink",
  "ink-soft",
  "ink-line",
  "ink-hair",
  "w1",
  "w2",
  "w3",
  "w4",
] as const;

export type PaperLedgerTokenName = (typeof tokenNames)[number];
export type PaperLedgerTokens = Record<PaperLedgerTokenName, string>;

let cachedTokens: PaperLedgerTokens | null = null;

export async function readPaperLedgerTokens(): Promise<PaperLedgerTokens> {
  if (cachedTokens) return cachedTokens;

  const css = await readFile(join(process.cwd(), "src/app/globals.css"), "utf8");
  cachedTokens = Object.fromEntries(
    tokenNames.map((name) => [name, readToken(css, name)]),
  ) as PaperLedgerTokens;

  return cachedTokens;
}

export function weekPigment(tokens: PaperLedgerTokens, day: number): string {
  return tokens[`w${weekIndexForDay(day)}` as PaperLedgerTokenName];
}

function readToken(css: string, name: PaperLedgerTokenName): string {
  const match = new RegExp(`--${name}:\\s*([^;]+);`).exec(css);

  if (!match) {
    throw new Error(`Missing Paper Ledger token --${name}`);
  }

  return match[1].trim();
}
