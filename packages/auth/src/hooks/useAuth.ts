import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { SupabaseManager } from "../supabaseClient";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabaseClient = SupabaseManager.get();

    (async () => {
      const response = await supabaseClient?.auth.getUser();
      setUser(response?.data?.user ?? null);
      setLoading(false);
    })();

    const responseOnChange = supabaseClient?.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      responseOnChange?.data.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
