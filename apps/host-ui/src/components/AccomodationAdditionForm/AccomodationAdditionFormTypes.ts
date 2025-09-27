import type { ElementType } from "react";
import type { AccomodationCreateType } from "@/types/accomodationTypes";

export type FieldState = {
  value: string;
  error: string | null;
};

export type FormState = {
  [K in keyof Omit<AccomodationCreateType, "owner_id">]: FieldState;
};

export type FormFieldConfig = {
  name: keyof FormState;
  label: string;
  component: ElementType | "textarea";
  props?: Record<string, any>;
};
