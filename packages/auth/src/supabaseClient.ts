import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class SupabaseManager {
  private static supabase: SupabaseClient | null = null;

  public static init(url: string, anonKey: string) {
    SupabaseManager.supabase = createClient(url, anonKey);
  }

  public static get = () => {
    if (!SupabaseManager.supabase) {
      console.error(
        "Supabase client has not been initialized. Call initSupabaseClient first."
      );
    }
    return SupabaseManager.supabase;
  };
}

/* export function initSupabaseClient(url: string, anonKey: string) {
  let supabase: SupabaseClient | null = null;

  return () => {
    if (supabase) return;
    supabase = createClient(url, anonKey);
    return supabase;
  };
} */

/* export function getSupabaseClient() {
  if (!supabase) {
    throw new Error(
      "Supabase client has not been initialized. Call initSupabaseClient first."
    );
  }
  return supabase;
}
 */
