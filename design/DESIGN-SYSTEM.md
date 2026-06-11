# Design System — AI Operator Sprint v0.3

> Single source of truth for EVERY surface: site, OG cards, video graphics, carousels, thumbnails. Nothing ships with ad-hoc values.
> **Direction: PAPER LEDGER** — picked 2026-06-11 from a three-direction board built on live-site evidence (therawmaterials.com, rauno.me, duties.xyz, antimetal.com, linear.app/method, press.stripe.com, apple.com). A field manual printed on warm paper: ink rules frame the page like a sheet, the 30 days are a rail of numbered pigment cards, display type is huge and cropped at the frame like a physical object. **FROZEN. v0.2 (Electric Dusk) is superseded.**

## Brand stance

A printed field manual you can run. Warm paper, confident ink, one pigment per week. Energy comes from type scale, the accumulating ledger, and calm spring motion — never from gradients, glow borders, or blur orbs. The page is a sheet; the type is an object on it; your progress is the only thing that adds color. In a feed full of dark-mode AI sites, this looks like a printed artifact — that contrast is the brand.

## Tokens

```css
:root {
  /* — The sheet — */
  --paper: #F2E7DC;            /* page field, warm */
  --paper-soft: #EBDFD2;       /* wells on paper, alternating bands */
  --card: #FFFFFF;             /* specimen cards: artifacts, lessons, modules */
  --ink: #0E0E0E;              /* text, frames, the voice */
  --ink-soft: #5C564E;         /* secondary text on paper/card */
  --ink-line: rgba(14,14,14,0.92);   /* 1px page frame + ledger rules */
  --ink-hair: rgba(14,14,14,0.16);   /* hairline dividers */

  /* — Ink wells (code/prompt blocks float dark on paper) — */
  --well: #141312;             /* prompt/terminal block bg */
  --well-text: #F2E7DC;        /* paper-toned text inside wells */

  /* — Week pigments: the calendar IS the palette — */
  --w1: #FC4408;               /* Week 1 — vermillion */
  --w2: #5B04C4;               /* Week 2 — violet */
  --w3: #2F31F5;               /* Week 3 — blue */
  --w4: #101010;               /* Week 4 — ink */
  --w1-ink: #B53105; --w2-ink: #4A03A0; --w3-ink: #2628C4; --w4-ink: #101010;
  /* `--accent` is ALIASED PER PAGE to the current week's pigment (see rule 1) */
  --accent: var(--w1);
  --accent-ink: var(--w1-ink);  /* AA-safe variant for text */

  /* — Status (semantics only, never decoration) — */
  --done: #1F7A33;             /* deep green tick/fill, AA on card */
  --error: #B3261E;

  /* — Type — */
  --font-display: "Bricolage Grotesque", "Arial Narrow", sans-serif; /* 600–800; ≥40px; may crop */
  --font-body: "Hanken Grotesk", system-ui, sans-serif;              /* 400/500/700; captions 800 */
  --font-mono: "JetBrains Mono", ui-monospace, monospace;            /* labels, numerals, prompts */
  /* Optional enhancement: self-hosted Departure Mono for day numerals only (free license, not on GF) */

  /* — Scale (1.25, rem) — */
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.25rem;
  --text-xl: 1.5625rem; --text-2xl: 1.953rem; --text-3xl: 2.441rem;
  --text-4xl: 3.052rem; --text-5xl: 3.815rem; --text-display: clamp(4rem, 12vw, 11rem);

  /* — Spacing (4px) — */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-6: 24px;
  --s-8: 32px; --s-12: 48px; --s-16: 64px; --s-24: 96px;

  /* — Geometry — */
  --frame-inset: 14px;         /* page-edge margin before the ink frame */
  --radius-frame: 20px;        /* the sheet's corner */
  --radius-card: 16px;         /* specimen cards */
  --radius-ui: 8px;            /* inputs, wells */
  --radius-pill: 999px;        /* buttons, nav islands */
  --text-col: 640px;           /* max width for any reading column */

  /* — Motion (high-damping, no bounce) — */
  --ease-micro: cubic-bezier(0.25,0.46,0.45,0.94);   /* 120–150ms — hovers, ticks */
  --ease-ui: cubic-bezier(0.165,0.84,0.44,1);        /* 250ms — card lifts, panels */
  --ease-hero: cubic-bezier(0.25,1,0.5,1);           /* 700ms — section reveals, week-tint crossfade */
  /* asymmetric hover: settle 300ms out, 50ms in */
}
```

## Signature moves (borrowed with receipts — all verified on the live sites 2026-06-11)

1. **The printed sheet** — a 1px `--ink-line` frame inset `--frame-inset` from the viewport edge, `--radius-frame` corners. Every page lives inside it; it is the first thing that says "this is a document, not a dashboard." *(therawmaterials.com)*
2. **The pigment-card rail, 00–30** — the nav IS the tracker: numbered rounded cards, one per day. Done = filled in its week pigment, current = lifted (+2px, soft shadow, pigment border), future = paper outline ghost. Week = pigment family, so the rail becomes a gradient of your month. *(therawmaterials.com index; streak logic from Brilliant)*
3. **Cropped display type** — Bricolage 700–800 headlines sized past the frame and clipped by it; type behaves like a physical object on the sheet, never letter-spaced or squished. *(rauno.me/craft, duties.xyz)*
4. **One geometry accent per page** — a single circle (or quarter-arc) in the current week's pigment, overlapping the display type. Accent as object, not as text color. *(rauno.me)*
5. **Day-local subnav** — `DAY 14 / 30` mono label + Lesson · Build · Ship · Tomorrow with an underline indicator that slides. *(apple.com product pages)*
6. **Ledger rows** — the curriculum index as numbered rows with `--ink-hair` rules: mono `01` column, title, self-tracked tick, strikethrough on done, `?day=next` deep link. *(linear.app/method TOC; couchto5k deep link)*
7. **Ink wells** — prompt/code blocks as dark `--well` slabs floating on paper, mono, copy button top-right with "copied ✓" in week pigment. Continuity bonus: IDE/terminal footage in videos sits naturally inside them. *(terminal-on-paper conceit)*
8. **Two-tone paragraphs** — the key phrase in `--ink`, the rest in `--ink-soft`. Attention steered by contrast alone, no highlights. *(linear.app)*
9. **The artifact shelf** — every shipped day adds a white specimen card (title, mono date, link/screenshot) to a public shelf; progress display = accumulated proof. *(rauno.me cards; Are.na logic)*
10. **Instrument counters** — live numbers (operators committed, days shipped) in tabular-nums mono, labeled like readouts: `OPERATORS 214`. *(teenage.engineering nav labels; Vercel counters)*

## Rules that prevent slop

1. **Pigment is the calendar.** Only the current week's pigment is active on a page (`--accent` aliased per page/day). All four appear together ONLY in the rail and the week strip. Never two accents in one composition.
2. **Bricolage at ≥40px only; it may crop, never squish.** Body is always Hanken. Numbers, labels, dates, prompts: always mono. No letter-spacing on display sizes.
3. **Ink rules, not shadows.** Shadow exists in exactly two places: the lifted current-day card and the sticky Coach panel.
4. **Accent never carries text.** Week pigments are fills, geometry, and indicators. Text accents use the `--w*-ink` AA variants, one phrase max per screen.
5. **No: glow borders, blur orbs, animated/mesh gradients, per-character text animation, bounce easing, dark-mode toggle.** The sheet is paper; that's the point.
6. **No locked states.** All 31 days open from day one. Pacing is coached (`/today` resolver + Coach), never enforced. Trust is the brand.
7. **Copy buttons on every prompt block** — the most-used component.
8. **Progress shown positively, always.** "12 of 30 shipped." Celebration reserved for week boundaries (rail row completes its pigment) + Day 30. No confetti spam.
9. **WCAG AA everywhere.** Pigment-ink variants for text; focus rings 2px `--accent` offset 2px, designed not default; targets ≥44px; `prefers-reduced-motion` honored AND credited in the footer.
10. **640px max reading column. Zero CLS.** Fonts preloaded + `font-display: swap` with size-adjusted fallbacks; the frame never reflows.

## Behavioral wiring (THE LEDGER OF PROOF — the figure on this substrate)

- **Day 0 = the commitment sentence** (headline-as-form: "In 30 days I'll build [___] and demo it to [___]."). Locking it stamps a dated white card — the first artifact on your shelf. (Implementation intention + endowment.)
- **Signup = a visible row**: "operator #214 · committed · day 3" joins the public ledger (anonymous handle). Social proof = real rows, never self-congratulation.
- **Zeigarnik close**: every lesson ends "You're done for today. Tomorrow: …" — one line, ink-soft.
- **Goal-gradient ambient**: as the week advances, its pigment quietly accumulates in the rail; Week strips warm the page edges by ~2% tint.
- **Peak-end**: Day 30 = Demo Day (the peak); weekly SHIP days = mini-peaks with the only celebration moments.

## Core components (build order)

PromptWell (ink well + copy) → LedgerRow → PigmentRail (00–30) → DayShell (frame + day-local subnav) → GeometryAccent → CommitmentSentence (Day-0 form) → ArtifactShelf → InstrumentCounter → CoachPanel → ShareModal → SiteNav/Footer.

## Voice

Direct, warm, UK-flavoured, zero guru-speak. Plan honesty early and often ("free, no card — the only cost is Claude Pro, ~$20/mo"). Hard stops celebrated. Numbers over adjectives. British spelling. Banned: "unleash", "supercharge", "10x your life", 🚀-energy.

## Cross-surface

- **OG cards (1200×630):** paper bg, ink frame, giant cropped Bricolage day numeral bleeding off-frame, week-pigment circle overlapping it, mono meta line, @thevedlabs mark. One template, 31 outputs.
- **Video:** full spec in the (private) EDIT-RECIPE — plates flip to **ink-on-paper**: plate `--paper` @ ~92% over footage, captions Hanken Grotesk 800 with the week pigment as highlight, hook cards Bricolage ≥80px cropped at plate edges, mono labels. Grain ≤2%, never over screen recordings. In a dark feed, the paper plates read as printed objects — that's the thumb-stop.
- **Carousels/thumbnails:** same tokens; thumbnails ≤3 words, ≥75px, one geometry accent.
