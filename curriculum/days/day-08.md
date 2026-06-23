---
day: 8
title: "Memory files"
week: "Week 2: Your AI Operating System"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


Claude's automatic memory is a summary it writes about you, roughly every 24 hours, and you can't control the exact words. That's fine for casual use. It's not enough for an operating system.


A memory file is your solution. It's a document you write and maintain, uploaded to Sprint HQ's knowledge, that tells Claude everything it needs to know about you before your first word in any chat. Not a wish-list of personality traits: a working brief. Who you are, what you're building, what you've already decided, what language you want back.


The key habit this builds is intentional context. Right now you're relying on whatever Claude absorbed from your briefing on Day 1 and the files you added on Day 4. That's a reasonable start. But your week changes, your project evolves, and a living document you update weekly beats a one-off briefing that gets stale.


The format that works best is plain sections: role and context at the top, current focus in the middle, standing preferences at the bottom. Short and specific beats long and vague. Four tight sentences about your job are worth more than a paragraph of adjectives.


Today you write the first version. The 1 in "v1" is there for a reason.


## Build


1. **Open Sprint HQ (1 min).** Start a new chat inside the project. Notice what it already knows: the standing instructions from Day 4, your delegation list and prompt library from last week. Today you add a layer that sits above all of those.


2. **Draft the context file (4 min).** In a new note (outside Sprint HQ, in your `AI-OS` folder), write these 4 sections:


   ```
   # My context (updated [today's date])


   ## Who I am
   [Name], [role]. I work in [sector/field]. My week mostly involves [2-3 honest sentences].


   ## What I'm building right now
   The AI Operator Sprint: 30 days of builds, ending with a demo of [your demo]
   to [your person] on [date]. I'm on Day 8.


   ## What I've already decided
   - Default model: Sonnet 4.6 (or whichever model I'm using this week)
   - Data rules: see DATA-POLICY in project knowledge
   - My best automation candidate: [your asterisked task from Day 2]
   - I prefer output under 200 words unless I ask for a deliverable


   ## Standing preferences
   Plain English. No opening flattery. Numbers over adjectives. UK spelling.
   If you're not sure of a fact, flag it rather than guess.
   ```


   This is the kind of thing memory should capture but often misses: your current project, your real constraints, the decisions you've already made.


3. **Upload it (2 min).** Add this file to Sprint HQ's knowledge as `CONTEXT`. If there's a file count limit, replace the older `DELEGATION-LIST` (the list already lives in your prompt library). Then in a new chat inside the project, type:


   ```
   What am I building this week, and what's my Day 30 demo?
   ```


   If the answer names your actual demo and person, the file is doing its job.


   <!-- FACTCHECK: Verify current file count limits for Claude.ai Projects on free vs Pro plans, and whether direct text-paste notes are supported as an alternative to file uploads -->


4. **Set a weekly update habit (1 min).** At the bottom of `CONTEXT`, add: "Next update: [one week from today]." That's the cadence. Each Sunday, update the "What I'm building right now" section and change the date at the top. The rest stays until it's wrong.


5. **Note it in WORKSPACE (2 min).** Add one line to your `WORKSPACE` note: "Week 2 starts. CONTEXT file live in Sprint HQ."


## Ship


Today's artifact is your `CONTEXT` file: 4 sections, current, uploaded to Sprint HQ, proven to return the right answer about your demo.


- [ ] 4 sections written in your own words
- [ ] File uploaded to Sprint HQ knowledge
- [ ] Proof question answered correctly inside the project
- [ ] "Next update" date set


## If it goes wrong


- **The project already gives the right answer from Day 4.** Good. Run a harder test: "What's my biggest automation candidate and why?" If it names your asterisked task with a reason, you're well set. The `CONTEXT` file makes that reliable week after week, not just on Day 4.
- **Uploading fails or the file size limit complains.** Paste the content directly into the project instructions as a second section, separated from your standing rules. It's short enough to fit.
- **You're not sure what to put in "What I've already decided".** Look at your files from last week. The asterisked task from DELEGATION-LIST, the privacy choice from Day 1, the data rules from Day 6. These are decisions you don't want to explain again in every chat.
- **The context file and the standing instructions contradict each other.** The live chat message usually wins; then instructions; then knowledge files. When they conflict, fix the instructions. The knowledge file is the reference; the instructions are the rules.


## Going deeper (optional)


Add a fifth section: "What isn't working." One or two honest sentences about a habit or workflow that hasn't clicked yet. When you update the file next week, that section either gets crossed off or gets more specific. Skippable. The 4-section version is the artifact.


---


You're done for today. Tomorrow: the research workflow, so Claude stops giving you the brochure when you ask it to find things out.


Share it: "Day 8 of the AI Operator Sprint: wrote a context file that tells Claude who I am, what I'm building, and what I've already decided. Every Sprint HQ chat now starts knowing all of it. Week 2 underway."
