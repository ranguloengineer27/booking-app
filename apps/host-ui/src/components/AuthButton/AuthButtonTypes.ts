import type { AuthProvider } from "@booking-app/auth";
export type ButtonAuthType = AuthProvider | "logout" | "loading";

export type Props = {
  variant: ButtonAuthType;
};
