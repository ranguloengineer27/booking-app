import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabaseClient } from "../supabaseClient";
import type { AccomodationCreateType } from "@/types/accomodationTypes";

export interface Accommodation {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
}

export const useAddAccommodation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addAccommodation"],
    mutationFn: async (newAccommodation: AccomodationCreateType) => {
      const { data, error } = await supabaseClient
        .from("accommodation")
        .insert([newAccommodation])
        .select();

      if (error) throw error;

      return data ?? [];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accommodation"] });
    },
  });
};
