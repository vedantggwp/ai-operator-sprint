---
day: 17
title: "CLAUDE.md: teaching it your taste"
week: "Week 3: Agentic Work"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


When you run Claude Code in a folder, it reads a file called `CLAUDE.md` if one exists. That file is your standing brief for every session in that project. It works the same way Sprint HQ's instructions work in the web app, with one difference: it travels with the code. Anyone who opens that folder gets the same instructions. You get consistency across sessions without re-typing your preferences.


What goes in CLAUDE.md is everything you've been writing from scratch at the start of each session. Your naming conventions: "use snake_case for all filenames". Your output rules: "always produce a summary of what you changed before you change anything". Your quality standards: "plain English, no jargon, nothing over 100 words per section". Your safety rules: "never delete a file without asking first, even if I told you to".


Today you write a CLAUDE.md for the `auto-1` folder you built yesterday. You're encoding what you learned from yesterday's session: what you had to correct, what worked well, what you'd want without asking for it. That experience is the raw material for the file.


The discipline here is the same as all the best briefs in this sprint: specific rules, not adjectives. "Be careful" does nothing. "Ask before overwriting any file" is a rule. The CLAUDE.md you write today will save you 5 minutes of correction on every future session in this project.


## Build


1. **Recall yesterday's corrections (2 min).** Think about your Day 16 session. What did you have to ask Claude Code to change? What format did it get wrong? What assumption did it make that you had to override? Write down 3-5 things. These are the inputs for your CLAUDE.md.


2. **Open Claude Code in your auto-1 folder (1 min).**


   ```
   cd ~/Desktop/auto-1
   claude
   ```


3. **Draft the CLAUDE.md (4 min).** Tell Claude Code:


   ```
   Create a CLAUDE.md file in this folder. It should contain standing instructions for every session in this project.


   Include:
   1. Project context: 2 sentences about what this automation does and who uses it
   2. Output rules: [list your 3-5 corrections from step 1]
   3. File rules: never delete files; always write new versions with -v2, -v3 suffix rather than overwriting
   4. Communication style: before making any change, state what you're about to do and why; after changes, list exactly what changed
   5. Quality check: before finishing any session, confirm: have all files been saved? Is the output file readable without context?


   Format it as a CLAUDE.md file, not a chat response.
   ```


   Claude Code will create the file. Open it and read it in your text editor.


4. **Edit it yourself (2 min).** Change at least one rule to be more specific than Claude Code made it. Replace any adjective ("clear", "helpful", "appropriate") with a constraint ("under 80 words per section", "numbered list, not prose", "always end with a summary of next steps"). This is your taste file. It should sound like your Day 3 brief, not a generic assistant.


5. **Test it (1 min).** Close the Claude Code session and start a new one in the same folder:


   ```
   exit
   claude
   ```


   Ask: "What project are we in and what are the standing rules?" The answer should come from your CLAUDE.md without you saying anything. If it doesn't mention the file, type: "Check the CLAUDE.md in this folder before we start."


## Ship


Today's artifact is a working CLAUDE.md: standing instructions for your automation project, verified to load automatically at session start.


- [ ] CLAUDE.md exists in auto-1 folder
- [ ] Contains project context, output rules, file rules, communication style, and quality check
- [ ] At least one rule is specific (has a number or a named constraint, not an adjective)
- [ ] New session picks up the file correctly


## If it goes wrong


- **Claude Code doesn't seem to be reading the CLAUDE.md.** The file needs to be in the root of the folder you started the session from. Check that you're in `auto-1` (type `pwd` in the terminal) and that the file is there (type `ls`). The filename is case-sensitive on most systems.
- **All the rules came from the template rather than my experience.** Good that you noticed. Go back and add 2 rules based on what actually happened in your Day 16 session. The template gives you the structure; the experience gives you the content.
- **The file is too long.** CLAUDE.md works best under 400 words. Long files slow the session start and can crowd out the actual task. Cut any rule you haven't needed yet. Add it back when you need it.
- **I don't have an auto-1 folder because Day 16 didn't work.** Write a generic CLAUDE.md for a new folder called `sprint-work`. Use the 5 sections from step 3 as written, filling in placeholder rules. This is still a useful artifact, even without yesterday's data.


## Going deeper (optional)


Add a sixth section: "Anti-patterns to avoid." List 2-3 things you've seen Claude Code do that you don't want it to do by default: "don't add comments to every line of code", "don't ask permission for minor formatting decisions", "don't summarise the whole project at the start of every session". The negative rules are often the most powerful. Skippable. Five sections is the artifact.


---


You're done for today. Tomorrow: MCP, the protocol that lets Claude Code connect to external services, so your automations can talk to the world.


Share it: "Day 17 of the AI Operator Sprint: wrote a CLAUDE.md that teaches the agent my taste before I say a word. Standing instructions that travel with the project. Sessions now start from my rules, not from scratch. #AIOperatorSprint"
