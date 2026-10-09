# Supabase in this project

- `client.ts` — use in files that start with `"use client"`
- `server.ts` — use in server components, route handlers, server actions

Both use the **anon key**. That is correct and safe.

## The one rule

Your data is protected by **Row Level Security (RLS)**, not by hiding the
key. The anon key is in the browser; anyone can read it. If a table has
RLS off, anyone on the internet can read and write that table.

So: every table gets RLS on, plus policies saying who may do what.

## Never do this

- Never put the `service_role` key in this project. It bypasses RLS.
- Never commit `.env.local`.
- Never put a secret in a `NEXT_PUBLIC_` variable — those are compiled
  into the JavaScript the browser downloads.
