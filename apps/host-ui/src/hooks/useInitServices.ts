import { SupabaseManager } from "@booking-app/auth";
import React, { useEffect, useState } from "react";

type Output = { areServicesLoaded: boolean };

const useInitServices = (): Output => {
  const [areServicesLoaded, setAreServicesLoaded] = useState(false);
  useEffect(() => {
    if (areServicesLoaded) return;

    console.log("Initializing Supabase services...");
    SupabaseManager.init(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
    setAreServicesLoaded(true);
  }, [areServicesLoaded]);

  return { areServicesLoaded };
};

export default useInitServices;
