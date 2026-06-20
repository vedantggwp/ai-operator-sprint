---
day: 1
title: "Meet your stack (properly)"
week: 1
time: "10 min"
status: draft
---

## Lesson

Yesterday you committed. Today you walk around the workshop and learn where everything is.

Most people use AI on factory settings, without knowing what the tool remembers, what it's allowed to learn from them, or how much usage they actually have. An operator knows the operating conditions. That's the whole of today — 4 things to locate, 10 minutes total.

One: your privacy setting. Since late 2025, consumer Claude accounts choose whether chats are used to train future models. You'll make that choice deliberately, not by accident.

Two: memory. Claude remembers context across chats on every plan, including free — and you can read and edit everything it holds.

Three: the model picker. The free plan gives you Haiku 4.5 (fast) and Sonnet 4.6 — Sonnet is your default for this week.

Four: your limits. Usage resets on a rolling 5-hour window, with a weekly cap on top. Anthropic doesn't publish exact message counts; today's task fits comfortably inside one window.

Then you'll give Claude its first proper briefing, so the tool that remembers things starts by remembering what you're here to do. Projects — workspaces with their own standing instructions — get their own day on Day 4.

## Build

1. **Sign in on a computer (1 min).** Use the web app at [claude.ai](https://claude.ai) — settings are easier to find there than on the phone.

2. **Set privacy on purpose (2 min).** Go to [claude.ai/settings/data-privacy-controls](https://claude.ai/settings/data-privacy-controls) and find "Help improve Claude". Off: your new chats aren't used to train models. On: chats can be kept, de-identified, for up to 5 years and used for training. Neither is wrong — but pick it on purpose. If unsure, off.

3. **Open the memory page (2 min).** Settings, then Capabilities, then Memory — open "View and edit memory". It'll be near-empty today; the point is knowing it exists and that you control it. While you're there: on a new chat, spot the ghost icon (top right) — that's incognito, for anything you never want remembered.

4. **Pick your model, find Projects (1 min).** In a new chat, open the model picker. Free plan: Haiku 4.5 and Sonnet 4.6 — use Sonnet 4.6 this week. If you're on a paid plan you'll see more models; ignore them for now, Sonnet is plenty. Then glance at the sidebar and find Projects. Don't build one — that's Day 4.

5. **Run the calibration brief (3 min).** Here's the contrast.

   Weak:

   ```
   What can you do?
   ```

   Strong:

   ```
   You're going to be my main working tool for the next 30 days, so I'm briefing you properly.

   About me: I'm a [job or role] and my week mostly involves [2-3 real things you do]. I'm doing a 30-day programme — one small AI build a day, ending with a demo of [your Day 30 demo] to [your person].

   Please remember: my name is [name], I'm doing the AI Operator Sprint, and my Day 30 demo is [demo].

   Now, in under 150 words: the 3 ways you could save me the most time in a normal week. Specific to my role, not generic.
   ```

   The weak one gets you the brochure. The strong one wins because it supplies inputs — role, goal, audience — and a constraint (150 words, role-specific), so the answer is about *your* week. Same model; different briefing.

6. **Record your setup (1 min).** Save a short note called `WORKSPACE` into your `AI-OS` folder: your plan (free or Pro), your privacy choice, your default model, and the one suggestion from Claude's answer you might actually use.

## Ship

Today's artifact is a configured workspace — privacy chosen, memory checked, default model set — recorded in a `WORKSPACE` note in your `AI-OS` folder.

- [ ] "Help improve Claude" set deliberately
- [ ] Memory page opened, ghost icon located
- [ ] `WORKSPACE` note saved with plan, model, and 1 suggestion worth keeping

## If it goes wrong

- **Your model picker shows different names.** Model lineups change every few months; this programme never depends on one specific model. Pick the default and move on.
- **"View and edit memory" is empty or you can't find it.** Memory synthesises roughly every 24 hours, so your briefing may not show up until tomorrow — the "Please remember" line in chat registers immediately though. If the section is missing entirely, check Settings, then Capabilities, and make sure Memory is switched on.
- **You hit the free-tier message limit.** Limits reset on a rolling 5-hour window. Today needs about 2 messages — come back after the reset and finish.
- **Settings look different on your phone.** They are. Do today on the web at claude.ai; the mobile apps tuck things in different places.

## Going deeper (optional)

Ask the same calibration question to Haiku 4.5 and Sonnet 4.6 in 2 separate chats and read them side by side. Feel the speed-versus-depth difference once and model choice stops being a guess. Skippable — Sonnet as default gets you through the week fine.

---

You're done for today. Tomorrow: the shift the whole programme rests on — you stop chatting and write the list of 10 things you'll never do manually again.

Share it: "Day 1 of the AI Operator Sprint: privacy set on purpose, memory checked, and Claude now knows exactly what I'm building over the next 29 days."
