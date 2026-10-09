---
name: to-spec
description: Turns the team's validated problem (docs/PROBLEM.md) and the conversation so far into a short, buildable MVP spec in docs/SPEC.md. No interview, just synthesis. Use when the team is ready to move from idea to building.
disable-model-invocation: true
---

<!-- Adapted from to-spec in mattpocock/skills (MIT). -->

Synthesise a spec from what you already know. Do NOT interview the team
— that happened in `/grill-with-docs`. If `docs/PROBLEM.md` is missing,
stop and tell them to run `/grill-with-docs` first.

## Process

1. Read `docs/PROBLEM.md`, `CLAUDE.md` and the current code. Use the
   glossary terms from PROBLEM.md throughout the spec.
2. Write the spec using the template below. Keep it SMALL: it must be
   buildable by a beginner team with an agent in one three-hour session.
   If it is not, cut until it is and move the rest to `docs/LATER.md`.
3. Show the team the **Screens** and **Data** sections and confirm they
   match what the team imagines before you save.
4. Save to `docs/SPEC.md`.

The stack is fixed by `CLAUDE.md` — do not propose alternatives. Do not
include file paths or code snippets; they go stale fast. The exception
is the Data section, where table and column names are decisions rather
than implementation detail.

## Template

    # Spec: <Project name>

    ## Problem
    From the user's point of view, in two or three sentences.

    ## Solution
    What the app does for them, from their point of view.

    ## The user
    The one type of user this MVP serves.

    ## User stories
    5 to 8 stories. If you need more, the scope is too big.
    1. As a <user>, I want to <action>, so that <benefit>

    ## Screens
    Every screen, one line each: what the user sees and does there.

    ## Data
    Each Supabase table: its columns in plain terms, and who may read
    and write its rows. This becomes the Row Level Security policy, so
    be specific: "anyone may read, only the owner may update".

    ## Login
    Does the MVP need accounts? If yes: Supabase Auth, email and
    password. If the app can work without login, prefer that — it is one
    less thing to build and demo.

    ## Done for the demo
    A short checklist of what must work on the LIVE URL for Session 3.

    ## Out of scope
    What we are deliberately not building now.
