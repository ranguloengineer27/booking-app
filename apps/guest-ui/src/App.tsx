import { useEffect, useState } from "react";
import "./App.css";
import AccomodationsContainer from "./components/AccomodationsContainer/AccomodationsContainer";
import { SupabaseManager } from "@booking-app/auth";

function App() {
  const [clientLoad, setClientLoad] = useState(false);

  /* useEffect(() => {
    if (!clientLoad) {
      console.log("Initializing Supabase...");
      SupabaseManager.init(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      );

      setClientLoad(true);
    }
  }, [clientLoad]);

  console.error("RENDER APP CLIENTLOAD ::::::", clientLoad); */

  return (
    <>
      <AccomodationsContainer />
    </>
  );
}

export default App;
