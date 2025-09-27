import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AccomodationCreateType } from "@/types/accomodationTypes";
import { SupabaseManager } from "@booking-app/auth";

export type Accommodation = {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
};

export const useAddAccommodation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addAccommodation"],
    mutationFn: async (newAccommodation: AccomodationCreateType) => {
      const SUPABASE_CLIENT = SupabaseManager.get();
      if (!SUPABASE_CLIENT) return [];

      const response = await SUPABASE_CLIENT.from("accommodation")
        .insert([newAccommodation])
        .select();

      if (response?.error) throw response.error;

      return response?.data ?? [];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accommodation"] });
    },
  });
};
