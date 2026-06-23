---
day: 9
title: "Research OS"
week: "Week 2: Your AI Operating System"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


When people ask Claude to "research" something, they usually get one of two things: a confident-sounding summary of what Claude already knows (which may be months or years out of date), or a list of plausible-looking sources that don't all exist. Neither is research. Both are fluency wearing research's clothes.


Real research has a structure: the question you're actually trying to answer, the sources that can answer it, and the difference between what's established and what's speculated. Claude is useful at each stage, but differently, and knowing which stage you're at is the whole skill.


Where Claude genuinely helps: breaking down a vague question into specific sub-questions, synthesising a document you've pasted in, spotting the gaps between what you know and what you'd need to know to decide. Where it doesn't help: fetching current information, verifying links, or telling you something is true when it's just plausible.


Your Research OS is a simple three-step template: brief the question, supply the source, then pull out what matters. Not magic, just discipline applied consistently. By the end of today you'll have run it once on a real question from your work, and that first successful run is the thing that sticks.


## Build


1. **Pick a real research question (1 min).** One from your work this week, or from your Delegation List. Something where you need to understand a topic, compare options, or get up to speed quickly. Avoid anything where you'd need yesterday's news; Week 3 covers real-time tool use.


2. **Run the bad version first (1 min).**


   ```
   Research [your topic] for me.
   ```


   Read it. Notice: it's thorough, confident, and completely unmoored from any source you can check. This is the problem you're about to solve.


3. **Run the structured brief (5 min).** In Sprint HQ:


   ```
   Research brief: [your topic]


   My actual question: [the specific thing I'm trying to decide or understand]
   Context: [1-2 sentences about why this matters for my work]
   What I already know: [1-2 sentences; avoids covering ground you've already covered]
   What I'd need to know to feel confident: [the gap]


   Your job:
   1. Restate my actual question more precisely. If it's too broad to answer well, say so and suggest a narrower version.
   2. Tell me what type of source would answer each part (published paper, industry report, official data, practitioner account).
   3. Give me the 5 most important things to understand about this topic, based on what you know. For each one, rate your confidence (high/medium/low) and tell me where I'd verify it.
   4. Identify the 2 claims I should check before I rely on this: the ones where being wrong would matter most.
   ```


   This is the Research OS: you supply the question, the context, and the gap; Claude supplies the structure, the claims, and the check-list. Notice the confidence ratings in step 3. Those are your Day 5 checklist in action.


4. **Paste one source and extract from it (2 min).** Find one article, report or page that looks relevant and paste it (or a long excerpt) into the same chat:


   ```
   Here's a source I found: [paste text]


   Does this change or confirm any of the 5 points above? What's the most useful thing in it that isn't already in your summary? Flag any contradiction with what you said earlier.
   ```


   The combination of Claude's synthesis and one real source you've checked is more reliable than either alone.


5. **Save the brief (1 min).** Copy the final output into a note called `RESEARCH-[topic]-v1` in `AI-OS`. File the date and the source you used.


## Ship


Today's artifact is one completed research brief: a structured question, 5 claims with confidence ratings, 2 flagged for verification, and one source integrated.


- [ ] Structured brief run on a real question from your work
- [ ] Confidence ratings given for each claim
- [ ] At least 1 real source pasted and checked against Claude's summary
- [ ] Brief saved in `AI-OS`


## If it goes wrong


- **Claude just gives me the same confident summary with or without the template.** That's the default setting. The template's job is to force it to show its working, not improve the underlying knowledge. The confidence ratings are the signal: "low" and "medium" are your check-list.
- **I can't find a source to paste.** Skip step 4 today and note it in the brief: "No source checked yet." The brief is still useful; step 4 is the upgrade. Run it next time you pick up the topic.
- **The question is too broad.** Good: step 1 of the template catches that. Ask Claude to narrow it for you: "Turn this into 3 more specific questions I could actually answer in a week." Pick the most useful one and run the brief on that.
- **The 5 claims contradict each other.** Sometimes they do, because the topic is genuinely contested. That's valuable information. Ask: "Which of these is the most contested? What do the two main positions say?" Now you have a real picture of the landscape.


## Going deeper (optional)


Add a sixth step to your Research OS: after saving the brief, open one of the "high confidence" claims and ask Claude where you'd verify it. Even the claims it's confident about need a home. Skippable today. The 5-step version is the artifact.


---


You're done for today. Tomorrow: the Writing OS, so your drafts come out in your voice and not the AI's.


Share it: "Day 9 of the AI Operator Sprint: ran my first proper Research OS brief. The structured question, confidence ratings on every claim, one real source checked against the output. Better than googling and copying. #AIOperatorSprint"
