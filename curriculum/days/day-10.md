---
day: 10
title: "Writing OS"
week: "Week 2: Your AI Operating System"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


The problem with AI writing isn't that it's bad. It's that it's average. It sounds like the middle of everything it's seen: confident, fluent, organised, and completely without the texture that makes you recognisable. That voice you've developed over years of emails and documents and reports is exactly what goes missing when you hand the first draft to the model.


The fix isn't asking harder. It's giving Claude something to copy. Your own writing, used as an example, outperforms any style prompt by a distance. "Write like Hemingway" produces a parody; "match the register and sentence length of this email I wrote last month" produces something you can actually use.


Today you build a Writing OS with three components. A style anchor: a sample of your real writing that shows Claude what you actually sound like. A set of writing modes: the different kinds of writing you do, each with its own length and tone parameters. And a voice check: a quick question you run on any draft that doesn't feel right, to diagnose and fix it rather than delete it.


The point of having a system is never having to start from scratch. Every writing task from now starts from your template with your anchor attached. The draft that comes back is in the right neighbourhood, not someone else's neighbourhood.


## Build


1. **Find your style anchor (2 min).** Dig up a piece of writing you've produced and liked. An email that landed well, a report section, a message that got a good response. Doesn't have to be long. 150-400 words is enough. Paste it into a note called `STYLE-ANCHOR` in `AI-OS`.


2. **Build your writing modes (3 min).** In Sprint HQ:


   ```
   I'm building a Writing OS for my work. Here's a sample of my writing to use as a style reference:


   [paste your STYLE-ANCHOR]


   Based on this, build me 3 writing-mode templates. Each needs:
   - A mode name and one-line description
   - Tone settings (formal/neutral/warm, and any specific rules for my voice)
   - Length target (specific word counts)
   - A [placeholder] for the subject or content
   - One constraint that protects my voice (based on the sample above)


   The 3 modes:
   1. SHORT-UPDATE: status update, progress note, or brief message to a colleague or manager
   2. EXPLAIN-IT: explaining a complex idea clearly to someone unfamiliar with my field
   3. PERSUADE: making a case for a decision, budget, or course of action


   Output all 3 as one markdown block, titled "Writing Modes v1".
   ```


3. **Test one mode (3 min).** Pick a real writing task from your Delegation List. Run it through one of the new modes:


   ```
   Writing mode: [mode name]


   [Fill in the template with your actual task details]
   ```


   Read the result against your STYLE-ANCHOR. Does it sound like you? If not, use the voice check:


   ```
   This draft doesn't sound like me. Looking at my STYLE-ANCHOR, identify the top 2 differences: sentence length, word choices, tone, or opening style. Then rewrite the draft fixing just those 2 things.
   ```


4. **Save and add to Sprint HQ (1 min).** Copy the Writing Modes into a note called `WRITING-OS` in `AI-OS` and add it to Sprint HQ's knowledge alongside `CONTEXT`. From now, every writing task in Sprint HQ has the modes available.


5. **Set a rule (1 min).** Add one line to your Sprint HQ standing instructions: "My writing modes are in WRITING-OS. When I ask you to write something, tell me which mode you're using before you start."


## Ship


Today's artifact is your Writing OS: a style anchor, 3 modes with constraints, and a working voice check, saved in `AI-OS` and loaded into Sprint HQ.


- [ ] STYLE-ANCHOR saved: a real sample of your writing you're proud of
- [ ] 3 writing modes, each with length targets and voice constraints
- [ ] 1 mode tested against a real task; voice check run if needed
- [ ] WRITING-OS in Sprint HQ knowledge


## If it goes wrong


- **I don't like anything I've written enough to use as an anchor.** Then pick the least-bad one. The anchor doesn't have to be great writing; it has to be distinctively yours. A competent email you wrote is better than no anchor at all.
- **The draft sounds exactly like the sample but the structure is wrong.** Voice and structure are separate problems. Fix voice with the anchor; fix structure with the format line in the template. You may need both in the same run.
- **All 3 modes come out sounding the same.** Your STYLE-ANCHOR may be too uniform. Add a second anchor from a different context (a casual message and a formal report, say) and ask Claude to identify what changes between them. The contrast is the data.
- **The voice check produces something even more generic.** You gave it too much to fix. Run the voice check on one sentence, not the whole draft: "This opening sentence doesn't sound like me. Rewrite it to match my STYLE-ANCHOR." Smaller target, better result.


## Going deeper (optional)


Create a fourth mode: STORY. A short personal anecdote, used as an example or hook. Include a rule: "starts with a specific moment, not a general statement." The best writing starts with a scene, not a point. Skippable. Three modes is the artifact.


---


You're done for today. Tomorrow: your files meet the agent, and Claude starts working with the actual documents that live on your computer.


Share it: "Day 10 of the AI Operator Sprint: built a Writing OS with a style anchor, 3 writing modes, and a voice check. First draft came back sounding like me. That's new. #AIOperatorSprint"
