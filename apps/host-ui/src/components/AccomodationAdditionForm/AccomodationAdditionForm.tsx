import React, { useState } from "react";
import { Button, Label } from "@booking-app/shared-ui";
import { cn } from "@booking-app/shared-ui";
import type { FormState } from "./AccomodationAdditionFormTypes";
import { DEFAULT_FORM_STATE, formFields } from "./AccomodationAdditionFormCons";
import { isRequired, isValidPrice } from "./AccomodationAdditionFormUtils";
import { useAuthContext } from "@booking-app/auth";
import { useAddAccommodation } from "@/services/mutations/useAddAccomodation";

const validators: {
  [K in keyof FormState]: (value: string) => string | null;
} = {
  title: isRequired,
  description: isRequired,
  location: isRequired,
  price: isValidPrice,
};

export const AccomodationAdditionForm: React.FC = () => {
  const { user } = useAuthContext();
  const [formValues, setFormValues] = useState<FormState>(DEFAULT_FORM_STATE);
  const addAccommodation = useAddAccommodation();

  const handleFieldChange = (field: keyof FormState, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: { value, error: prev[field].error },
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;

    const newState = (Object.keys(formValues) as (keyof FormState)[]).reduce(
      (acc, field) => {
        const error = validators[field](formValues[field].value);
        if (error) isValid = false;
        acc[field] = { ...formValues[field], error };
        return acc;
      },
      {} as FormState
    );

    setFormValues(newState);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    addAccommodation.mutate({
      title: formValues.title.value,
      description: formValues.description.value,
      price: formValues.price.value,
      location: formValues.location.value,
      owner_id: user.id,
    });

    setFormValues(DEFAULT_FORM_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formFields.map(({ name, label, component: Component, props }) => (
        <div key={name as string} className="space-y-2">
          <Label htmlFor={name as string}>{label} *</Label>
          <Component
            id={name as string}
            value={formValues[name].value}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleFieldChange(name, e.target.value)}
            className={cn("w-full p-2 border rounded-md", {
              "border-destructive": formValues[name].error,
            })}
            {...props}
          />
          {formValues[name].error && (
            <p className="text-sm text-destructive">{formValues[name].error}</p>
          )}
        </div>
      ))}

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="flex-1" variant="outline">
          Add Accommodation
        </Button>
      </div>
    </form>
  );
};

export default AccomodationAdditionForm;
