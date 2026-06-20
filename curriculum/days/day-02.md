---
day: 2
title: "The operator mindset"
week: 1
time: "10 min"
status: draft
---

## Lesson

There are 2 ways to use AI. Chatting: ask a question, get an answer, then do the work yourself with slightly better information. Delegating: hand over a task with a clear definition of done, check the result, keep the time. Same tool, different job description — and the gap between them is most of the value.

A delegation carries 4 things a chat doesn't: the outcome you want, the inputs the task needs, the constraints that define good (length, tone, format — in numbers where possible), and the check you'll run before trusting the result. You'll practise these for the rest of the month; checks get a whole day on Day 5.

Today you build the target list. Not "what can AI do" — what do *you* do, repeatedly, that you could hand over? The writing you produce on a schedule. The lookups you repeat. The summaries, the reformatting, the first drafts, the thing you've been avoiding since March.

The honest, boring inventory of your own week is worth more than any prompt trick, because every automation you build in weeks 2 to 4 comes off this list. Operators don't start with the tool. They start with the work.

## Build

1. **Open a new chat (30 sec).** Sonnet 4.6, as set up yesterday.

2. **Run the weak prompt and skim it (1 min).**

   ```
   What tasks can AI help me automate?
   ```

   Notice what comes back: a listicle about everyone's job and no one's week.

3. **Run the strong prompt (6 min).** Answer its questions honestly — short answers are fine.

   ```
   Act as my delegation auditor. Your job: find the 10 tasks I should hand to you instead of doing manually.

   Interview me first: ask me 5 short questions, one at a time, about my typical week — what I write repeatedly, what I look up, what I summarise, what I format, and what I keep putting off.

   Then produce my Delegation List as a table with 4 columns: the task, how often I do it, how painful it is (1-5), and the exact first instruction I'd give you to do it.

   Rules: every row must come from my answers, not generic suggestions. If I gave you fewer than 10 real tasks, list what I gave you and leave the rest blank rather than padding.
   ```

   The weak prompt asks Claude to guess at your life; the strong one makes it extract your actual week first, so every row is usable. One safety note while you answer: describe tasks ("summarise client meeting notes"), don't paste real client data — the full rules come on Day 6.

4. **Save the list (2 min).** Copy the table into a note called `DELEGATION-LIST` in your `AI-OS` folder.

5. **Mark your number one (30 sec).** Put an asterisk on the single task you'd most love to never do again. That's your first automation candidate for week 3.

## Ship

Today's artifact is your Delegation List — 10 real tasks from your real week (or an honest 6), each with the first instruction you'd give — saved in `AI-OS`.

- [ ] Every row comes from your week, not a listicle
- [ ] The first-instruction column is filled in
- [ ] 1 task marked as your automation number one

## If it goes wrong

- **The table still feels generic.** You answered in generalities — "admin", "emails". Re-answer one question with a specific example from the last 7 days and ask Claude to redo the table.
- **The interview drags past 10 minutes.** Cut it off: "2 more questions, then produce the table." Setting the limits is operator behaviour, not rudeness.
- **Everything on your list involves confidential work data.** The list itself is just descriptions, which is fine. The actual doing waits for Day 6's data rules — describe, don't paste.
- **You can't get past 6.** Then 6 it is. 6 honest rows beat 10 padded ones — that's exactly why the no-padding rule is in the prompt. The list grows all month.

## Going deeper (optional)

Add a fifth column: minutes per week each task costs you, then total it. That number is your baseline — Day 21 asks how many of those minutes you've won back. Skippable; the list is the artifact.

---

You're done for today. Tomorrow: why most prompts collapse on contact with a real task — and the 4-part structure that survives.

Share it: "Day 2 of the AI Operator Sprint: I now have a written list of 10 tasks I'm done doing manually. Top of the list: [task]."
