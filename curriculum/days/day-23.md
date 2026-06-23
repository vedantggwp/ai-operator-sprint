---
day: 23
title: "Build I: v0"
week: "Week 4: Build, Ship, Signal"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


v0 exists to fail at the right things.


When you build a first version quickly, you find out which parts of the spec were wrong. Not the whole spec: usually one or two assumptions about how the input would look, or what the output needed to contain, or how long the thing actually takes. v0 is a learning device that happens to produce something usable.


The rule for today is: no polish. Rough is right. A rough version that shows the shape of the thing is worth more than a polished version of the wrong thing, because you can see the rough version, hand it to someone, and get feedback that matters. You can't get real feedback on something you're still building in your head.


Time yourself today. The 10-minute constraint is the point. You're demonstrating to yourself that building doesn't require a full afternoon, just a clear brief and an agent that can act on it. When you hit 10 minutes, stop. Whatever exists at that point is v0. Name it, save it, and note what you'd change if you had more time: those notes become tomorrow's brief.


This is the same principle as Day 0's commitment: the date pulls you forward. v0 is the equivalent of the date. Something that exists has weight. Something in your head doesn't.


## Build


1. **Read your Demo Spec (1 min).** Open `DEMO-SPEC` from yesterday. Look specifically at the "Day 23" line in the plan. That's your brief for today. If it's too vague, rewrite it in one sentence before you open Claude Code: "By the end of this session, [specific thing] will exist."


2. **Open Claude Code in a build folder (1 min).** Create a folder called `demo-build` (or use your `cc-test` folder):


   ```
   mkdir ~/Desktop/demo-build
   cd ~/Desktop/demo-build
   claude
   ```


3. **Give it the brief (5 min).** Paste the brief from your Demo Spec. Add:


   ```
   This is Build I of my Day 30 demo. I have 10 minutes. Build the roughest working version that shows the shape of this thing. Prioritise function over presentation. Tell me when something works, even if it's ugly.


   My demo is: [paste your demo title and 2-sentence description from the spec]


   Definition of done for today: [paste the first success criterion from your spec]
   ```


   Let it build. When it produces something, open it and look at it. Don't iterate yet: just look.


4. **Note what surprised you (2 min).** In a note inside the `demo-build` folder, write:
   - One thing that worked better than expected
   - One assumption the spec made that turned out to be wrong
   - One thing the v0 would need before you'd show it to your person


   These 3 notes are tomorrow's brief.


5. **Save v0 (1 min).** Name every file in the folder with `-v0` at the end. If there's a runnable output, open it and take a screenshot or copy the output. Add the artifact to your `SPRINT-TRACKER`: "Day 23: v0 of [demo title] exists."


## Ship


Today's artifact is v0: the roughest version of your demo that shows the shape of the thing, saved in `demo-build`, with 3 notes about what comes next.


- [ ] Demo Spec read and "Day 23" task identified
- [ ] Something built in `demo-build` in under 10 minutes
- [ ] v0 files named with `-v0` suffix
- [ ] 3 notes written: what worked, wrong assumption, what's needed before showing
- [ ] SPRINT-TRACKER updated


## If it goes wrong


- **The spec's Day 23 task is too big for 10 minutes.** Build the smallest identifiable part of it: the input handler, or the output format, or the core transformation. One working piece of the whole thing is a valid v0.
- **Claude Code keeps asking clarifying questions.** Add to your brief: "Don't ask questions today. Make reasonable assumptions and list what you assumed at the end of the session." The first build session is a rough sketch, not a design meeting.
- **v0 doesn't work at all.** Write down why. Then ask Claude Code: "The last build attempt failed because [reason]. Let's try a simpler version that does [smallest possible thing]." Build the smaller version. A working simple thing beats a broken complex thing every time.
- **I spent 10 minutes and have almost nothing.** That's information. Either the spec was too complex (adjust it), or the tool setup took too long (note that for the CLAUDE.md). Write in your notes what the 10 minutes produced, even if it's a folder structure and a plan. That's still a v0: you know where you're starting from.


## Going deeper (optional)


Run v0 through your own trust checklist from Day 5. Not for factual accuracy: for the experience of watching someone else (your Day 30 person) use it. Would they know what to do with this? What's the first thing they'd be confused by? Write the answer down and add it to tomorrow's notes. Skippable. v0 is the artifact.


---


You're done for today. Tomorrow: you show someone real and fix what confused them.


Share it: "Day 23 of the AI Operator Sprint: v0 of [demo] exists. Not pretty, but it shows the shape of the thing. 7 days left. #AIOperatorSprint"
