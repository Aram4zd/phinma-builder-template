import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for BROWSER code — anything in a file with "use client".
 *
 * This runs in the user's browser, so it can ONLY ever use the anon key.
 * The anon key is safe to expose: it is Row Level Security on your tables
 * that decides who can read and write what. If RLS is off, your data is
 * public to the whole internet — see supabase/sql/001-example.sql.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase env vars missing. Copy .env.example to .env.local and fill in " +
        "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from your " +
        "Supabase project (click Connect). Add them in Vercel too.",
    );
  }

  return createBrowserClient(url, anonKey);
}
