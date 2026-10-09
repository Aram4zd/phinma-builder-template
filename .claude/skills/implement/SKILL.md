---
name: implement
description: Builds the next ticket (or a named ticket) from docs/tickets/, checks the build, commits and pushes so the live site updates, and explains what changed in plain English. Use when the team is ready to write code.
disable-model-invocation: true
---

<!-- Adapted from implement in mattpocock/skills (MIT). -->

Build **one ticket at a time**. If the team names a ticket, build that
one. Otherwise pick the lowest-numbered ticket whose status is `todo`
and whose blockers are all `done`.

If `docs/SPEC.md` or `docs/tickets/` is missing, stop and tell the team
which command to run first. No spec, no code.

## For each ticket

1. **Read** the ticket, `docs/SPEC.md` and `CLAUDE.md`. Say in one
   sentence what you are about to build.
2. **Build it** within the pinned stack. Use the UI components in
   `src/components/ui/` — Button, Card, Input, Textarea, Label. Keep it
   simple: no abstractions the ticket does not need.
3. **Database changes** go in a numbered SQL file under `supabase/sql/`
   (for example `002-create-bookings.sql`). Every new table's SQL must
   enable Row Level Security and create its policies in the same file —
   see `001-example.sql` for the shape. Show the team the SQL and tell
   them to run it in the Supabase dashboard's SQL Editor. Wait for them
   to confirm it ran before continuing.
4. **Check it builds:** run `npm run build`. This is exactly what Vercel
   runs — if it fails here, it will fail there. Fix every error before
   moving on. A small test for tricky logic is welcome, not required.
5. **Commit and push** with a message like `feat: 03 — booking form`.
   Then tell the team to open the live URL in about a minute and check
   the acceptance criteria themselves, on a phone if they can.
6. **Update the ticket:** tick the criteria that are met, and set
   `Status: done` once the team confirms it works live.
7. **Explain** in two or three plain-English sentences what changed and
   why, and point at one thing in the code worth understanding.

Then stop and wait, unless the team has told you to keep going.

## Guardrails

- **Same error twice: stop.** Explain what you tried and what you think
  is actually wrong. Do not thrash through variations.
- **Scope creep:** if the ticket tempts you to build something extra,
  do not. Offer to add it to `docs/LATER.md`.
- **No new services** — library, framework or paid service outside the
  stack — without asking the team first.
- **No secrets** in client code. Never commit `.env.local`. Never use
  the Supabase `service_role` key in this project.

When the last ticket is done, or whenever the team asks, run
`/code-review`.
