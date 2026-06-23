---
day: 24
title: "Build II: feedback"
week: "Week 4: Build, Ship, Signal"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


v0 is a question. Today you get an answer.


Most people skip the feedback step, not because they don't value it but because showing an unfinished thing feels exposing. The logic runs: "I'll show it when it's better." But "when it's better" never arrives, because you don't know what better looks like until someone who isn't you has seen it.


The person you show it to today is not your Day 30 person. It's someone safe: a friend, a family member, a colleague who owes you a favour. You need one thing from them: watch them try to use it, or read it, or interact with it, while you stay quiet. Don't explain. Don't prompt. Don't defend. Just watch what confuses them.


What confuses a first-time viewer is almost always different from what you expected to confuse them. It's usually the thing so obvious to you that you never wrote it down. The missing label, the unstated assumption, the jargon that seems normal from inside your work. That confusion is the gold.


Today is quick: show the v0, collect one piece of real confusion, fix it.


## Build


1. **Pick your feedback person (1 min).** Someone available today. It doesn't have to be a long session: 5 minutes is enough. Text or call now if you haven't already. "I built something rough and want to watch you look at it for 2 minutes. Can you?" Most people say yes to that.


2. **Show v0 without explaining it (3 min).** When you sit down with them (in person, screen share, or send a link): hand over the thing and say "Tell me what you think this does." Then be quiet. Note:
   - What they say it does (is it what you intended?)
   - The first thing they try to do
   - The first thing that confuses them


   You want the confusion, not the reassurance. "This is great" is not feedback. "I wasn't sure whether to click here or there" is feedback.


3. **Identify the biggest fix (2 min).** Back in Sprint HQ:


   ```
   I just showed v0 of my [demo name] to someone. Here's what confused them: [paste your 3 notes from watching].


   Given my Demo Spec (in project knowledge), what's the single change that would most improve the experience for a first-time user? Not a redesign: one specific fix to [what confused them].
   ```


   You're looking for a specific change, not a list of improvements. Pick the one fix that matters most.


4. **Make the fix (3 min).** Open Claude Code in your `demo-build` folder:


   ```
   I got feedback on v0. The person was confused by: [paste the confusion].
   Make one change to fix this. Save the result as [filename]-v1.


   The fix should: [paste Claude's recommendation from step 3]
   Don't change anything else.
   ```


   When it's done, look at v1. Does it fix the confusion? If yes, you're done. If the fix created a different problem, note it for Day 25.


5. **Update the tracker (1 min).** Add to `SPRINT-TRACKER`: "Day 24: v1 of [demo], fixed [the confusion]."


## Ship


Today's artifact is v1: v0 with one real piece of feedback applied, saved in `demo-build`.


- [ ] v0 shown to a real person (not your Day 30 person)
- [ ] First confusion identified and written down
- [ ] Single biggest fix agreed with Claude
- [ ] v1 saved with fix applied
- [ ] Tracker updated


## If it goes wrong


- **I can't find anyone to show it to today.** Then show it to Claude Code: "Here is v0 [paste or describe it]. Pretend you're a smart person who has never seen this before. What's the first thing that would confuse you?" Claude's feedback is less accurate than a real human's, but it's better than no feedback. Note in the tracker that the test was synthetic.
- **The feedback was just "I like it."** Ask a more specific question: "What would you do next if I handed this to you to use?" Or: "What would you need to know before you trusted this?" Specific prompts get specific answers.
- **The feedback revealed a fundamental problem with the concept.** That's the most valuable thing you could have discovered today. Go back to the Demo Spec and adjust. You have 6 days. A scoped-down version that works is better than an ambitious version that doesn't.
- **Fixing the confusion broke something else.** That's normal in any build. Note what broke, add it to tomorrow's notes, and leave v1 as-is. Day 25 is polishing day; it absorbs exactly this kind of follow-on.


## Going deeper (optional)


After the fix, show v1 to the same person for 60 seconds: "I made the change. Does this work better?" You don't need a second full session: just confirmation that the fix hit the right thing. Skippable. v1 with the fix is the artifact.


---


You're done for today. Tomorrow: the 20% of polish that makes the whole thing feel real.


Share it: "Day 24 of the AI Operator Sprint: showed v0 to a real person, watched what confused them, fixed it. v1 exists. 6 days left. #AIOperatorSprint"
