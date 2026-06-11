# Design System — AI Operator Sprint v0.1

> Single source of truth. Every page, component, OG image, slide, and Reel frame borrows from this file — nothing ships with ad-hoc values. **Direction A (Electric Dusk) is the working default pending Ved's approval;** Direction B (Obsidian & Chalk — stark mono, chalk-white on near-black, single warm accent) is the named alternative.

## Brand stance

Credible operator, not AI guru. The aesthetic says: *built by someone who ships.* Dark, confident marketing surfaces; calm, light reading surfaces for lessons (long-form readability beats vibes where people actually work). Energy comes from motion and accent color, never from clutter, gradients-on-everything, or emoji confetti. If a component would look at home in a crypto landing page template, it's wrong.

## Tokens (CSS custom properties)

```css
:root {
  /* Surfaces — marketing (dark) */
  --surface-0: #0B0B12;      /* page background */
  --surface-1: #14141F;      /* cards */
  --surface-2: #1D1D2B;      /* raised */
  --line: rgba(255,255,255,0.08);

  /* Surfaces — lesson/reading (light) */
  --paper-0: #FAFAF7;        /* warm off-white, not pure white */
  --paper-1: #FFFFFF;
  --ink: #16161D;
  --ink-soft: #4A4A57;
  --paper-line: rgba(22,22,29,0.10);

  /* Accent — "electric dusk" */
  --accent: #7C6CFF;         /* violet core */
  --accent-hot: #B8FF3C;     /* electric lime — sparingly: progress, success, the finish line */
  --accent-ink: #2A1FA8;     /* accent for light surfaces (AA on paper) */

  /* Status */
  --done: #B8FF3C;
  --warn: #FFB02E;
  --danger: #FF5D5D;

  /* Type */
  --font-display: "Clash Display", "Space Grotesk", sans-serif;  /* headlines only */
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;        /* prompts, code, numbers */

  /* Scale (1.25 ratio, rem) */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
  --text-lg: 1.25rem; --text-xl: 1.5625rem; --text-2xl: 1.953rem;
  --text-3xl: 2.441rem; --text-4xl: 3.052rem;

  /* Spacing (4px base) */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-6: 24px;
  --s-8: 32px; --s-12: 48px; --s-16: 64px; --s-24: 96px;

  --radius: 10px; --radius-lg: 16px;
  --shadow-card: 0 1px 2px rgba(0,0,0,.25), 0 8px 24px rgba(0,0,0,.18);
}
```

## Rules that prevent slop

1. **Two accents max per view.** Violet works; lime is *earned* (completion, streaks, Demo Day). Never both decorating the same idle element.
2. **Display font for headlines only** — body text never set in display. Mono for prompts, day numbers, and metrics (numbers are the brand: render them beautifully).
3. **Dark for selling, light for learning.** Landing/`/live`/OG images = dark. Day pages/curriculum = paper. No theme toggle in v1.
4. **One border style** (`--line`/`--paper-line`, 1px). No double borders, no glow borders.
5. **Motion: 150–250ms ease-out, transform/opacity only.** Confetti-class celebration is reserved for week completions and Day 30 (couchto5k earned this pattern; we keep it rare so it stays meaningful).
6. **Copy buttons on every prompt block.** Mono, paper-inverted, with a "copied ✓" state. This is the most-used component in the product — design it first.
7. **Progress is always visible, never shaming.** "12 of 30 done" not "18 missed." No red on progress surfaces, ever.
8. **WCAG AA minimum** on all text (4.5:1); interactive targets ≥44px; focus rings visible (2px `--accent`, offset 2). Accessibility is on-brand — Ved built an a11y product.
9. **Screenshots get the device-frame treatment** (consistent 12px radius, 1px line, shadow-card) — never raw rectangles pasted in.
10. **No stock anything.** Illustration = typographic/diagrammatic, from tokens above.

## Core components (build order)

PromptBlock (copy button) → DayCard (number, title, state: locked/today/done) → ProgressBar + WeekTabs → CommitmentForm (Day 0) → CoachPanel (chat, day-aware header, disclosure line) → ShareCard (prefilled, editable) → ArtifactChecklist → SiteNav/Footer.

## Voice (copy rules)

Direct, warm, UK-flavored, zero guru-speak. Say "free, no card, nothing to buy during the sprint" early and often. Plan honesty is brand ("the only cost is Claude Pro, ~$20/mo"). Hard stops are celebrated ("You're done for today. Tomorrow: …"). Numbers over adjectives. British spelling. Never "unleash", "supercharge", "10x your life", or any sentence that could end with 🚀.

## OG / social frames

1200×630, dark surface, day number huge in mono, title in display, progress dots, @thevedlabs mark bottom-left. Generated programmatically (one template, 31 outputs) — spec in site build.
