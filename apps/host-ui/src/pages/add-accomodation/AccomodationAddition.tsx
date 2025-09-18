import React, { useCallback, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@booking-app/shared-ui";
import { cn } from "@booking-app/shared-ui";

const REQUIRED_FIELD_ERROR = "This field is required";
const INVALID_PRICE_ERROR = "Price must be a valid positive number";

type FieldState = {
  value: string;
  error: string | null;
};

type FormState = {
  title: FieldState;
  description: FieldState;
  price: FieldState;
};

const defaultFieldState: FieldState = {
  value: "",
  error: null,
};

const isEmptyFieldError = (value: string): string | null => {
  return value.trim() ? null : REQUIRED_FIELD_ERROR;
};

const isInvalidPriceError = (price: string): string | null => {
  if (!price.trim()) return REQUIRED_FIELD_ERROR;
  if (isNaN(Number(price)) || Number(price) <= 0) return INVALID_PRICE_ERROR;
  return null;
};

const updateForm = (oldState: FormState, inputField: keyof FormState) => {
  return {
    ...oldState,
    [inputField]: { ...oldState[inputField] },
  };
};

const DEFAULT_FORM_STATE: FormState = {
  title: defaultFieldState,
  description: defaultFieldState,
  price: defaultFieldState,
};

const AccomodationAddition = () => {
  const [formValues, setFormValues] = useState<FormState>(DEFAULT_FORM_STATE);

  const isFormDataValid = useCallback(() => {
    const titleError = isEmptyFieldError(formValues.title.value);
    const descriptionError = isEmptyFieldError(formValues.description.value);
    const priceError = isInvalidPriceError(formValues.price.value);

    setFormValues((prev) => ({
      title: { ...prev.title, error: titleError },
      description: { ...prev.description, error: descriptionError },
      price: { ...prev.price, error: priceError },
    }));

    return !titleError && !descriptionError && !priceError;
  }, [
    formValues.title.value,
    formValues.description.value,
    formValues.price.value,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormDataValid()) {
      console.log("Form submitted:", {
        title: formValues.title.value,
        description: formValues.description.value,
        price: parseFloat(formValues.price.value),
      });

      setFormValues(DEFAULT_FORM_STATE);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div>
              <CardTitle className="text-2xl font-bold">
                Add New Accommodation
              </CardTitle>
            </div>
            <CardDescription>
              <div>
                Fill in the details below to add a new accommodation to your
                listing.
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter accommodation title"
                  value={formValues.title.value}
                  onChange={() =>
                    setFormValues(updateForm(formValues, "title"))
                  }
                  className={cn({
                    "border-destructive": formValues.title.error,
                  })}
                />
                {formValues.title.error && (
                  <p className="text-sm text-destructive">
                    {formValues.title.error}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <textarea
                  id="description"
                  placeholder="Enter accommodation description"
                  value={formValues.description.value}
                  onChange={() =>
                    setFormValues(updateForm(formValues, "description"))
                  }
                  className={cn(
                    "w-full p-2 border rounded-md",
                    formValues.description.error ? "border-destructive" : ""
                  )}
                  rows={4}
                />
                {formValues.description.error && (
                  <p className="text-sm text-destructive">
                    {formValues.description.error}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price per night (USD) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter price per night"
                  value={formValues.price.value}
                  onChange={() =>
                    setFormValues(updateForm(formValues, "price"))
                  }
                  className={cn({
                    "border-destructive": formValues.price.error,
                  })}
                  min="0"
                  step="0.01"
                />
                {formValues.price.error && (
                  <p className="text-sm text-destructive">
                    {formValues.price.error}
                  </p>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1" variant="outline">
                  Add Accommodation
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccomodationAddition;
