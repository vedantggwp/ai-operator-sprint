---
day: 7
title: "SHIP: Prompt Library v1"
week: 1
time: "10 min"
status: draft
---

## Lesson

This is a ship day — the first of 4. Nothing new to learn. Today you look at what a week of 10-minute builds adds up to, merge it into one artifact, and put a version number on it.

Count what exists now that didn't 8 days ago: a commitment with a date, a configured workspace, a delegation list, 5 tested templates, a trust checklist, a one-page data policy, and a project that briefs Claude before you've said a word. About 80 minutes of total build time. None of it took talent; all of it took showing up.

Notice what you didn't do, too. No 3-hour tutorial binge, no 40 open tabs. You did the small real thing and stopped, 8 days running — and stopping on time is why you're still here. Most "getting into AI" attempts die of day-3 overreach, not boredom.

Shipping is the difference between having files and having a system. Shipped work gets a name, a version and an audience — even an audience of one. So today the pieces merge into Prompt Library v1: your templates, with your checks wired in and your house rules attached. It will be wrong in places and improved later. That's what the 1 is for.

## Build

1. **Take stock (2 min).** Open `AI-OS`. You should find 6 files — `COMMITMENT`, `WORKSPACE`, `DELEGATION-LIST`, `PROMPTS`, `TRUST-CHECKLIST`, `DATA-POLICY` — plus Sprint HQ over at claude.ai. Missing one? Note which. It becomes one 10-minute block at the weekend, not a job for right now.

2. **Assemble the library (4 min).** New chat in Sprint HQ:

   ```
   Ship day. Assemble my Prompt Library v1 from this week's work.

   You already have PROMPTS and DELEGATION-LIST in project knowledge. Here are the other two pieces:

   My trust checklist: [paste TRUST-CHECKLIST]
   The RED section of my data policy: [paste it]

   Build one markdown file titled "Prompt Library v1 — [today's date]":
   1. A 3-line header: what this library is, whose it is, and the version.
   2. My 5 templates from PROMPTS, unchanged unless one breaks a rule below.
   3. 1 new template, same format as the others, for the asterisked task on my Delegation List.
   4. Under every template that produces facts I'd act on, one line: "Check: [the matching rule from my trust checklist]".
   5. A footer titled "House rules": my red list compressed to 3 lines, plus "describe tasks, don't paste data".

   Output a single markdown block with nothing outside it, so it saves as one file.
   ```

   Watch what this is: Day 3's templates, Day 2's list, Day 5's checks and Day 6's rules, becoming one tool. That's the week, integrated.

3. **Edit like an owner (2 min).** Read it top to bottom once. Find at least one line you disagree with and change it — if you can't, you're not reading. Your name goes on this, not Claude's.

4. **Save, update, decide (1 min).** Save it as `PROMPT-LIBRARY` in `AI-OS`, then add it to Sprint HQ's knowledge in place of `PROMPTS`, so next week's chats use the upgraded version. Then make the call: private — a full ship, living in your folder and your project — or public, pasted anywhere a link can live so someone else can copy a template.

5. **Reread the commitment (30 sec).** Open `COMMITMENT` from Day 0. The date on it is 23 days away. Week 1 promised a properly set-up, properly distrusted stack; you now have one.

## Ship

Today's artifact is Prompt Library v1 — the week merged into one file — saved in `AI-OS`, loaded into Sprint HQ, and shared if you choose.

- [ ] 6 templates with [placeholders]; checks under the fact-producing ones
- [ ] House rules footer: red list plus describe-don't-paste
- [ ] Library replaces `PROMPTS` in project knowledge; public-or-private decided on purpose

## If it goes wrong

- **You're missing 2 or 3 days, and today feels like debt.** Ship anyway. v1 means version, not completeness — assemble from what exists and let the gaps name themselves in the header ("checks pending: Day 5"). Do not spend today catching up; the cadence is the asset you're protecting.
- **The merged library feels bloated.** Cut. 6 tight templates beat 10 flabby ones — if you can't imagine using one in the next 2 weeks, delete it. Deleting is operating too.
- **Sharing it publicly feels exposing.** Check the footer did its job: task descriptions and placeholders only, no client names, no real data — that's exactly what the house rules are for. Still uneasy? Private is a full ship. The only compulsory audience all month is your Day 30 person.
- **Claude rewrote templates you'd already tuned.** "Restore templates 1 to 5 exactly as they appear in PROMPTS; add, don't rewrite." You're the editor. The library changes when you change it.

## Going deeper (optional)

Ask Claude for a v2 note: "Based on my Delegation List, which 2 templates should Prompt Library v2 add, and why? 100 words, dated 7 days from now." Paste it at the bottom of the library. Now it has a roadmap as well as a version number. Skippable — v1 is the artifact.

---

You're done for today. That's Week 1 shipped — tomorrow Week 2 opens and the chat starts becoming a system, beginning with the memory file Claude reads before anything else. The promised straight talk: week 2 is where the desktop agent arrives, and that needs Claude Pro — about $20 a month, roughly £20 by the time it lands; Day 0 has the detail. Week 1 ran entirely on the free tier, as planned, and you now have 8 days of evidence to decide with. If it's a yes, set it up tonight. If it's a not-yet, the first days of week 2 still run free — decide when the agent lands mid-week.

Share it: "Week 1 of the AI Operator Sprint, shipped: 7 files, a project that knows my work, and Prompt Library v1 — 6 templates with checks and house rules built in. About 80 minutes of building, total. 23 days to demo. #AIOperatorSprint"
