---
day: 16
title: "Your first automation"
week: "Week 3: Agentic Work"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


Yesterday you had Claude Code write a folder structure and a README. That was first contact: you needed to know the tool works before building on it. Today you build something that actually saves time.


An automation, in the simplest sense, is a task that used to need you in the middle and now doesn't. You set it up, you check the result, you correct it when it goes wrong. That's the full job description. You're not removing yourself from the work; you're moving from doing to overseeing.


The task you'll automate today comes from your Delegation List, specifically the asterisked item you marked on Day 2. If that item needs information you can't paste safely, pick the second or third item instead. If all of them involve confidential data, use the example below: a weekly report generator that takes bullet points in and turns a formatted summary out.


The key principle of first-automation day is to stay small. A task that should take 5 minutes is the right target. Not because you can't be more ambitious, but because a small working automation is infinitely more useful than a large incomplete one. You can add to something that works. You can't ship something that isn't finished.


## Build


1. **Pick your task (1 min).** Your asterisked item from Day 2, or the example: "Take bullet-point notes I paste in and turn them into a formatted weekly status update." Something you do repeatedly, with a clear input and a clear output.


2. **Create a project folder (1 min).** In your `cc-test` folder (or alongside it), create a folder called `auto-1`. Navigate to it in your terminal:


   ```
   cd ~/Desktop/auto-1
   ```


   Then start Claude Code:


   ```
   claude
   ```


3. **Describe the automation (4 min).** Tell Claude Code what you want to build:


   ```
   I want to build a simple automation. Here's the task:


   Input: [describe what you paste in, e.g. "bullet-point notes from a weekly check-in meeting"]
   Output: [describe what you want out, e.g. "a formatted status update email, under 150 words, with 3 sections: this week, next week, blockers"]
   How I'll use it: I'll run this each [frequency], paste in the input, and expect the output to copy-paste directly into [where it goes]


   Step 1: Create a file called "template.md" that contains the instructions for this transformation.
   Step 2: Create a file called "sample-input.txt" with 5 lines of dummy bullet points.
   Step 3: Process the sample input using the template and write the output to "sample-output.md".
   Step 4: Tell me what you built and what I'd change to adapt it to my real inputs.
   ```


   Watch the 4 steps happen. At step 4, read the explanation.


4. **Run it on a real input (3 min).** Edit `sample-input.txt` to contain real notes from this week (use the data rules from Day 6: describe, don't paste confidential data). Then tell Claude Code:


   ```
   Run the template against the updated sample-input.txt and write the new output to sample-output.md.
   ```


   Read the output. Is it something you'd actually use? If not, tell Claude Code what to change and run it again.


5. **Save the template to AI-OS (1 min).** Copy the `template.md` file into your `AI-OS` folder as `AUTO-1-TEMPLATE`. Add one line at the top: "Automation: [task name]. Created Day 16. Runs via Claude Code."


## Ship


Today's artifact is Automation 1: a working template that takes real inputs and produces usable outputs, with a sample run on record.


- [ ] Task chosen from Delegation List (or example task used)
- [ ] template.md and sample-output.md exist and contain real content
- [ ] Output is something you'd actually send or use
- [ ] AUTO-1-TEMPLATE saved in `AI-OS`


## If it goes wrong


- **Claude Code kept asking questions rather than building.** You gave it a vague task description. Add these lines to the start of your request: "Don't ask questions. Make reasonable assumptions and list what you assumed at the end." That's an instruction to a tool, not a conversation.
- **The output format is wrong.** Tell Claude Code the exact shape: "The output should have exactly 3 sections with these headings: [list them]. Each section is 2-4 bullet points. No other formatting." Exact shapes produce exact results.
- **The automation works but takes longer than doing it manually.** That's normal on first run. The template took 10 minutes to build; from now it takes 30 seconds to run. The payoff is the 20th use, not the first.
- **I keep needing to tweak it.** Save each version of the template with a number: `AUTO-1-TEMPLATE-v2.md`. See what changes between versions. After three runs, the template usually stabilises. You're debugging a workflow, which is operating.


## Going deeper (optional)


Add an input validation step: ask Claude Code to add a check at the start of the template. "Before processing, confirm the input has at least 3 bullet points. If not, return: 'Input too sparse. Please add more notes.'" Error messages in tools you build are a sign of maturity, not failure. Skippable. One working run is the artifact.


---


You're done for today. Tomorrow: CLAUDE.md, the file that teaches the agent your taste, so you stop correcting the same things every session.


Share it: "Day 16 of the AI Operator Sprint: built Automation 1. My asterisked task from Day 2, running in Claude Code. Input in, formatted output out. 30 seconds instead of 20 minutes. #AIOperatorSprint"
