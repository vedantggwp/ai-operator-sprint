---
day: 3
title: "Prompts that survive contact"
week: 1
time: "10 min"
status: draft
---

## Lesson

A prompt is a brief, and briefs have structure.

Ask a colleague for "an email about the deadline thing" and they fill the gaps themselves — they know the project, the reader, what happened last week. Claude can't. Every detail you leave out, it invents, and it invents averages: the middle-of-the-road email no actual human would send.

The fix isn't magic words. It's the 4 parts every decent brief carries: **context** (the facts only you know), **constraints** (what good looks like — numbers beat adjectives, "under 120 words" works where "keep it short" doesn't), **format** (the shape of the answer), and, where it helps, an **example** of the kind of thing you mean.

You'll feel this today rather than read about it: the same task run twice, lazy prompt then structured brief, side by side. The difference is not the model getting smarter. It's you briefing better — and because you write and test the brief yourself, the structure sticks in a way copying someone else's prompt never does.

Then you bank it: 5 reusable templates saved to your folder. They're the first entries in the Prompt Library you'll ship on Day 7, and the working parts of the operating system you build in week 2.

## Build

1. **Pick a real writing task (30 sec).** Take one from your Delegation List — a message, an update, a request. (No good fit? Use the deadline-extension example below as-is.)

2. **Run the weak version (1 min).**

   ```
   Write an email asking for an extension on the project deadline.
   ```

   Read it. Count what Claude had to invent: the recipient, the reason, the tone, the stakes.

3. **Run the strong version with your real details (3 min).**

   ```
   Write an email asking for an extension on a project deadline.

   Context: the project is [project], the current deadline is [date], I need until [new date] because [honest reason]. The reader is [name/role], who values directness and hates waffle.

   Constraints: under 120 words. Apologise at most once. Offer one concrete thing I'll deliver early as good faith. Plain English, no corporate filler.

   Format: subject line, then the email. Give me 2 versions: one warmer, one more formal.
   ```

   Same task, same model. The strong one wins because it supplies the context, constraints and format the weak one forced Claude to invent — output quality follows briefing quality.

4. **Build your library (3 min).** In the same chat:

   ```
   That worked. Now turn it into a prompt library for me.

   Make 5 reusable prompt templates. Each needs: a one-line role, the task, [placeholders] in square brackets for the parts that change each time, 3 constraints, and the output format.

   1. The brief we just perfected, generalised for any careful or difficult message
   2. and 3. These two tasks from my Delegation List: [paste 2 tasks]
   4. Summarising a long document: I paste text, you return the 5 points that matter to a [my role] in under 150 words
   5. Rough notes into a plan: I paste messy notes, you return a structured plan with owners and next steps

   Output all 5 in one markdown block titled "My Prompts v1" so I can save it as a single file.
   ```

5. **Save it (2 min).** Copy the block into a note called `PROMPTS` in your `AI-OS` folder. Skim each template once — if a placeholder or constraint doesn't sound like you, change it. It's your library, not Claude's.

## Ship

Today's artifact is My Prompts v1 — 5 reusable templates, 1 of them already proven against its lazy twin — saved in `AI-OS`.

- [ ] Weak versus strong run on a real task, difference seen
- [ ] 5 templates, each with [placeholders] and 3 constraints
- [ ] `PROMPTS` saved in `AI-OS`

## If it goes wrong

- **The strong output is still off.** Check your constraints — if they're adjectives ("professional", "engaging"), swap them for numbers and bans ("under 120 words", "no corporate filler"). Adjectives are vibes; constraints are checkable.
- **A prompt works once, then fails on reuse.** You hard-coded the specifics. Anything that changes per use belongs in [square brackets]; that's the difference between a prompt and a template.
- **The templates don't sound like you.** Add one line of taste to each: "never open with 'I hope this finds you well'", "sign off with 'Cheers'". Your voice lives in the constraints.
- **Output comes back the wrong shape or length.** You skipped the format line. It's the difference between an answer and a deliverable — put it back.

## Going deeper (optional)

Take your best template and paste in a real example of something you wrote and liked, with the instruction "match this style". Run it with and without the example, keep the winner. Examples are the strongest tool in the kit — and entirely skippable today.

---

You're done for today. Tomorrow: Projects — a workspace with standing instructions, so Claude stops needing the same briefing twice.

Share it: "Day 3 of the AI Operator Sprint: same task, lazy prompt versus structured brief — the brief won by a distance. 5 reusable templates saved."
