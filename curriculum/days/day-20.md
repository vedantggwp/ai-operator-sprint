---
day: 20
title: "The other stack"
week: "Week 3: Agentic Work"
time: "10 min"
status: draft
needs_factcheck: true
---


## Lesson


You've spent most of this sprint with Claude. That's by design: becoming fluent with one tool before adding more is the operator's approach, not the collector's. But the landscape has more than one tool, and a good operator knows when to use what.


The honest picture: different models and products have different strengths, and those strengths shift every few months as companies update them. Rather than telling you which tool is "best" right now (an answer that would be out of date by the time you read it), today you build a comparison you ran yourself, on a real task from your work.


The main alternatives to Claude are large language models from other providers: OpenAI's GPT models (accessible via ChatGPT and the API), Google's Gemini models, and a small number of open-weight models you can run locally. Each has a different character: different default tone, different performance on code vs prose vs reasoning, different context window, different pricing. The only way to know which matters for your work is to test on your work.


Today you'll run the same task you ran on Day 3 (weak prompt vs strong brief) on one other tool. The comparison is the artifact. Then you'll write a one-page "when to use what" card so you don't have to think about this again until you actively want to.


## Build


1. **Pick a comparison tool (1 min).** You need one other AI that lets you run a free test. Good options:


   - ChatGPT at chat.openai.com (free tier available)
   - Google Gemini at gemini.google.com (free tier available)
   - Perplexity at perplexity.ai (free tier available; also searches the web)


   You don't need to commit to anything. Pick one and open it.


   <!-- FACTCHECK: Verify free tier availability and current model names for ChatGPT, Google Gemini, and Perplexity at publication time. These change frequently. Consider verifying before publishing -->


2. **Run the same task (3 min).** Take the strong prompt from Day 3 (or any template from your Prompt Library). Run it on both Claude and your chosen comparison tool on the same task. If you don't have a ready task, use this one:


   ```
   Write a one-paragraph update for my manager explaining that the project timeline has moved by 2 weeks because of a dependency that came in late. The reader is direct and values conciseness. Under 80 words.
   ```


   Copy the outputs side by side in a note.


3. **Grade them (2 min).** For each output, note:
   - Did it follow the word limit?
   - Does it sound like something a real person would send?
   - Is the tone right?
   - Is there anything in one that the other missed?


   You don't need a score. You need a reaction: "I'd use this one because..." is enough.


4. **Write your when-to-use-what card (3 min).** In Sprint HQ:


   ```
   Based on this comparison [paste both outputs and your grades], help me write a one-page "when to use what" card for my main AI tools.


   Format:
   Tool | Strengths for my work | Weaknesses | When I'd use it over Claude


   Include Claude and [your comparison tool]. Be honest: if one clearly won the test, say so. If they're similar, say where they differ at the margin.


   Under 200 words total. This is a decision aid, not a review.
   ```


5. **Save it (1 min).** Save the card as `STACK-CARD` in `AI-OS`. You'll update it every time you add or drop a tool.


## Ship


Today's artifact is your STACK-CARD: a comparison based on a real task, written into a usable decision aid.


- [ ] Same task run on Claude and one other tool
- [ ] Outputs graded honestly, reaction written
- [ ] STACK-CARD saved in `AI-OS`
- [ ] Card covers when to use each tool, not just what they can do


## If it goes wrong


- **The outputs are nearly identical.** That's useful data. Note it in the card: "For [this type of task], these tools are interchangeable; choose by price or speed." Then run one more test on a different task type (code, creative, structured data) and see if the gap appears there instead.
- **I like the other tool better than Claude for this task.** Good. Write that in the card. The point of having a stack is using the right tool, not defending a choice you made on Day 1. Operators switch tools when it makes sense; they just know why they're switching.
- **Perplexity gave a completely different kind of answer because it searched the web.** That's by design. Perplexity blends model reasoning with live search results. For evergreen tasks (like the status update example), that's overhead. For research tasks where current information matters, it's a genuine advantage. Note the distinction in your card.
- **I couldn't get a free account on the comparison tool.** Run the test with Claude twice using different temperatures or styles ("rewrite this more formally", "rewrite this as a bullet list"). Different styles on the same model gives you something to compare even without a second tool.


## Going deeper (optional)


Run the research brief from Day 9 through Perplexity or a search-augmented model. Compare the source quality and confidence ratings to Claude's version. Research is where the different architecture (search vs knowledge) matters most. Skippable. The STACK-CARD is the artifact.


---


You're done for today. Tomorrow is Week 3's ship day: Automation 2, with a real time-saved number attached.


Share it: "Day 20 of the AI Operator Sprint: ran the same task through Claude and [other tool]. Built a when-to-use-what card. Now I know which to reach for. #AIOperatorSprint"
