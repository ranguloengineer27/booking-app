import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@booking-app/shared-ui";
import AccomodationAdditionForm from "@/components/AccomodationAdditionForm/AccomodationAdditionForm";

const AccomodationAdditionPage: React.FC = () => {
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
            <AccomodationAdditionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccomodationAdditionPage;
