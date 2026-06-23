---
day: 13
title: "The tracker"
week: "Week 2: Your AI Operating System"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


You're nearly two weeks in. There's a question worth asking honestly: do you know what you've built so far? Not vaguely, but specifically: which files exist, which templates are tested, which habits are running?


Most people can't answer that clearly, and it doesn't mean they haven't been working. It means they haven't tracked. A tracker is the cheapest form of feedback there is. It turns a loose sequence of days into a visible system with a clear state, and it does one other thing: it shows you the gap between what you intended and what actually happened, without flinching.


The tracker you'll build today is simple: a markdown file that lists each sprint day, what you built, and whether it's in your folder. You update it in about 90 seconds each evening (or the next morning). Claude helps you create it from your notes and spot what's missing. Over the next two weeks, it becomes the input for Day 21's retrospective and Day 28's story.


There's a principle here that goes beyond the sprint. The operators who get the most out of AI are the ones who keep records. Records let you build on what you built. They let you hand things off. They let you notice when a tool isn't working before you've spent three more weeks on it. The tracker is the start of that habit.


## Build


1. **Take stock of what you've built (2 min).** Open your `AI-OS` folder. List every file that exists. Then open Sprint HQ's knowledge list. The combination of what's in your folder and what's in the project is your current system. You're going to write that down.


2. **Generate the tracker (3 min).** In Sprint HQ:


   ```
   Help me create a Sprint Tracker for the AI Operator Sprint.


   I'm on Day 13. Here's what exists in my AI-OS folder and Sprint HQ so far:
   [list your files and project contents]


   Build me a markdown tracker with these columns:
   Day | Title | Artefact built | Location (AI-OS / Sprint HQ / both) | Status (done / partial / missing)


   Fill in Days 0-13 based on what I've told you. For anything not mentioned, mark it "missing" rather than guessing.


   Add a footer with: total days done, total artefacts in AI-OS, and one line noting the gap with the most impact (the missing artefact that matters most to fix).
   ```


   You'll see the picture clearly for the first time. The gap line at the bottom is the useful bit.


3. **Fill the real gaps (2 min).** Look at the "missing" rows. Are any of them things you actually did but didn't save? Go save them now. Are any of them intentional skips? Add a note: "Intentional: [reason]." The tracker should be honest, not flattering.


4. **Save it (1 min).** Copy the tracker into a note called `SPRINT-TRACKER` in `AI-OS`. Add it to Sprint HQ's knowledge.


5. **Set your evening habit (2 min).** At the bottom of `SPRINT-TRACKER`, add a row for Day 14 with status "pending". Then add a note at the very bottom: "Update: each evening, add the day's artefact and set status. Takes 90 seconds." The tracker is only useful if you keep it current.


## Ship


Today's artefact is your Sprint Tracker: a complete accounting of Days 0-13, gaps named, saved in `AI-OS` and uploaded to Sprint HQ.


- [ ] Every day from 0 to 13 listed, status set honestly
- [ ] Gap line identifies the missing artefact with most impact
- [ ] Real gaps either filled or marked as intentional
- [ ] `SPRINT-TRACKER` in `AI-OS` and Sprint HQ


## If it goes wrong


- **This is depressing. Half the days are missing.** That's the tracker doing its job. A list of honest gaps is more valuable than a beautiful log of things you half-remember doing. Pick one missing artefact today, the simplest one, and do a 5-minute catch-up. Then decide whether to do the others or let them go and focus forward.
- **I can't remember what I built some days.** Check your Claude chat history (inside Sprint HQ, each past chat shows what was discussed). Check your folder for anything you saved. If you still can't reconstruct it, mark it as "missing" and move on. You know what you're building from here.
- **The tracker is too long to update quickly.** Cut it to the columns you'll actually use. Day | Artefact | Status is enough. If you won't fill in Location every evening, remove it. A short tracker you maintain beats a thorough one you abandon.
- **Sprint HQ's knowledge is getting full.** Check whether you have older files that are now superseded: `PROMPTS` was replaced by `PROMPT-LIBRARY`, for example. Remove the old version and keep the new one. Knowledge that's out of date is noise.


## Going deeper (optional)


Add a second section to the tracker: "Habits running." For each daily habit the sprint introduced (10-minute daily build, updating CONTEXT weekly, running the trust checklist), mark it as running or not. Habits are as important as artefacts. Skippable. The day tracker is the artefact.


---


You're done for today. Tomorrow is Week 2's ship day: the AI OS Map, where the whole system gets a diagram and a name.


Share it: "Day 13 of the AI Operator Sprint: built a sprint tracker and found out exactly what I've built vs what I think I've built. The gap is useful. #AIOperatorSprint"
