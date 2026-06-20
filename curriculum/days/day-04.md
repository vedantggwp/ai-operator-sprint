---
day: 4
title: "Projects & persistent context"
week: 1
time: "10 min"
status: draft
---

## Lesson

Yesterday's templates fixed the per-task briefing. One leak left: every new chat starts cold. The context you typed on Monday is gone by Thursday, and re-typing it is exactly the kind of manual work you listed on Day 2.

Memory helps less than you'd hope here. It's a summary Claude writes about you, re-synthesised roughly every 24 hours — automatic, useful, and not under your control word for word. A Project is the deliberate version: a workspace with 2 pockets. Instructions — your exact standing brief, applied to every chat inside. Knowledge — files Claude reads in full, not as a gist. Memory is what Claude happens to remember; a project is what you decided it should know.

Projects are on every plan, including free (capped at 5 — today uses 1). And today matters in the arc because everything from here runs inside it: tomorrow's verification work, the week-1 ship, all of week 2's system-building. You're not making a folder for tidiness. You're building the room the rest of the month happens in — briefed once, properly, so no morning starts with the same 3 sentences about who you are.

## Build

1. **Create the project (1 min).** At [claude.ai](https://claude.ai), open Projects in the sidebar — you located it on Day 1 — and create a new one called `Sprint HQ`. The free plan allows 5; this is the only one the programme needs.

2. **Write the standing instructions (4 min).** On the project's page you'll find a place for instructions and a place for knowledge — the 2 pockets. Here's the contrast for the first.

   Weak:

   ```
   You are a helpful assistant. Be professional and concise.
   ```

   Strong — paste and fill:

   ```
   Standing instructions for every chat in this project.

   Who I am: [name], a [role]. My week mostly involves [2-3 real things you do].
   What this is: my HQ for the AI Operator Sprint — one small AI build a day for 30 days, ending with a demo of [demo] to [person] on [date].

   In every chat here:
   - Treat my messages as delegations. If my brief is missing an input you need, ask one question before answering.
   - Default to under 200 words unless I ask for a deliverable.
   - Plain English. Never open with "Great question" and never close with "I hope this helps".
   - If you're not sure something is true, say so plainly instead of guessing.
   - My knowledge files are the source of truth about my work — check them before asking me anything they already answer.
   ```

   The weak one is adjectives — "professional" isn't checkable, so it changes nothing. The strong one is rules Claude can follow and you can audit, plus the context that makes every answer land in your actual week.

3. **Add your knowledge (2 min).** Add `DELEGATION-LIST` and `PROMPTS` from your `AI-OS` folder — upload the files or paste their text in. Both are descriptions of your work, written by you, so they're safe to add; the full rules on what never gets uploaded arrive on Day 6.

4. **Run the proof (2 min).** First in an ordinary chat *outside* the project, then in a new chat *inside* it, ask the same question:

   ```
   What should I automate first, and what's my first step this week?
   ```

   Outside: plausible generalities. Inside: your asterisked task, by name, in under 200 words, no filler — the instructions and the files doing their job. That gap is what you just built.

5. **Log it (1 min).** Add one line to your `WORKSPACE` note: "Sprint HQ live — instructions set, 2 files in knowledge." From today, sprint work happens inside it.

## Ship

Today's artifact is a project that knows you — Sprint HQ, carrying your standing brief and your 2 working files, proven against the same question asked cold.

- [ ] Sprint HQ exists, instructions written in your words
- [ ] `DELEGATION-LIST` and `PROMPTS` added as knowledge
- [ ] Proof run — the inside answer named your actual work

## If it goes wrong

- **You can't find Projects.** Do today on the web app at a computer, same advice as Day 1 — the mobile apps tuck Projects away differently, and some shuffle it between updates.
- **The instructions get ignored.** Two usual causes. Adjectives — swap them for checkable rules, exactly as on Day 3. Or a clash with what you typed in the chat — the live message usually wins; instructions are defaults, not chains. Also confirm you started a *new* chat inside the project: chats begun outside don't inherit.
- **"Knowledge is full" or an upload complains about size.** The free plan holds project files up to the raw context limit — roughly a few hundred pages of text. Your 2 notes won't dent it; if you pasted something enormous, trim it to the parts Claude actually needs.
- **You expected it to remember yesterday's chats.** Projects keep their own memory, separate from your account-wide one, and it builds up inside the project over time. The files are the reliable context; memory is the bonus on top, not the foundation.

## Going deeper (optional)

Create a second project for the asterisked task on your Delegation List — name it after the work, give it 3 standing instructions specific to that task and nothing else. That's 2 of your 5 free slots used on purpose: recurring work gets a room of its own. Skippable — Sprint HQ alone carries the month.

---

You're done for today. Tomorrow: you make Claude confidently wrong on purpose — then build the 5-point checklist for the days it happens by accident.

Share it: "Day 4 of the AI Operator Sprint: built a workspace that already knows my work — standing instructions, my files attached, briefed once. Same question inside and outside the project: not close."
