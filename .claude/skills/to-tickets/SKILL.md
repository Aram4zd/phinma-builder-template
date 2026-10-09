---
name: to-tickets
description: Breaks docs/SPEC.md into a short sequence of small, end-to-end tickets saved as files in docs/tickets/, always starting with getting the app live. Use after /to-spec, when the team is ready to plan the build session.
disable-model-invocation: true
---

<!-- Adapted from to-tickets in mattpocock/skills (MIT). -->

Break `docs/SPEC.md` into **tickets**. If the spec is missing, stop and
tell the team to run `/to-spec` first.

## Rules for tickets

- **Vertical slices.** Each ticket delivers one small thing that works
  end to end — screen, data and logic together. Never "do all the
  database work" as one ticket.
- **Every ticket is proven on the live URL**, not just on localhost.
- **Beginner-sized.** Each ticket should take a team with an agent
  roughly 20–40 minutes. The whole set should fit one three-hour
  session: usually 4 to 7 tickets. If there are more, cut scope and move
  the rest to `docs/LATER.md`.
- **Fixed opening tickets**, always first:
  - `01 — Live on Vercel`: the app is deployed and the team can open the
    URL on a phone. If the repo was created from the template and
    already deploys, the ticket is to verify it and put the live URL at
    the top of `README.md`.
  - `02 — Connected to Supabase`: environment variables set locally AND
    in Vercel; one real table from the spec created with Row Level
    Security on and policies written; the live site reads from it.

Give each ticket its **blockers**: the tickets that must finish first. A
ticket with no blockers can start immediately.

## Quiz the team

Show the breakdown as a numbered list — title, blocked by, and what it
delivers. Then ask:

- Does each ticket feel small enough?
- Is the order right?
- Anything to merge, split, or push to LATER?

Iterate until they approve it.

## Save

One file per ticket at `docs/tickets/NN-short-slug.md`, numbered in the
order they should be built:

    # NN — <Ticket title>

    **What to build:** the behaviour this ticket makes work, from the
    user's point of view.

    **Blocked by:** ticket numbers, or "None".

    **Status:** todo

    - [ ] Acceptance criterion
    - [ ] Acceptance criterion
    - [ ] Works on the live URL

No file paths or code snippets in tickets — they go stale fast.
