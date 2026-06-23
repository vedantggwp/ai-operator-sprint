---
day: 25
title: "Build III: polish"
week: "Week 4: Build, Ship, Signal"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


There's a version of polish that takes forever and produces very little. That's the version where you fix things that don't matter to the person watching, because you care about them for your own reasons (the wording of a label, a detail only you notice, a feature that wasn't in the spec).


There's a different version of polish that takes 10 minutes and makes the whole thing feel real. That's the version where you identify the 3 things a first-time viewer would notice in the first 30 seconds, and fix only those. Most things don't need to be perfect. The first impression does.


The 80/20 principle applies here with unusual force. In most outputs, 20% of the changes produce 80% of the perceived quality improvement. The challenge is knowing which 20% to do. For a Day 30 demo, the candidates are usually: a clear title or label at the top so the viewer immediately knows what they're looking at, one example input and output so they can see it working before you explain it, and the removal of anything that requires explaining.


The "requires explaining" test is the most useful. If you have to say "ignore this part" or "this is a bit rough but", that part needs to go or get fixed. Anything you have to explain away is a cost to the demo, not a feature.


Today you apply the 20% of polish that matters.


## Build


1. **Do a first-impression audit (2 min).** Open your v1 and look at it as if you've never seen it before. Ask yourself:
   - What's the first thing a viewer would look at?
   - Is it immediately clear what this does?
   - Is there anything you'd have to explain or apologise for?
   - Is there any jargon that would need translation?


   Write down your 3 answers. Those are your polish targets.


2. **Get Claude's first-impression read (2 min).** In Sprint HQ:


   ```
   Here's v1 of my [demo name]:
   [describe or paste the key visible parts of v1]


   My Day 30 person is [describe them in 1 sentence: role, what impresses them].


   Without knowing anything else: what would they see first? What would they be confused by in the first 30 seconds? What's the one thing that would make this feel more professional or finished to them specifically?
   ```


   This isn't a full redesign conversation. You want 3 specific observations about first impression.


3. **Apply the fixes (4 min).** Open Claude Code in `demo-build`. Make the specific changes:


   ```
   v1 feedback:
   - [first-impression issue 1]
   - [first-impression issue 2]
   - [first-impression issue 3]


   Apply these 3 changes to v1 and save the result as v2. Don't change anything else. Tell me exactly what changed.
   ```


   When it's done, look at v2 for 30 seconds before you read Claude's explanation of what changed. Does it feel more finished?


4. **Apply the "requires explaining" test (1 min).** Look at v2 and name everything you'd have to explain to your Day 30 person during the demo. For each one, decide: can I remove it, or can I add a label that makes it self-explanatory? If the answer is neither, make a note for Day 26: it goes in the README.


5. **Save and log (1 min).** Save as v2. Update `SPRINT-TRACKER`: "Day 25: v2 of [demo]. First-impression polish applied. [X] things that still need explaining."


## Ship


Today's artifact is v2: first-impression polish applied, the "requires explaining" audit done, saved in `demo-build`.


- [ ] First-impression audit: 3 items identified
- [ ] Claude's specific observations gathered and applied
- [ ] v2 saved with exactly those 3 changes
- [ ] "Requires explaining" test complete: list made
- [ ] Tracker updated


## If it goes wrong


- **I polished everything and now it took 2 hours.** The time limit is the point. If you spent more than 10 minutes today, you went beyond the 20%. For Day 26 onwards, set a timer. The constraint protects you from the polish trap.
- **v2 looks worse than v1.** Revert to v1 and apply only one change instead of three. Polish is sometimes subtractive: the cleanest version might be the one with the most removed, not the most added.
- **Everything seems to require explaining.** That usually means the demo is trying to do too much. Go back to your Demo Spec and cut one of the features from "what I'm building". Simpler demos explain themselves better.
- **The first-impression audit found no problems.** Either the work on Days 23-24 was very clean (possible), or you've looked at it too many times to see it fresh (also possible). Run the audit on Claude Code: "Here's v1. Pretend you're seeing it for the first time. What's confusing about it, even slightly?" Force the critical eye.


## Going deeper (optional)


Record a 30-second video of yourself doing the demo against v2. No audience: just you and a screen recording tool. Watch it back. Every time you say "and so here I" or "you might be wondering", that's something to fix or cut. The video reveals the friction in the experience faster than reading the code. Skippable. v2 is the artifact.


---


You're done for today. Tomorrow: the docs, so anyone who receives this thing knows what to do with it.


Share it: "Day 25 of the AI Operator Sprint: applied the 20% of polish that changes 80% of the first impression. v2 exists. 5 days left. #AIOperatorSprint"
