-- EXAMPLE — read this, then delete it and write your own.
--
-- Every database change in this project is a numbered file in this
-- folder. You run them yourself in the Supabase dashboard:
--   Supabase -> SQL Editor -> New query -> paste -> Run
--
-- Keeping them here means your whole database can be rebuilt from the
-- repo, and your teammates can see exactly what changed.

-- 1. The table ------------------------------------------------------

create table if not exists notes (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  author_name text        not null,
  body        text        not null
);

-- 2. Row Level Security --------------------------------------------
--
-- READ THIS PART. Your app is on a public URL and the anon key is
-- visible in the browser to anyone who looks. RLS is the ONLY thing
-- protecting your data.
--
-- With RLS off: anyone on the internet can read, change and delete
-- every row in this table.
-- With RLS on and no policies: nobody can do anything (including you).
--
-- So you always do both: enable it, then write policies.

alter table notes enable row level security;

-- Policy A: anyone may read notes.
-- Fine for genuinely public data. NOT fine for anything private.
create policy "anyone can read notes"
  on notes for select
  to anon, authenticated
  using (true);

-- Policy B: anyone may add a note.
-- Open submission, like a public suggestion box. Reasonable for a demo;
-- be aware it means anyone can spam you.
create policy "anyone can add a note"
  on notes for insert
  to anon, authenticated
  with check (true);

-- Deliberately NO update or delete policy: nobody can edit or remove
-- rows through the API. Anything without a policy is denied.

-- 3. If your app has login -----------------------------------------
--
-- Once you use Supabase Auth, tie rows to their owner instead of
-- leaving them open. The pattern looks like this:
--
--   alter table notes add column user_id uuid references auth.users(id);
--
--   create policy "owners can read their own notes"
--     on notes for select
--     to authenticated
--     using ((select auth.uid()) = user_id);
--
--   create policy "owners can update their own notes"
--     on notes for update
--     to authenticated
--     using ((select auth.uid()) = user_id)
--     with check ((select auth.uid()) = user_id);
--
-- `using` controls which existing rows you may touch.
-- `with check` controls what the row is allowed to look like afterwards.
-- Updates need both, or someone could reassign a row to another user.

-- 4. Check it worked -------------------------------------------------
--
-- In the Supabase dashboard, open Table Editor. Any table showing an
-- "RLS disabled" warning is a 🔴 must-fix before your demo.
