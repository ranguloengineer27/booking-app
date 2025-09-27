import { SupabaseManager } from "./supabaseClient";
import { AuthProviderType } from "./types";

const SUPABASE_CLIENT = SupabaseManager.get();

export const handleLogin = async (provider: AuthProviderType) => {
  try {
    await SUPABASE_CLIENT?.auth.signInWithOAuth({
      provider,
      options: { redirectTo: process.env.SUPABASE_REDIRECT_URL },
    });
  } catch (error) {
    console.log("LOGOUT ERROR ::", error);
  }
};

export const handleLogout = async () => {
  try {
    await SUPABASE_CLIENT?.auth.signOut();
  } catch (err) {
    console.log("LOGIN ERROR ::", err);
  }
};
