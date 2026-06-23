---
day: 6
title: "Data hygiene"
week: "Week 1: Foundations & Taste"
time: "10 min"
status: draft
---

## Lesson

Everything this programme teaches gets better the more context you give Claude. That is exactly why you need a line. Today you draw it once, in writing, so you never have to hesitate mid-task again.

The honest picture first. Consumer AI chats are stored by the provider. On Claude, if you left training on, chats can be kept de-identified for up to 5 years. Deleting a chat purges it from their systems within about 30 days. The UK's cyber-security agency, the NCSC, has one standing rule for public AI tools: put nothing in that you couldn't tolerate becoming public.

One law is worth knowing by name. Your own data is your call. UK GDPR doesn't police what you journal about yourself. Other people's data is different. At work, your employer is legally responsible for it. Moving client or colleague data into a personal AI account without permission can be a criminal offence under section 170 of the Data Protection Act 2018. That is the regulator's most-prosecuted one. These are UK rules, but the shape is the same in most places.

None of this means paste nothing. It means decide the rules on a calm day, write them on one page, then operate at full speed inside them. Think traffic lights. Red never goes in, amber goes in with care, green flows freely.

## Build

1. **Run the weak version (1 min).**

   ```
   Is it safe to paste work documents into AI chats?
   ```

   You'll get a balanced little essay. "It depends", a few bullet points, and nothing you could act on tomorrow.

2. **Run the policy generator (3 min).** In Sprint HQ:

   ```
   Draft my personal AI data policy as one page.

   My situation: I'm [employed / self-employed / studying], I use Claude on a personal [free or Pro] account, and my work involves [one honest line].

   Structure it exactly as:

   1. RED, never goes in: other people's personal data; anything in the UK's special-category list (health, sex life or orientation, religion or beliefs, politics, race or ethnicity, union membership, genetic or biometric data) or criminal records, mine or anyone's; anything my employer owns (client data, internal documents, code); passwords, API keys, card or bank details; anything under NDA.
   2. AMBER, with care only: my own personal data; work tasks described rather than pasted; real examples with names and identifiers stripped.
   3. GREEN, free use: public information, my own ideas and drafts, dummy data.
   4. WORKPLACE RULE: follow my employer's AI policy if one exists; if none does, ask in writing before any work data touches this account.
   5. IF I SLIP: delete the chat (the provider purges it in about 30 days), change any password or key I exposed, and if work data was involved, tell the right person at work the same day.

   Plain English, under 250 words, no legal waffle. End with: "Review on [date 3 months from today]. Providers change their rules."
   ```

   Notice the division of labour. The red lines arrive as inputs, not questions. You don't ask the model what the rules are. The security agency and the regulator already wrote them. Claude's job is tailoring them to your week.

3. **Make amber yours (2 min).** Follow up in the same chat:

   ```
   Rewrite AMBER around the top 3 tasks on my DELEGATION-LIST. It's in your project knowledge. For each task, show the describe-don't-paste version of how I'd brief you.
   ```

   This is the rule you've used since Day 2. Say "summarise notes like these", never the notes themselves. Now it is written down per task. And that's Day 4's project paying rent: no pasting needed.

4. **Save it (1 min).** Copy the final policy into a note called `DATA-POLICY` in `AI-OS`.

5. **The 2-minute sweep (2 min).** Three checks. Open [claude.ai/settings/data-privacy-controls](https://claude.ai/settings/data-privacy-controls) and confirm Day 1's training choice still matches the policy you just wrote. Open the memory page from Day 1 and edit or delete anything that's now on your red list. Then file the caveat that matters. Incognito (the ghost icon) keeps a chat out of history, memory and training, but the provider still holds it for about 30 days. That is privacy from your own history, not invisibility.

## Ship

Today's artefact is your one-page data policy. Three colours, a workplace rule, an if-I-slip plan, saved in `AI-OS`.

- [ ] RED covers other people's data, employer material, credentials
- [ ] AMBER rewritten around your actual tasks, describe-don't-paste
- [ ] Settings and memory swept; review date set 3 months out

## If it goes wrong

- **"My whole job is confidential, so this tool is useless for me."** It isn't. You built an entire delegation list on Day 2 without pasting a single real document. Describe-don't-paste covers most knowledge work. The fuller unlock is a work account: business plans aren't trained on by default, which is precisely why employers buy them. Ask whether yours has one.
- **You realise you already pasted something red, before today.** Don't spiral. Run step 5 of your own policy now: delete the chat, rotate anything exposed, and if it was work data, flag it at work today rather than hoping. The second-best time for a policy is the day after you needed it.
- **Your employer has no AI policy.** Normal. Most don't yet. The written question is your protection. One email turns a grey area green: "I'm planning to use AI for [task], described not pasted. Any objection?" Acas's standing advice to UK employees is exactly that: check before you use it.
- **The policy comes back long and lawyerly.** Hold the line you set: "Cut to under 250 words, plain English. A rule that doesn't fit on one page doesn't get followed."

## Going deeper (optional)

If you use any other AI tool, give it the same 2-minute sweep. On ChatGPT, open Settings, then Data Controls. The training toggle there ("Improve the model for everyone") ships switched on for consumer plans, so set it deliberately, the way you set Claude's on Day 1. One policy covers every tool. The settings lock one by one. Skip it if Claude is your only tool.

---

You're done for today. Tomorrow is Week 1's ship day. The whole week gets bundled into Prompt Library v1, and you see what 8 days of 10 minutes actually made.

Share it: "Day 6 of the AI Operator Sprint: my AI data policy is 1 page and 3 colours. What never goes in, what goes in with care, what to do if I slip. Decided once, on a calm day. Done hesitating."
