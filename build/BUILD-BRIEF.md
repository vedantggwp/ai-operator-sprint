# BUILD BRIEF — get the AI Operator Sprint to launch-ready

You are the build agent for the AI Operator Sprint, running on the cloud. The repository is checked out and you are on branch `build/launch-fleet`. Your job is to take this site and curriculum to launch-ready, commit your work to this branch, and open a pull request. You run with no human watching, so work carefully, commit often, and never invent facts.

## End state (what "done" means)

1. All 31 days of curriculum (`curriculum/days/day-00.md` .. `day-30.md`) are full, real lessons in the house voice. No stubs left.
2. The Next.js site in `site/` builds and lints clean and renders the real lessons.
3. A pull request from `build/launch-fleet` into `master` is open, with a clear body and a fact-check list.
4. `build/STATUS.md` and `build/FACTCHECK.md` are kept current as you go.

You do NOT: merge the PR, deploy to production, touch DNS, or add any secret or API key. Those are the human's to do on return.

## The voice is law

Read `VOICE.md` at the repo root and obey it exactly. The single hardest rule: **never use an em dash (—) or an en dash (–) as punctuation.** Use a full stop, a colon, a comma, or parentheses instead. This is machine-checked. `curriculum/days/day-00.md` is the gold-standard exemplar, written by hand to this voice. Match its feel: a Feynman storyteller who writes like Zinsser's "On Writing Well". Read it before you write anything.

## Curriculum work (priority 1, the bulk of the job)

**Days 01 to 07** already contain real, research-grounded content, but in the wrong voice (they are full of em dashes and clutter). Your job for these seven is a voice rewrite, not a rewrite of the facts. Preserve every instruction, step, number, and link. Remove every em and en dash. Apply Feynman plainness and Zinsser clutter-cutting. Keep the day anatomy intact.

**Days 08 to 30** are stubs (frontmatter only). Write each as a full lesson that matches the exemplar's anatomy and voice. Use the `title`, `week`, and `time` already in each file's frontmatter as the brief for that day. Build naturally on the earlier days.

Grounding and honesty: you do NOT have the private research corpus. For days 08 to 30, do not state a specific price, model name, settings path, menu label, or usage limit as established fact. Write the teaching plainly, and wherever a checkable claim appears, add an HTML comment right after it: `<!-- FACTCHECK: the exact claim to verify -->`, and add a bullet to `build/FACTCHECK.md` under that day's heading. Prefer evergreen phrasing that does not depend on a number that may drift. When in doubt, teach the principle and let the reader look up the current specifics.

Every day must pass this checklist before you consider it done:
- Zero `—` and zero `–` anywhere in the file.
- Zero banned words: unleash, supercharge, "10x", game-changer, no emoji.
- British spelling throughout.
- Full anatomy present: `## Lesson`, `## Build`, `## Ship` (with a checklist), `## If it goes wrong`, `## Going deeper (optional)`, the closing "You're done for today. Tomorrow: ..." line, and a "Share it:" line.
- Lesson section roughly 150 to 220 words. Whole file roughly 900 to 1100 words.
- Frontmatter keeps `day`, `title`, `week`, `time`, and sets `status: "draft"`. For days 08 to 30 also add `needs_factcheck: true`.

Commit after every two or three days so progress is never lost.

## Frontend work (priority 2)

The site in `site/` already has the routes, the tracker, the OG pipeline, and Playwright specs (built earlier by another agent, present on this branch). Your job is to verify and finish, not to rebuild.

1. In `site/`, run `npm ci` (or `npm install`), then `npm run build` and `npm run lint`. Fix anything red. The curriculum loader reads `curriculum/days/*.md`, so the real content you wrote must render on `/day/[n]` and `/curriculum`.
2. Confirm the OG images still build (`/opengraph-image` and `/day/[n]/opengraph-image`).
3. If Playwright and its browser are already installed, run the e2e specs. If not, leave them and note it in STATUS. Do not attempt a network install.
4. Use only design tokens from `site/src/app/globals.css`. No hardcoded hex anywhere else. Honour the anti-slop rules in `design/DESIGN-SYSTEM.md` (no glow borders, blur orbs, animated gradients, bounce easing, or locked states).

## Process and handoff

- Stay on `build/launch-fleet`. Commit incrementally with clear messages.
- Keep `build/STATUS.md` updated: a checklist of each day (done or not), the frontend status, and exactly what remains. This is the handoff document.
- Keep `build/FACTCHECK.md` updated: every flagged claim, grouped by day, for the human to verify.
- When curriculum and frontend both pass their gates, open a PR from `build/launch-fleet` to `master`. Title: "Launch: full 30-day curriculum + finished site". Body: what you completed, the fact-check summary, and what remains for the human (add the Cloudflare DNS record, flip Vercel protection or go to production, fact-check the flagged claims, optionally add Supabase/Resend keys for email). Do not merge it.
- If you run low on context or time, stop cleanly: commit what you have, and write in STATUS.md exactly which day you reached and the next step, so a re-run picks up from there. On a re-run, read STATUS.md first and continue rather than starting over.

## Parallel build protocol (this is a fleet, not one agent)

Several cloud agents run at once. Your trigger prompt tells you your role. To avoid collisions, each role owns a disjoint slice and its own branch. Never write a file outside your slice.

**Week writers.** Branch off `build/launch-fleet` into your own branch, write ONLY your week's day files, and push that branch:
- Week 1 (voice-rewrite of existing drafts), days 01-07, branch `build/w1`
- Week 2, days 08-14, branch `build/w2`
- Week 3, days 15-21, branch `build/w3`
- Week 4, days 22-30, branch `build/w4`

Write your fact-check notes to your OWN file `build/factcheck-wN.md` (never the shared FACTCHECK.md). Do not touch `site/`, `build/STATUS.md`, or any other week. Commit and push your branch when your seven or nine days pass the checklist. You are independent: you do not wait for anyone.

**Lead / finisher.** You work on `build/launch-fleet`. Each run: verify the `site/` build and lint first. Then assemble whatever is ready: for each existing week branch, run `git fetch origin` then `git checkout origin/build/wN -- curriculum/days/` to pull that week's finished day files onto `build/launch-fleet`. Because weeks touch disjoint files this never conflicts. Compile `build/STATUS.md`, and concatenate any `build/factcheck-wN.md` fragments into `build/FACTCHECK.md`. When all 31 day files are full and the site builds clean, open the PR to master. You are idempotent: if nothing new is ready, do the frontend pass and exit; the next scheduled run assembles more.

## The one rule above all

Never fabricate a fact to sound complete. A flagged claim is a success. A confident wrong number is a failure. The human is offline and is trusting this branch.
