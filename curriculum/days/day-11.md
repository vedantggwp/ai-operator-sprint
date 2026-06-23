---
day: 11
title: "Claude Cowork: your files meet your agent"
week: "Week 2: Your AI Operating System"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


So far, Sprint HQ has worked with text you typed or pasted. But most of your working life is in files: documents, spreadsheets, PDFs, notes apps. Today you bring those in.


Claude on the web can read documents you upload: PDFs, Word files, plain text, and more. The workflow is simpler than it sounds. You upload the file, give a specific instruction about what you want from it, and get a result that would have taken you 20 minutes to produce manually. Not transcription, not search: actual work, applied to your actual document.


The skill here isn't uploading a file. It's knowing what to ask. Uploading and asking "What do you think?" is the weak version. Uploading and asking "Pull out every action item that isn't owned by someone, one line each, in order of urgency" is the strong version. The file is the input; the instruction is the brief.


Today you run this once on a real document from your `AI-OS` folder or your work. Then you build a file-task template and add it to your Writing OS. The idea is that by the end of the week, the most common things you do with documents have a one-step brief ready to run.


## Build


1. **Pick a document to work with (1 min).** Something real, already in your `AI-OS` folder or on your desktop. Meeting notes, a report you need to summarise, a job description you're reviewing, a contract you need to scan for key clauses. If nothing comes to mind, use a chapter of any public PDF you've downloaded before.


2. **Upload and run the weak version (1 min).** In a new chat in Sprint HQ, upload the file and type:


   ```
   What can you tell me about this document?
   ```


   You'll get a summary. Not useless, but not the 20-minute shortcut you're here for.


3. **Run the strong version (4 min).** In the same chat:


   ```
   Ignore the previous summary. Here's the actual task.


   Document type: [meeting notes / report / contract / other]
   What I need from it: [a specific output: action items / key decisions / open questions / summary for a specific audience / the 3 things I'd tell my manager]
   Output format: [bullet list / table / 1-paragraph summary / email draft]
   Length: [under 150 words / as a table / one sentence per item]
   ```


   Fill in the blanks honestly. Compare the output to what a 20-minute manual skim would have given you. The structured brief wins because it tells Claude what finished looks like.


   <!-- FACTCHECK: Verify which file types Claude.ai currently supports for upload (PDF, Word .docx, plain text, images); check whether Pro and free plans have different file upload allowances -->


4. **Build your file-task template (3 min).** In Sprint HQ, in the same chat:


   ```
   Turn that into a reusable template for my file-task workflow.


   I need a template for each of these 3 situations:
   1. Meeting notes into action items (my most common case)
   2. Long document into a 1-page summary for a specific audience
   3. Contract or policy into a list of key obligations and deadlines


   Same format as my WRITING-OS modes: mode name, one-line description, [placeholders], 3 constraints, output format.
   ```


5. **Add to WRITING-OS (1 min).** Paste the 3 templates into your `WRITING-OS` note as a new section titled "File tasks". Now your document workflows have the same status as your writing modes: ready to run.


## Ship


Today's artifact is your file-task section in WRITING-OS: 3 templates, each tested against a real document, ready to run on any file.


- [ ] Real document uploaded and processed with a structured brief
- [ ] Strong version compared to the weak one; the difference seen
- [ ] 3 file-task templates added to WRITING-OS
- [ ] Sprint HQ updated


## If it goes wrong


- **The file upload fails or the file type isn't supported.** Copy and paste the text content instead; Claude reads plain text the same way. For a PDF you can't copy, try pasting the first page. The skill is the structured brief, not the upload itself.
- **The output is still too vague.** Your output format line is doing too much work. Specify the exact number of items: "exactly 5 action items", "table with 3 columns: task, owner, deadline." The more specific the format, the more usable the result.
- **The summary misses the most important thing.** It probably answered what the document said, not what matters to you. Add one line to the template: "The reader is [role] and they care most about [X]. Prioritise for them, not for the document's own structure."
- **The file is confidential.** Check your DATA-POLICY. If it's on your red or amber list, use a dummy document today (even a public PDF) and note the template for future use when you have a safe test case. The workflow is what you're building, not the content.


## Going deeper (optional)


Create a fourth file-task template: "Spot the gap." Upload a document and ask: "What question does this document raise that it doesn't answer? List the 3 biggest gaps." The best use of AI on documents isn't extraction; it's identifying what's missing. Skippable. Three templates is the artifact.


---


You're done for today. Tomorrow: Admin OS, where the meeting notes and the inbox stop being two separate problems.


Share it: "Day 11 of the AI Operator Sprint: uploaded a real document and got out what I'd have spent 20 minutes producing manually. Built 3 file-task templates. Documents are now part of my OS. #AIOperatorSprint"
