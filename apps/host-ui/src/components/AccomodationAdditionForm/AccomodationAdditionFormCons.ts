import { Input } from "@booking-app/shared-ui";
import type {
  FormFieldConfig,
  FormState,
  FieldState,
} from "./AccomodationAdditionFormTypes";

export const REQUIRED_FIELD_ERROR = "This field is required";
export const INVALID_PRICE_ERROR = "Price must be a valid positive number";

export const DEFAULT_FIELD_STATE: FieldState = { value: "", error: null };

export const DEFAULT_FORM_STATE: FormState = {
  title: { ...DEFAULT_FIELD_STATE },
  description: { ...DEFAULT_FIELD_STATE },
  price: { ...DEFAULT_FIELD_STATE },
  location: { ...DEFAULT_FIELD_STATE },
};

export const formFields: FormFieldConfig[] = [
  {
    name: "title",
    label: "Title",
    component: Input,
    props: { type: "text", placeholder: "Enter title" },
  },
  {
    name: "description",
    label: "Description",
    component: "textarea",
    props: { placeholder: "Enter description", rows: 4 },
  },
  {
    name: "location",
    label: "Location",
    component: Input,
    props: { type: "text", placeholder: "Enter location" },
  },
  {
    name: "price",
    label: "Price per night (USD)",
    component: Input,
    props: { type: "number", placeholder: "Enter price", min: 0, step: 0.01 },
  },
];
