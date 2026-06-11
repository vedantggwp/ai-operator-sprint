# CLAUDE.md — repo conventions

This is the public source-of-truth repo for the AI Operator Sprint (curriculum + site + design).

- `design/DESIGN-SYSTEM.md` is law. No ad-hoc colors, fonts, spacing, or copy tone anywhere — tokens only.
- Curriculum days live in `curriculum/days/day-NN.md` with frontmatter (day, title, week, time, status). Keep `status:` accurate (draft → ready).
- Voice: direct, UK-flavoured, no guru-speak, plan honesty. See the Voice section of the design system before writing any copy.
- Site code lives in `site/` (Next.js + Tailwind + shadcn). Spec-first: USER-FLOWS govern; TDD on server logic (signup, progress, coach rate-limiter); Playwright e2e on the 5 critical flows.
- Never commit: API keys, participant data, anything from the private strategy workspace.
- Licensing: code MIT, curriculum CC BY 4.0 — keep the split intact.
