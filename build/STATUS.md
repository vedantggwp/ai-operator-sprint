# Build status — AI Operator Sprint launch

Branch: build/launch-fleet. Updated by the cloud build agent as it works.

## Curriculum (31 days)
- [x] day-00 — real content, house voice (hand-written exemplar)
- [ ] day-01..07 — grounded content present, needs VOICE rewrite (remove em dashes, Feynman/Zinsser)
- [ ] day-08..30 — stubs, need full lessons (flag all facts)

## Frontend
- [ ] npm build green on branch
- [ ] npm lint green
- [ ] routes render real curriculum
- [ ] OG images build
- [ ] e2e run (or noted pending)

## Delivery
- [ ] PR opened build/launch-fleet -> master (do not merge)

## Left for the human (cannot be done from the cloud)
- Cloudflare CNAME: sprint -> cname.vercel-dns.com (DNS only)
- Flip Vercel protection or go to production
- Fact-check the claims in FACTCHECK.md
- Optional: Supabase anon key + Resend key for email capture
