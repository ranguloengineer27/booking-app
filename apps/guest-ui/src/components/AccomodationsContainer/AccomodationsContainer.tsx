import { useEffect } from "react";

const AccomodationsContainer = () => {
  useEffect(() => {
    console.log("VITE_API_URL ::::::", import.meta.env.VITE_API_URL);
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/accommodations`
      );
      if (!res.ok) {
        console.error("Failed to fetch accomodations");
        return;
      }
      const data = await res.json();
      console.log("dataAAA ::::::", data);
    })();
  }, []);

  return <div>AccomodationsContainer</div>;
};

export default AccomodationsContainer;
