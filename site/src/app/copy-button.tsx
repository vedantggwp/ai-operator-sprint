"use client";

import { useState } from "react";

export function CopyButton({ payload }: { payload: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable (permissions/insecure context) — leave state unchanged
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="font-mono text-xs uppercase tracking-widest px-3 py-2 rounded-[8px] border border-well-text/30 text-well-text/80 hover:text-well-text hover:border-well-text/60 transition-colors duration-150"
      aria-live="polite"
    >
      {copied ? <span style={{ color: "var(--accent)" }}>copied ✓</span> : "copy"}
    </button>
  );
}
