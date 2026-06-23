---
day: 15
title: "Claude Code, first contact"
week: "Week 3: Agentic Work"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


Everything in Weeks 1 and 2 happened inside a chat window. You typed, Claude replied, you saved the result. That's one kind of useful. Week 3 is a different kind.


Claude Code is a command-line tool that runs on your computer. You give it a task in plain English, and it can write files, edit code, run scripts, read directories, and loop until the task is done. It works in your terminal, on your actual files, in the folder you point it at. It's not a chat; it's an agent. The difference is that it acts, not just answers.


This is where the "operator" in AI Operator Sprint starts to mean something specific. An operator doesn't just use the tool; they set up the tool to do work autonomously, check the result, and iterate. Claude Code is the first piece of real infrastructure you'll own.


Today is first contact: install it, point it at a safe folder, and give it one small task you can verify. Not the most impressive possible demo: the most reliable first run. The lessons from the rest of the week build on this session working. If it doesn't work today, you'll know before building a week on a broken foundation.


Non-coders: you don't need to write any code today. The task you'll run is plain English, and the output is readable text. If you get stuck on the terminal, the "if it goes wrong" section is for you.


## Build


1. **Check whether you have Node.js (1 min).** Open your terminal (Terminal on Mac, Command Prompt or PowerShell on Windows). Type:


   ```
   node --version
   ```


   If you see a version number, you have it. If you see "command not found", you'll need to install Node.js first from nodejs.org. Choose the LTS version.


   <!-- FACTCHECK: Verify the current Claude Code installation method and prerequisites. At time of writing, Claude Code requires Node.js and is installed via npm. Check the official Claude Code documentation for the current install command and any minimum Node version requirement -->


2. **Install Claude Code (2 min).** In your terminal:


   ```
   npm install -g @anthropic-ai/claude-code
   ```


   When it finishes, type `claude --version` to confirm it worked.


   <!-- FACTCHECK: Verify the exact npm package name and install command for Claude Code; this may have changed since knowledge cutoff -->


3. **Point it at a safe folder (1 min).** Create a new folder called `cc-test` in a place you can find it (your Desktop or Documents). In your terminal, navigate to it:


   ```
   cd ~/Desktop/cc-test
   ```


   Then start Claude Code:


   ```
   claude
   ```


   You'll be prompted to log in with your Anthropic account (the same one you use for Claude Pro). Follow the prompts.


   <!-- FACTCHECK: Verify the login/auth flow for Claude Code CLI at launch time. Check whether it uses Anthropic account OAuth or an API key, and whether Claude Pro is required or if there's a separate usage model -->


4. **Give it a first task (4 min).** Once you're inside the Claude Code session, type this in plain English:


   ```
   In this folder, create a file called README.md. In it, write a one-paragraph description of the AI Operator Sprint: a 30-day programme, one build a day, ending with a demo. Use plain English, no jargon. Then create a folder called "notes" and a folder called "builds". Tell me what you've created.
   ```


   Watch it work. It will write files, create folders, and report back. Open your `cc-test` folder in Finder or Explorer and confirm the files are there.


5. **Note what you noticed (2 min).** Back in Sprint HQ (a separate tab), jot down: how long it took, one thing that surprised you, and one thing you'd want it to do differently. You'll use these notes tomorrow.


## Ship


Today's artefact is a working Claude Code session: installed, authenticated, and one verified task completed with files on disk.


- [ ] Node.js present; Claude Code installed and version confirmed
- [ ] `cc-test` folder created; session authenticated
- [ ] README.md, notes/, and builds/ exist after the first task
- [ ] Notes saved in Sprint HQ about what you observed


## If it goes wrong


- **"command not found" after installing.** Close the terminal and open a new one. The install updates your PATH, which only refreshes on a new session. Then try `claude --version` again.
- **Node.js install fails or asks for admin rights.** Use the installer from nodejs.org rather than a package manager (like Homebrew or Winget) if you're not sure what you have. The website version handles permissions for most setups.
- **The login step asks for an API key, not an account.** Claude Code may use an API key depending on how it's configured at your time of running. Your Anthropic account settings page (under API keys) lets you generate one. Free-tier accounts may need to upgrade to use the API.
- **The terminal is unfamiliar.** That's fine. The only commands you need this week are `cd [folder]` (navigate to a folder), `claude` (start a session), and `exit` (leave a session). Three commands. You don't need to understand them; you need to type them correctly.
- **Claude Code installed fine but the task produced an error.** Check whether Claude Code has permission to write files in the folder. On Mac, you may need to grant Terminal access to your Desktop in System Preferences under Privacy. On Windows, try running from a folder in Documents rather than Desktop.


## Going deeper (optional)


Ask Claude Code to read your `SPRINT-TRACKER` file (copy it into the `cc-test` folder first) and add a row for Day 15 with today's artefact. One task, five seconds to type, and you've just used an agent to update a document. That's the shape of Week 3. Skippable. First contact is the artefact.


---


You're done for today. Tomorrow: your first real automation, running on a task from your Day 2 delegation list.


Share it: "Day 15 of the AI Operator Sprint: installed Claude Code, gave it a task in plain English, watched it write files on my computer. First contact. Week 3 is different. #AIOperatorSprint"
