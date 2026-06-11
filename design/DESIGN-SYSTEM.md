# Design System — AI Operator Sprint v0.2

> Single source of truth for EVERY surface: site, OG cards, video graphics, carousels, thumbnails. Nothing ships with ad-hoc values.
> **Direction: Electric Dusk** — from Ved's own moodboard (Ved x Education), corrected from the v0.1 guess and validated against field evidence (see `../../learning AI GTM engineering` workspace, stage 02 references/design-references.md): serif-display + mono + tinted near-black is the apex pattern at Claude, Resend, and Raycast — and none of them pair a high-contrast serif with purple darks. Distinctive, not derivative. **Pending Ved's approval (FIN-120).**

## Brand stance

Indie film poster meets terminal. Dark, warm, editorial marketing surfaces; calm warm-paper reading surfaces for lessons. Energy comes from type scale, one coral accent, and restrained motion — never from gradients-on-everything, glow borders, or blur orbs (the exact genre we reject; claudecodechallenge already wears it). Echo of Ved's INVOKER identity (serif display, mono uppercase labels, temperature-shift accent words) without copying it.

## Tokens

```css
:root {
  /* — Dark surfaces (marketing: /, /live, OG, video plates) — Electric Dusk */
  --twilight: #0E0B14;        /* page bg */
  --dusk: #1A1524;            /* raised */
  --purple-ash: #2E2640;      /* surface 2 / cards */
  --line: rgba(255,255,255,0.08);          /* hairlines; 0.5px where @supports */
  --line-strong: rgba(255,255,255,0.15);

  /* — Paper surfaces (lessons, curriculum reading) — warm ivory, proven at Anthropic */
  --paper: #FAF9F5;
  --paper-raised: #F0EEE6;
  --ink: #141413;             /* warm black, not neutral */
  --ink-soft: #5A564E;
  --paper-line: rgba(20,20,19,0.12);

  /* — Accent: ONE color, two contexts */
  --coral: #E8614A;           /* Electric Coral — dark surfaces, highlights, active states */
  --coral-ink: #A93B28;       /* AA-safe coral for text on paper */

  /* — Text on dark */
  --pale-violet: #C8C0D8;     /* primary */
  --lavender-haze: #8A7EA8;   /* secondary */
  --white: #FFFFFF;           /* display headlines only */

  /* — Type */
  --font-display: "Fraunces", Georgia, serif;          /* 600; display sizes ≥32px ONLY */
  --font-body: "Outfit", system-ui, sans-serif;        /* 400/500; captions use 800 */
  --font-mono: "JetBrains Mono", ui-monospace, monospace; /* labels, prompts, numbers, dates */

  /* — Scale (1.25, rem) */
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.25rem;
  --text-xl: 1.5625rem; --text-2xl: 1.953rem; --text-3xl: 2.441rem;
  --text-4xl: 3.052rem; --text-5xl: 3.815rem;

  /* — Spacing (4px) */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-6: 24px;
  --s-8: 32px; --s-12: 48px; --s-16: 64px; --s-24: 96px;

  --radius: 10px; --radius-lg: 16px;
  --text-col: 640px;          /* max width for any readable column (Anthropic discipline) */

  /* — Motion (two-speed, evidence-backed) */
  --ease-micro: cubic-bezier(0.25,0.46,0.45,0.94);   /* 150ms — hovers, toggles (Linear) */
  --ease-ui: cubic-bezier(0.165,0.84,0.44,1);        /* 250ms — panels, accordions (Claude/Clay) */
  --ease-hero: cubic-bezier(0.25,1,0.5,1);           /* 800ms — hero/section reveals (Claude) */
  /* asymmetric hover (Attio): transition 300ms, but hover-in duration 50ms */
}
```

## Signature moves (borrowed with receipts)

1. **Gradient-clipped serif H1** on twilight — Fraunces 600, `linear-gradient(to bottom right, #fff 30%, #ffffff80)` text-clip, line-height 100%, balanced. *(Resend)*
2. **Mono annotation system** — JetBrains Mono uppercase micro-labels numbering everything: `DAY 07`, `WEEK 2.0`, `FIG 0.3`-style. The "terminal document" conceit. *(Linear)*
3. **Day-row grammar** — fixed-width mono `DAY N` column + title + self-tracked checkbox + strikethrough on done + `?day=next` deep link. *(couchto5k)*
4. **Ghost numerals** — oversized Fraunces day numbers at low alpha as the card's typographic object, coral-tinted on hover. *(claudecodechallenge, re-voiced)*
5. **Tabular-nums mono counters** for streaks/commitment counts — numbers are the brand; render them like instrument readouts. *(Vercel, minus the LCD font)*
6. **Asymmetric hover** — slow settle (300ms), instant response (50ms). *(Attio)*
7. **Lesson ritual anatomy** (paper surface): Intro → Today's Task → Prompt-to-copy (mono block, copy button) → Expected Outcome → Failure Modes → "You're done for today. Tomorrow: …" *(claudecodechallenge skeleton + couchto5k hard-stop)*
8. **Color-field sectioning** instead of card grids where possible — alternate twilight/dusk bands, one idea per band. *(Anthropic)*

## Rules that prevent slop

1. **One accent.** Coral only. It marks: active states, the current day, completion moments, one word per headline maximum. Never decorative.
2. **Fraunces at display sizes (≥32px) only** — never body, never captions. Body is always Outfit. Numbers/labels/prompts always mono.
3. **Dark sells, paper teaches.** Marketing = twilight. Lessons = warm paper. No theme toggle in v1.
4. **Hairlines, not shadows** — rgba borders (0.5px where supported); shadow only on the sticky Coach panel.
5. **No: glow borders, blur orbs, animated gradients, per-character text animation, bounce easing.** (Each banned by a brand we respect — and by the 2026 fatigue the scouts documented.)
6. **No locked states.** Field evidence: zero of six challenge/course sites lock content. Pacing is *coached* (/today resolver + Coach), never enforced. Trust is the brand.
7. **Copy buttons on every prompt block** — the most-used component; mono, coral "copied ✓" state.
8. **Progress shown positively, always.** "12 of 30 done." Celebration (confetti-class) reserved for week boundaries + Day 30.
9. **WCAG AA everywhere** — coral-ink (not coral) for text on paper; focus rings 2px coral; targets ≥44px.
10. **640px max** on any reading column. Film grain 3.5% on dark marketing surfaces only — never over screen recordings (see EDIT-RECIPE), never on paper.

## Core components (build order)

PromptBlock → DayRow (mono label + checkbox + strikethrough) → ProgressBar + WeekTabs → GhostNumeral DayCard → CommitmentForm (venue + date, "lock in your demo") → CoachPanel → ShareModal (editable prefilled message) → SiteNav/Footer.

## Voice

Direct, warm, UK-flavoured, zero guru-speak. Plan honesty early and often ("free, no card, nothing to buy during the sprint — the only cost is Claude Pro, ~$20/mo"). Hard stops celebrated. Numbers over adjectives. British spelling. Banned: "unleash", "supercharge", "10x your life", 🚀-energy.

## Cross-surface

- **OG cards (1200×630):** twilight bg, ghost Fraunces day numeral, title in Fraunces, mono meta line, coral progress dots, @thevedlabs mark. One template, 31 outputs.
- **Video:** full spec in workspace `stages/03-content/references/EDIT-RECIPE.md` — Fraunces for hook cards (≥72px), Outfit 800 for karaoke captions (NOT Fraunces — stroke shimmer at small sizes), coral highlight word, plate `#0E0B14` @ 85%, grain ≤2% over screen recordings.
- **Carousels/thumbnails:** same tokens; thumbnails ≤3 words, ≥75px.
