# Fact-check queue — verify before publish

Days 08 to 30 carry `needs_factcheck: true`. The cloud build agent had no access to the private research corpus, so it taught the principle plainly and flagged every checkable specific (price, model name, settings path, menu label, limit) rather than asserting it. Content recovered from the 2026-06-21 Drive backups.

Work through these against the live product (mostly claude.ai and the Claude Code docs) before going live. On each confirmed day, remove the `<!-- FACTCHECK -->` comment and drop `needs_factcheck` from the frontmatter.

## Inline flags (the specific claims)

### Day 08 — Memory files
- [ ] Claude.ai Projects file-count limits on free vs Pro plans.
- [ ] Whether direct text-paste notes work as an alternative to file uploads.

### Day 11 — Claude Cowork: your files meet your agent
- [ ] Which file types Claude.ai supports for upload (PDF, .docx, plain text, images).
- [ ] Whether free and Pro plans differ in upload allowances.

### Day 15 — Claude Code, first contact
- [ ] Claude Code install method and prerequisites (Node version, npm command).
- [ ] Exact npm package name and install command.
- [ ] CLI login/auth flow: Anthropic OAuth vs API key; whether Claude Pro is required.

### Day 18 — MCP: connecting your world
- [ ] Current officially-supported MCP connectors for Claude Code; bundled vs separate install.
- [ ] MCP config file location and format (e.g. `~/.claude/mcp.json` or equivalent).

### Day 19 — Build day
- [ ] Agent noted no specific claims to verify here. Skim once to confirm.

### Day 20 — The other stack
- [ ] Free-tier availability and current model names for ChatGPT, Google Gemini, Perplexity.

### Day 29 — Rehearse & record
- [ ] Screen-recording shortcuts: Mac `Shift+Cmd+5`, Windows Game Bar `Win+G`.

## Blanket check

Beyond the inline flags, scan every price, model name, menu label, settings path, and usage limit in days 08 to 30. They were written to be evergreen, but confirm against the current product before launch.

---

All 23 days flagged `needs_factcheck: true`: 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30.
