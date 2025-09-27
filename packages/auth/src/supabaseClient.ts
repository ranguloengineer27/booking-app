import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class SupabaseManager {
  private static supabase: SupabaseClient | null = null;

  public static init(url: string, anonKey: string) {
    SupabaseManager.supabase = createClient(url, anonKey);
  }

  public static get = () => {
    if (!SupabaseManager.supabase) {
      throw new Error(
        "Supabase client has not been initialized. Call initSupabaseClient first."
      );
    }
    return SupabaseManager.supabase;
  };
}

const SUPABASE_URL = "https://xwvxjdglxeyglouzfzqd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dnhqZGdseGV5Z2xvdXpmenFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDcyNjgsImV4cCI6MjA3MzE4MzI2OH0.T4g-k-50SwZaQ8aL-mMyxr5bB4ObukcsVWwkBqqmEuM";

SupabaseManager.init(SUPABASE_URL, SUPABASE_ANON_KEY);
