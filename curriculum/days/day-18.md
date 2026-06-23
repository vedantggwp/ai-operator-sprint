---
day: 18
title: "MCP: connecting your world"
week: "Week 3: Agentic Work"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


So far, Claude Code has worked inside one folder on your computer. Today you give it a reach beyond that.


MCP stands for Model Context Protocol. It's the standard that lets Claude (and other AI tools that support it) connect to external data sources and services. With an MCP connector, Claude Code can read your files on a cloud drive, query a database, search the web, or call an API. Each connector is a small plug-in that you install once, and from then on it's available in every session.


Think of it like this. Yesterday's CLAUDE.md told Claude Code your preferences for one project. An MCP connector tells Claude Code where to go to find something. The web connector means: go fetch a page. The filesystem connector means: read this path, not just this folder. They extend what "reach in and act" means.


Today's task is to set up one MCP connector and run one task through it. Not the most powerful one: the most learnable one. The right first connector is something you'd genuinely use this week, so the value is immediate and the test is real.


Note: MCP is a fast-moving standard. Specific connector names, install commands, and available integrations may have changed since this lesson was written. Check the MCP directory linked in Step 2 for current options.


## Build


1. **Check what MCP connectors are available (2 min).** In Claude Code:


   ```
   What MCP connectors do you support out of the box, and how do I set up the simplest one?
   ```


   Read the answer. You want a connector for something you'd actually use: a web search, a cloud storage service, a note-taking app.


   <!-- FACTCHECK: Verify the current list of officially supported MCP connectors for Claude Code, and whether any are bundled vs require separate install. The MCP ecosystem was growing rapidly at time of writing. Check the Claude Code documentation for the current MCP setup process -->


2. **Choose your first connector (1 min).** Look at the options and pick one that matches something on your Delegation List. Good candidates for a first MCP:
   - A filesystem connector for a cloud folder (Dropbox, Google Drive, OneDrive)
   - A web search connector, for research tasks
   - A simple API connector for a service you already use


   If none of the available options matches your work, pick the simplest one available, just to prove the setup works.


3. **Install and configure it (4 min).** Follow Claude Code's instructions for your chosen connector. Most MCP connectors are installed via npm or configured in a settings file. The process usually involves:
   - Running an install command
   - Adding the connector to your MCP configuration
   - Authenticating (for services that require it)


   When it asks you to authenticate or give it a path, use a real one. You can only test that a connector works by pointing it at something real.


   <!-- FACTCHECK: Verify current MCP connector installation method for Claude Code. Check whether there is a central MCP configuration file (like ~/.claude/mcp.json or similar) and the exact format -->


4. **Run a real task through it (2 min).** Once the connector is active, give Claude Code a task that uses it:


   ```
   Using [your connector], [do something specific and verifiable]. Tell me what you found.
   ```


   For a web connector: "Find the current exchange rate for USD to GBP and tell me when the data is from."
   For a cloud storage connector: "List the 5 most recently modified files in [folder path] and tell me what type each one is."


   Check the answer against what you know is true. The point of this run is to confirm the connector is actually reaching outside the local folder.


5. **Note the connector in your CLAUDE.md (1 min).** Add a section to your CLAUDE.md: "Available connectors: [name]. Use when [situation]. Don't use when [not appropriate]." That second line is your safety rule.


## Ship


Today's artifact is one working MCP connector: installed, authenticated, and one real task completed through it.


- [ ] At least one MCP connector set up and authenticated
- [ ] One verifiable task run through the connector
- [ ] Result checked against ground truth (you know what the correct answer is)
- [ ] Connector noted in CLAUDE.md with a use/don't-use rule


## If it goes wrong


- **No MCP connectors are available yet for my version.** MCP support was added incrementally. If your version doesn't have it, check whether there's an update available for Claude Code. If there isn't, treat today as a reading day: find the MCP connector directory online and bookmark 2 you'd install when available. Day 19 is the build day and doesn't depend on MCP.
- **The connector installed but authentication keeps failing.** Most authentication failures are wrong credentials or missing permissions (particularly for cloud storage connectors that need a specific access scope). Check the error message carefully; it usually names exactly what's missing.
- **The connector output is too large or takes too long.** MCP connectors can pull back more data than you wanted. Add a constraint: "Limit results to 10 items" or "Only return files modified in the last 7 days." The connector fetches; you still control the scope with your instruction.
- **I'm not sure what's coming from the connector vs what Claude already knew.** Ask explicitly: "Which parts of that answer came from the connector, and which are from your own knowledge?" That's an important question to be able to ask, and a good habit to build.


## Going deeper (optional)


Look up the MCP connector for a service you use daily: your calendar, your task manager, or your note-taking app. Even if you don't install it today, find the documentation and note what tasks it would enable. Building a list of connectors to try in week 4 is a legitimate use of 5 minutes. Skippable. One working connector is the artifact.


---


You're done for today. Tomorrow is build day: a free session to make something that didn't exist yesterday.


Share it: "Day 18 of the AI Operator Sprint: set up my first MCP connector. Claude Code can now reach beyond the local folder. One real task completed through it. The reach is getting longer. #AIOperatorSprint"
