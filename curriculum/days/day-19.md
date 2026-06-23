---
day: 19
title: "Build day"
week: "Week 3: Agentic Work"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


Every programme needs a build day. A day where the brief is simply: make something that didn't exist yesterday.


The first 18 days have been structured. You followed steps. You ran specific prompts. You built specific artifacts. That structure was useful because it gave you the vocabulary and the tools. Today you use the vocabulary yourself.


Build days produce different things for different people. Someone doing a research-heavy job might build a reading list tool. Someone managing a team might build a status report template that writes itself from meeting notes. Someone with a creative project might build a portfolio page. The sprint isn't about building the same thing; it's about the practice of building.


One rule: the thing you build today should be something a person other than you could use or at least understand. That constraint matters because it forces you to finish rather than tinker. A tool someone else can understand has been simplified enough to work. A tool only you can navigate is half a draft.


You have 10 minutes. That's enough to build a first version of almost anything, in the same way you've been building all month. Scope accordingly: the smallest version of the useful thing, not the complete version.


## Build


1. **Choose your build (2 min).** Look at your Delegation List and your Day 2 asterisked task. Look at what you've built this week and what's missing. Look at what Day 30 needs and what you could test now. Pick the one thing you'd be most pleased to have working by the end of today.


   If nothing comes immediately, here are three prompts to break the block:


   ```
   I have 10 minutes and Claude Code open. I want to build one small useful thing. My work involves [your role]. What's the smallest tool that would actually save me time this week? Give me 3 options in 2 sentences each.
   ```


2. **Write the brief (2 min).** Before you start Claude Code, write the brief on paper or in a note:
   - What does it do?
   - What goes in?
   - What comes out?
   - What does "done" look like in 10 minutes?


   If you can't answer all 4 in under 2 minutes, the scope is too large. Narrow it.


3. **Build it (5 min).** Open Claude Code in a folder called `build-day-1`:


   ```
   mkdir ~/Desktop/build-day-1
   cd ~/Desktop/build-day-1
   claude
   ```


   Then give Claude Code your brief. Let it work. If it asks questions, answer them briefly. If it goes in a wrong direction, correct it with one sentence. Your job is to keep it on the brief, not to rewrite the brief.


4. **Ship it (1 min).** When the time is up, take whatever exists and mark it "v1". Even if it's not finished. A v1 exists. A perfect-but-incomplete thing doesn't. Name the output file something a stranger would understand: not `output.md` but `weekly-status-template-v1.md`.


   <!-- FACTCHECK: No specific factual claims requiring verification in this day -->


## Ship


Today's artifact is whatever you built: a v1 exists, it has a name a stranger could understand, and you can describe it in one sentence.


- [ ] Brief written before opening Claude Code (what in, what out, what's done)
- [ ] Something built in the `build-day-1` folder
- [ ] Output file named descriptively, marked v1
- [ ] 1 sentence written in your sprint tracker describing what you built


## If it goes wrong


- **I can't decide what to build.** Start with the example in Step 1 and pick whichever of the 3 options is closest to something you'd use this week. Indecision has a cure: pick the smallest option and start.
- **The build ran over 10 minutes.** Stop and take what you have. The point of the time constraint is to produce a v1, not a finished product. A rough v1 that took 10 minutes is the right artifact. A polished tool that took 2 hours breaks the sprint.
- **Claude Code got confused and built the wrong thing.** That's a briefing failure. What part of your brief was ambiguous? Find the sentence where it went off-track, rewrite it, and try once more in a fresh session. The correction is the learning.
- **What I built isn't useful.** That's useful information about the brief. Write one sentence: "I built [X] and it didn't work because [Y]." That sentence goes in your tracker and informs Day 22's demo spec. Building something that fails is not failure; building nothing is.


## Going deeper (optional)


Deploy it. Put the file somewhere other people can see it: a shared folder, a Notion page, a GitHub Gist. Even a read-only link. "Something that exists and is shared" is meaningfully more real than "something that exists on my computer." Skippable. The v1 on disk is the artifact.


---


You're done for today. Tomorrow: the other stack, where you look at what exists beyond Claude Code and make one deliberate choice about your long-term toolkit.


Share it: "Day 19 of the AI Operator Sprint: free build day. Brief written, something built. [What you made] v1 exists. #AIOperatorSprint"
