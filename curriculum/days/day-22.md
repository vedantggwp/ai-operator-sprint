---
day: 22
title: "Demo spec"
week: "Week 4: Build, Ship, Signal"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


Week 4 is different. The first three weeks were about building your operating system: learning tools, building habits, accumulating working pieces. Week 4 is about the one thing you demo on Day 30. Everything from today builds toward that conversation with that person.


The Demo Spec is the document that decides what you're building. Not a vague goal ("something cool with AI") and not an overambitious plan ("a full product"). A specific, scoped, completable thing, tested against one real audience of one, with a definition of done that you can verify in four days.


Writing the spec before you build is the hardest discipline in creative work. It feels like delay. It isn't. Time spent speccing is time saved not rebuilding. The two biggest reasons a Day 30 demo falls flat are: too complex to finish in time, and too abstract to make the person watching care. The spec addresses both.


Today you'll spec the demo with Claude as your thinking partner. Claude knows your stack from the CONTEXT file, your delegation list, your automations, and what you've been building all month. Use it. The best spec comes from honest conversation about what's realistic, what matters to your person, and what you can actually finish in 4 days.


## Build


1. **Re-read your COMMITMENT file (1 min).** Open the file from Day 0. Read the demo you named and the person you named. Have you changed your mind about either in 22 days? If so, now is the last good time to decide. The demo can still change. The person should stay.


2. **Run the spec interview (5 min).** New chat in Sprint HQ:


   ```
   Help me spec my Day 30 demo.


   My original commitment: [paste your COMMITMENT]
   What I've built so far: [paste the key lines from your AI-OS-MAP: automations, OS modules, anything you'd show someone]
   My person: [describe them in 2 sentences: role, what impresses them, what they're sceptical of]
   Days remaining: 8 (today is Day 22, demo is Day 30)


   Interview me briefly, 3 questions one at a time, about:
   1. What I'd most want this person to come away believing
   2. What the most realistic version of this looks like in 4 build days
   3. What would need to be true for me to be proud of this demo even if the technology part goes wrong


   After the interview, write a Demo Spec in this format:
   - Demo title (5 words or fewer)
   - The thing I'm showing (2 sentences: what it is, what it does)
   - Why it matters to my person (1 sentence, in their language)
   - What success looks like (3 bullet points, each checkable by Day 30)
   - What I'm not building (the scope cut that keeps this achievable)
   - Day 23-26 plan (4 lines, one per build day)


   Be honest about feasibility. If what I want is too complex for 4 days, say so and suggest a narrower version.
   ```


3. **Edit the spec (2 min).** Read it once. Change anything that doesn't match what you'd actually be proud of. Change the language in "why it matters" to something your person would actually say. Cut anything in the Day 23-26 plan that you know won't happen. The spec is your commitment to yourself, not to Claude.


4. **Save it (1 min).** Save as `DEMO-SPEC` in `AI-OS`. Add it to Sprint HQ's knowledge. Add the demo title to your `SPRINT-TRACKER`.


5. **Tell your person (1 min).** Send a message (email, text, whatever you use) to the person named in your commitment. One sentence: "I'm doing something I want to show you on [Day 30 date]. Can I have 15 minutes?" Not a reveal: a save-the-date. You don't have to explain yet.


## Ship


Today's artifact is your Demo Spec: scoped, feasible, with a Day 23-26 plan and a saved-the-date message sent.


- [ ] COMMITMENT re-read, person confirmed
- [ ] Spec interview completed, answers honest
- [ ] Demo Spec saved in `AI-OS` and Sprint HQ
- [ ] Day 23-26 plan written with one task per day
- [ ] Save-the-date message sent to your person


## If it goes wrong


- **The spec says my original demo is too ambitious for 4 days.** Good. That's what the spec interview is for. Take the narrower version Claude suggested. A demo you finish is better than an idea you abandoned. The person you're showing this to can't see your original ambition; they can only see what's in front of them.
- **I don't know what to demo because I've built too many different things.** Pick the one that took the least time to build and produced the most useful output. That's the thing that works. Everything else is infrastructure. Demo the thing that works.
- **The person I named on Day 0 isn't available on Day 30.** Find a different time, or find a different person. The "who" matters less than having a "who" at all. One real person with a date is the whole constraint.
- **I'm behind and not sure I can finish anything by Day 30.** Tell Claude: "I'm behind. What's the smallest version of [my demo] that I could demo in 4 build sessions of 30 minutes each?" The spec interview handles this; don't skip it out of embarrassment.


## Going deeper (optional)


Add a "risk register" section to the Demo Spec: 2 things that could go wrong in the next 8 days and one sentence on what you'd do if each one happened. Risks you've named are risks you've planned for. Skippable. The spec itself is the artifact.


---


You're done for today. Tomorrow: Build I, the first real session on your demo. You'll have something rough but running by the end of it.


Share it: "Day 22 of the AI Operator Sprint: Demo Spec written. What I'm building, who it's for, what done looks like. My person has a save-the-date. 8 days. #AIOperatorSprint"
