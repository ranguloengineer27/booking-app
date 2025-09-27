// @components
import { QueryClientProvider } from "@tanstack/react-query";
import AccomodationAdditionPage from "./pages/add-accomodation/AccomodationAdditionPage";
import { queryClient } from "./services/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthButton from "./components/AuthButton/AuthButton";
import useInitServices from "./hooks/useInitServices";
import { AuthProvider } from "@booking-app/auth";

function App() {
  // Initialize services like Supabase
  const { areServicesLoaded } = useInitServices();

  if (!areServicesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AccomodationAdditionPage />
        <AuthButton variant="google" />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
