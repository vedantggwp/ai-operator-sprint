"use client";

import { useState } from "react";

export function CopyButton({ payload }: { payload: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="min-h-11 rounded-[var(--radius-ui)] border border-well-text/30 px-3 py-2 font-mono text-xs uppercase text-well-text/80 transition-colors duration-150 hover:border-well-text/60 hover:text-well-text"
      aria-live="polite"
    >
      {copied ? <span className="text-accent">copied ✓</span> : "copy"}
    </button>
  );
}

