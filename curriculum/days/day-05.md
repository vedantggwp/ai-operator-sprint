---
day: 5
title: "Hallucination defence"
week: 1
time: "10 min"
status: draft
---

## Lesson

On Day 2 you learned a delegation carries 4 parts. Today is the fourth — the check — and the reason it's non-negotiable.

Language models produce fluent text, and fluency is not accuracy. When Claude is wrong, nothing in the prose warns you: wrong answers arrive in the same confident register as right ones. The misses cluster on specifics — names, dates, numbers, quotes, links — which are precisely the details that make an answer look finished. The UK regulator names both workplace risks plainly: hallucination, invented detail, and automation bias, trusting output because it sounds done.

The fix is not trusting nothing — a tool you can't trust at all saves no time. It's checking in proportion to stakes. A brainstorm only you see gets a skim. Anything sent to another person gets its load-bearing facts checked. Anything touching money, health, reputation or decisions gets verified against a primary source, or it doesn't ship. The operator's question is never "is this right?" — it's "show me the check": what exactly would I look at to know?

Today you feel the problem rather than read about it. You make Claude brief you on something you know cold, grade it line by line, and turn whatever you catch into a checklist that serves you for the rest of the programme.

## Build

1. **Pick your expert topic (30 sec).** Something you know cold and Claude has no special claim on: your industry's niche corner, your hometown's history, a hobby you've kept up for 10 years, how your team actually works. The more local and specific, the better the test.

2. **Order confident specifics (2 min).** In an ordinary chat *outside* Sprint HQ — you want factory-settings Claude for this test, not the workspace you fitted with honesty rules yesterday:

   ```
   I'm running a test of how you handle specifics. Write a 150-word briefing on [your expert topic] for a newcomer. Include at least 6 concrete specifics — names, dates, numbers or named sources — and state everything plainly, no hedging.
   ```

   The no-hedging line strips Claude's usual caution on purpose: you want to see what failure looks like here, in a chat with no stakes, not next month in something you've already sent.

3. **Grade it (3 min).** Mark every specific: right, wrong, or can't-verify. Count the 3 piles — and notice that before you graded, you couldn't tell them apart. Then make Claude audit itself:

   ```
   Now audit your own briefing. For each specific: how confident are you, and where would I verify it? Flag anything you may have invented.
   ```

   Sometimes it catches its own inventions; sometimes it defends them. Both are useful data: self-audit raises the floor, but the check that counts happens outside the chat.

4. **Build the checklist (3 min).**

   ```
   Build my 5-point trust checklist for AI output, based on what this test showed.

   Structure it by stakes: low (drafts only I see), medium (anything sent to another person), high (money, health, decisions, anything public).

   Rules: exactly 5 points, each checkable in under a minute, each starting with a verb. Include one point about where errors cluster (names, numbers, dates, quotes, links), one about asking for sources up front, and one about what never ships unverified. Under 120 words total.
   ```

5. **Save it (1 min).** Copy it into a note called `TRUST-CHECKLIST` in `AI-OS`. Read it through once: if any point can't actually be done in under a minute, tighten it now.

## Ship

Today's artifact is your 5-point trust checklist — earned from a graded experiment, not copied from a listicle — saved in `AI-OS`.

- [ ] At least 6 specifics graded: right / wrong / can't-verify
- [ ] 5 points, stakes-tiered, each doable in under a minute
- [ ] `TRUST-CHECKLIST` saved in `AI-OS`

## If it goes wrong

- **Claude got everything right.** It happens, especially on well-documented topics — and the lesson still holds, because you couldn't tell before you graded. Run one more pass on something nicher; the more local, recent or personal the topic, the thinner the training data. The point isn't that it always misses. It's that you can't predict which day it does.
- **Half your marks are "can't-verify".** That's not a draw. Anywhere the stakes are real, can't-verify gets treated as wrong — promote that to a rule in your checklist; it's the single most protective habit in this programme.
- **It hedges anyway — "roughly", "around", "I believe".** That's calibration, and in real use you want it. For the test, push once: "Commit to your best specific answer for each." Grade what it commits to.
- **The checklist comes back generic — "verify important facts".** "Important" is an adjective, and you know what we do with those. Re-run step 4 and hold the structure: stakes tiers, verb-first, under a minute each.

## Going deeper (optional)

Open Sprint HQ's instructions and add one line: "When you give me facts I might act on, end with the 2 claims most worth checking, and where I'd check them." Your workspace now asks "show me the check" before you remember to. Skippable — the checklist in your folder is what counts.

---

You're done for today. Tomorrow: the short list of things that never go into a chat window — and the one-page policy that ends the hesitating.

Share it: "Day 5 of the AI Operator Sprint: had Claude brief me on a topic I know cold, then graded every claim. Wrong answers read exactly like right ones — which is why I now have a 5-point trust checklist."
