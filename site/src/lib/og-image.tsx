import { ImageResponse } from "next/og";
import type { CSSProperties } from "react";
import {
  readPaperLedgerTokens,
  weekPigment,
  type PaperLedgerTokens,
} from "./paper-ledger-tokens";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

type PaperLedgerOgProps = {
  day: number;
  numeral: string;
  title: string;
  meta: string;
};

export async function renderPaperLedgerOg({
  day,
  numeral,
  title,
  meta,
}: PaperLedgerOgProps) {
  const tokens = await readPaperLedgerTokens();
  const accent = weekPigment(tokens, day);

  return new ImageResponse(
    <div style={rootStyle(tokens)}>
      <div style={frameStyle(tokens)} />
      <div style={numeralStyle(tokens)}>{numeral}</div>
      <div style={circleStyle(accent)} />
      <div style={copyStyle}>
        <div style={metaStyle(tokens)}>{meta}</div>
        <div style={titleStyle(tokens)}>{title}</div>
      </div>
      <div style={markStyle(tokens)}>@thevedlabs</div>
    </div>,
    OG_SIZE,
  );
}

function rootStyle(tokens: PaperLedgerTokens): CSSProperties {
  return {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: tokens.paper,
    color: tokens.ink,
  };
}

function frameStyle(tokens: PaperLedgerTokens): CSSProperties {
  return {
    position: "absolute",
    inset: 28,
    border: `1px solid ${tokens["ink-line"]}`,
    borderRadius: 20,
  };
}

function numeralStyle(tokens: PaperLedgerTokens): CSSProperties {
  return {
    position: "absolute",
    left: -28,
    top: -72,
    fontFamily: '"Arial Narrow", sans-serif',
    fontSize: 430,
    fontWeight: 800,
    lineHeight: 0.82,
    color: tokens.ink,
  };
}

function circleStyle(accent: string): CSSProperties {
  return {
    position: "absolute",
    right: 120,
    top: 92,
    width: 218,
    height: 218,
    borderRadius: 999,
    background: accent,
  };
}

const copyStyle: CSSProperties = {
  position: "absolute",
  left: 72,
  right: 72,
  bottom: 86,
  display: "flex",
  flexDirection: "column",
};

function metaStyle(tokens: PaperLedgerTokens): CSSProperties {
  return {
    fontFamily: "monospace",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
    color: tokens["ink-soft"],
  };
}

function titleStyle(tokens: PaperLedgerTokens): CSSProperties {
  return {
    marginTop: 24,
    maxWidth: 850,
    fontFamily: '"Arial Narrow", sans-serif',
    fontSize: 88,
    fontWeight: 800,
    lineHeight: 0.95,
    color: tokens.ink,
  };
}

function markStyle(tokens: PaperLedgerTokens): CSSProperties {
  return {
    position: "absolute",
    right: 72,
    bottom: 68,
    fontFamily: "monospace",
    fontSize: 24,
    fontWeight: 700,
    color: tokens.ink,
  };
}
