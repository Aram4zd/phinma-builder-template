---
name: code-review
description: Reviews the team's changes on two separate axes — Spec (does it do what docs/SPEC.md and the tickets asked?) and Safety and Standards (is it secure and sensibly written?) — and explains every finding in plain English with a fix. Use after /implement, before a demo, or whenever the team asks for a review.
---

<!-- Adapted from code-review in mattpocock/skills (MIT). -->

Review the changes on two axes, reported separately. A change can pass
one and fail the other — code can be tidy but wrong, or correct but
unsafe — so never merge the two lists or rank one against the other.

## 1. Pick the starting point

If the team named a commit, branch or ticket, review from there.
Otherwise propose a default — the commit just before the current
ticket's first commit (find it in `git log`), or the first commit if the
project is small — and confirm it with the team.

Capture the diff with `git diff <start>...HEAD` and the commits with
`git log <start>..HEAD --oneline`. If the diff is empty, say so and stop.

## 2. Axis A — Spec

Compare the diff against `docs/SPEC.md` and the relevant files in
`docs/tickets/`. Report:

- Requirements missing or only partly done
- Things built that nobody asked for (scope creep)
- Things that look done but seem wrong
- Acceptance criteria you cannot confirm from the code alone — list
  these for the team to check on the live URL

Quote the spec or ticket line behind each finding.

## 3. Axis B — Safety and Standards

**🔴 Must fix before the demo.** These are hard failures:

- A Supabase table with Row Level Security off, or RLS on but no
  policies — this means anyone on the internet can read or change that
  data
- The `service_role` key, or any other secret, in the repo or in client
  code
- A `.env` file with real values committed
- A secret inside a `NEXT_PUBLIC_` variable — those are compiled into
  the JavaScript the browser downloads
- User input rendered as raw HTML (`dangerouslySetInnerHTML`)
- Database queries built by gluing strings together with user input
- `npm run build` fails

**🟡 Should fix.** Judgement calls — label each one as a judgement, not
a rule:

- A library, service or framework outside the pinned stack
- A name that does not say what the thing is or does
- The same logic copied in several places
- A file past roughly 300 lines doing several unrelated jobs
- Leftover `console.log`s, commented-out code, or unused files
- Screens that break at phone width
- Something built "for later" that the spec does not ask for

For every finding give three things: where it is, why it matters in one
plain-English sentence, and how to fix it.

If sub-agents are available, run the two axes as separate sub-agents in
parallel so neither biases the other. Otherwise do them one after the
other and keep the notes separate.

## 4. Report

    ## Spec
    …findings…

    ## Safety and Standards
    …findings, 🔴 first…

    **Summary:** Spec — N findings (worst: …).
    Safety and Standards — N findings, N must-fix (worst: …).

Then ask whether the team wants you to fix the 🔴 items now.
