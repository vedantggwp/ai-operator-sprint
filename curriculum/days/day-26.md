---
day: 26
title: "Build IV: docs"
week: "Week 4: Build, Ship, Signal"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


Documentation has a bad reputation because most of it is written too late, by someone who has forgotten what it's like not to know the thing.


Good documentation is written at the moment of maximum empathy: right after you watched someone be confused by v0. You still remember what they asked. You know exactly what the "requires explaining" list contains from yesterday. Today you write the docs while that knowledge is fresh.


A README has one job: allow a stranger to understand the thing and start using it. Not the history of how it was built. Not a complete technical specification. The answers to the 4 questions a stranger would ask: what is this, what do I need to use it, how do I start, and what do I do when something goes wrong.


For most things built in this sprint, the README is one page. If it's longer than one page, it's trying to document things that should be fixed in the tool, not explained around. The "requires explaining" list from yesterday becomes the scope of the README. If something required explaining but wasn't fixed in v2, it goes in the README. If it can be fixed instead, fix it rather than documenting the workaround.


One more thing: the README is the thing your Day 30 person receives after the demo. A tool with no docs is a gift with no instructions. The README makes it a system.


## Build


1. **Review your "requires explaining" list (1 min).** Pull out the list you wrote yesterday. For each item: can you fix it in Claude Code in 2 minutes, or does it genuinely need explaining? Fix the fixable ones first.


2. **Write the README (5 min).** In Claude Code in `demo-build`:


   ```
   Write a README.md for this project. Use what's in this folder to understand what the project does.


   Structure:
   ## What this is
   [1 paragraph, plain English, no jargon. What it does, who it's for, what problem it solves.]


   ## What you need to use it
   [A short list: prerequisites, accounts, files. No more than 5 items.]


   ## How to start
   [Step-by-step, numbered, tested. Every step starts with a verb. If a step requires a decision, say what the options are.]


   ## When something goes wrong
   [The 3 most likely failure points, with a fix for each. Based on what I found during testing.]


   ## Who built this and why
   [2 sentences: who you are, why you built this, what it's part of.]


   Length: under 400 words. Plain English. Write it for someone who has never heard of the AI Operator Sprint.
   ```


3. **Edit it yourself (2 min).** Read the README once as a stranger. For each step in "How to start": could you follow it without knowing anything about how it was built? If not, add the missing piece. Change any jargon. Replace any passive voice ("The file should be placed") with an action ("Put the file in").


4. **Add the "what you built" sentence (1 min).** At the very bottom of the README, below everything else, add one line:


   ```
   Built during the AI Operator Sprint, Day 26. [Your name]. [Date].
   ```


   That line is a time-stamp and a proof of work. It belongs there.


5. **Save and update (1 min).** The README.md is now the final file in `demo-build`. Update `SPRINT-TRACKER`: "Day 26: README written, v2 documented, demo-build complete."


## Ship


Today's artifact is the README: one page, 4 sections, stranger-readable, saved in `demo-build` alongside v2.


- [ ] Fixable items from "requires explaining" list fixed in the code
- [ ] README written with 4 sections
- [ ] README read as a stranger; jargon removed; steps verified
- [ ] "Built during..." line added
- [ ] Tracker updated


## If it goes wrong


- **The README is longer than one page.** Cut it to the 4 sections. Anything that doesn't fit in those 4 sections is either: a bug that should be fixed, a feature that wasn't in the spec, or context the person doesn't need before they start. Separate each one and deal with them appropriately.
- **I can't write "How to start" because the steps are complicated.** Then the tool is still too complicated. Simplify one step, not the README. A README that accurately describes a complicated tool is honest; it's also a signal to go back and simplify the tool.
- **I don't want to put my name on something unfinished.** It's not unfinished: it's v2 with documentation. That's a complete sprint artifact. The name goes on it because you built it, not because it's perfect. "Built by [name]" doesn't mean "guaranteed to be flawless."
- **The README was generated entirely by Claude and doesn't sound like me.** Edit it. The README is the document your Day 30 person may keep. Make it sound like the person they're meeting on Day 30, not a template.


## Going deeper (optional)


Add a section to the README: "What's next." 2-3 sentences on what this would look like if you had another week. That section is honest about the current state and frames the demo as a beginning, not an end. Skippable. The 4-section README is the artifact.


---


You're done for today. Tomorrow: your proof page, the page that makes all of this legible to someone who wasn't there.


Share it: "Day 26 of the AI Operator Sprint: wrote the README. A stranger can now pick up what I built and use it. 4 days left. #AIOperatorSprint"
