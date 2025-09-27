import type { ButtonAuthType } from "./AuthButtonTypes";
import { authVariants } from "./AuthButtonCons";
import type { User } from "@supabase/supabase-js";

export const getButtonVariantNode = (
  user: User | null,
  variant: ButtonAuthType,
  loading: boolean
) => {
  if (loading) return authVariants.loading;
  return user ? authVariants.logout : authVariants[variant];
};
