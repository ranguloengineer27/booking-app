import type { FormState } from "./AccomodationAdditionFormTypes";
import {
  REQUIRED_FIELD_ERROR,
  INVALID_PRICE_ERROR,
} from "./AccomodationAdditionFormCons";

export const isRequired = (v: string): string | null =>
  v.trim() ? null : REQUIRED_FIELD_ERROR;

export const isValidPrice = (v: string): string | null => {
  if (!v.trim()) return REQUIRED_FIELD_ERROR;
  if (isNaN(Number(v)) || Number(v) <= 0) return INVALID_PRICE_ERROR;
  return null;
};

export const updateForm = (
  oldState: FormState,
  inputField: keyof FormState
) => {
  return {
    ...oldState,
    [inputField]: { ...oldState[inputField] },
  };
};
