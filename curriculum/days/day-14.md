---
day: 14
title: "SHIP: Your AI OS Map"
week: "Week 2: Your AI Operating System"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


This is ship day 2. Nothing new to learn. Today you step back and describe the system you've built across 7 days, give it a name, and hand it a version number.


Week 2 was about building rooms. Sprint HQ is the hub. The CONTEXT file is the welcome mat. The Research OS, Writing OS, Admin OS, and file-task templates are the tools on the bench. The SPRINT-TRACKER is the log on the wall. Add the Prompt Library and the trust checklist from Week 1, and you have something that deserves to be called a system rather than a collection of files.


The AI OS Map is the diagram of that system. One page. What exists, where it lives, what each piece does, and how the pieces connect. Making this map forces you to articulate what you've built rather than assume you know it. That articulation is the difference between a system you can hand to someone and a system only you can navigate.


There's a second reason to ship this now. Week 3 starts tomorrow, and it changes the nature of the work. You move from building a system inside Claude to building things with Claude as the engine. The map you make today is the base you build from. Without it, week 3's automation work has no home to return to.


## Build


1. **Open Sprint HQ and gather (2 min).** In a new chat, type:


   ```
   Inventory check. Based on my knowledge files (CONTEXT, PROMPT-LIBRARY, WRITING-OS, SPRINT-TRACKER) and the instructions you're carrying, describe my current AI system in one paragraph: what exists, what it does, and what it's connected to.
   ```


   Read the answer. Correct anything it gets wrong: you're the architect, and you know the system better than its description.


2. **Draw the map (4 min).** In the same chat:


   ```
   Now create my AI OS Map as a structured markdown document.


   Title it "My AI OS v1.0 ([today's date])"


   Sections:
   1. The hub: Sprint HQ (what it carries: instructions, knowledge files, standing rules)
   2. The tools: list each OS module (Research, Writing, Admin, File tasks) with one-line description
   3. The library: Prompt Library v1 contents in one line each
   4. The log: SPRINT-TRACKER (current status)
   5. The connections: 3 sentences on how the pieces work together in a typical session
   6. What's next: 3 things this system doesn't do yet that Week 3 will add


   Output as a single markdown block.
   ```


3. **Edit it (2 min).** Read the map once. Fix any section that doesn't match your actual system. Delete anything that's aspirational rather than real. Add one sentence under each section that the model couldn't have written without you: the honest note about what's working and what isn't.


4. **Save and share (1 min).** Save it as `AI-OS-MAP` in your `AI-OS` folder. Add it to Sprint HQ's knowledge. Then decide: private or public. The map contains only your workflow, not your data, so it's safe to share. But private is a full ship.


5. **Read the "What's next" section aloud (30 sec).** Those 3 things are Monday's brief. Week 3 starts with the first of them.


## Ship


Today's artefact is your AI OS Map v1.0: a clear diagram of your complete system, honest about what works and what's missing.


- [ ] Every OS module listed, one-line description each
- [ ] "What's next" section names 3 real gaps
- [ ] Map saved in `AI-OS` and Sprint HQ
- [ ] Public or private decided on purpose


## If it goes wrong


- **The map looks thin because I missed days.** Map what exists, not what should exist. Six files and 4 modules is a real system. Write it accurately and note the gaps in the "What's next" section. That's where they belong.
- **Sprint HQ's summary was wrong.** Correct it in the map and then update the CONTEXT file to be more specific. The system is only as smart as what you put into it. Gaps in the summary usually mean gaps in your instructions or knowledge files.
- **I don't know how the pieces connect.** That's a useful discovery. Write: "These pieces are parallel, not connected: [list them]." Then add one line to each set of instructions saying what it's for and when to use it. Articulation precedes connection.
- **This feels like paperwork.** The map is the last structural thing before the work gets interesting. Week 3 builds real running automations on top of what you've drawn today. The map is the foundation; the next 7 days are the build.


## Going deeper (optional)


Draw a second version of the map: not what you have, but what you want in 16 days, when Day 30 arrives. Call it "AI OS v2.0 (target)". The gap between v1.0 and v2.0 is your Week 4 build brief. Skippable. The v1.0 map is the artefact.


---


You're done for today. That's Week 2 shipped. Tomorrow Week 3 opens with Claude Code: the desktop agent that can write files, run scripts, and do things that can't happen inside a chat window.


Share it: "Week 2 of the AI Operator Sprint, shipped: Research OS, Writing OS, Admin OS, file tasks, sprint tracker, and an AI OS Map. A system, not a collection of files. 16 days to demo. #AIOperatorSprint"
