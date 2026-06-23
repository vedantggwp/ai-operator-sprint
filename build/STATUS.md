# Build status — AI Operator Sprint launch

Branch: build/launch-fleet. Recovered and completed from the laptop on 2026-06-23, after the cloud build agent finished the work but could not push it (its GitHub App lacked `contents:write`, 403 on every attempt). Days 08-30 were recovered verbatim from the agent's 2026-06-21 Google Drive backups; days 01-07 were voice-rewritten locally. PR: #1.

## Curriculum (31 days) — DONE
- [x] day-00 — hand-written exemplar (house voice)
- [x] day-01..07 — voice rewrite complete (zero dashes, Feynman/Zinsser, facts preserved)
- [x] day-08..30 — full lessons, recovered from Drive backups; checkable claims flagged
- [x] All 31 pass: 0 em/en dashes, 0 banned words, UK spelling (artefact), full anatomy

## Frontend — DONE
- [x] npm run build green (73 pages: /day/0..30 plus every OG image)
- [x] npm run lint clean
- [x] routes render real curriculum from markdown
- [x] OG images build (/opengraph-image and /day/[n]/opengraph-image)
- [ ] e2e — Playwright browsers not installed in build env. Run `npx playwright install && npm run test:e2e` in site/ locally before production.

## Delivery — DONE
- [x] curriculum.ts loader handles numeric `week` frontmatter
- [x] 3 curriculum commits pushed (recover 08-30; voice 01-07; UK spelling)
- [x] PR opened: build/launch-fleet -> master, #1 (NOT merged, by design)

## Left for the human
- Review and merge PR #1 when ready. Drip-launch on your timing; do not auto-deploy to production.
- Cloudflare CNAME: `sprint -> cname.vercel-dns.com` (DNS only; still NXDOMAIN).
- Flip Vercel deployment protection or go to production.
- Fact-check the flagged claims in FACTCHECK.md.
- Playwright e2e local run (above).
- Optional: Supabase anon key + Resend key for email capture (currently a stub).
