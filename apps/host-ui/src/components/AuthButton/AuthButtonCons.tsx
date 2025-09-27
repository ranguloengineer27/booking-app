import React from "react";
import { Button } from "@booking-app/shared-ui";
import { FcGoogle } from "react-icons/fc";
import { handleLogin, handleLogout } from "@booking-app/auth";

export const authVariants: Record<string, React.ReactNode> = {
  google: (
    <Button
      onClick={() => {
        handleLogin("google");
      }}
      variant="outline"
      className="flex items-center gap-2 px-6 py-3 text-base"
    >
      <FcGoogle className="h-5 w-5" />
      Sign in with Google
    </Button>
  ),
  loading: <Button>Loading...</Button>,
  logout: (
    <Button onClick={handleLogout} variant="secondary">
      Logout
    </Button>
  ),
};
