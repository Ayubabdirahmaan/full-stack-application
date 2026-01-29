import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome";
import React from "react";

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* header  */}
      <DashboardHeader />
      {/* main contant */}
      <main>
        {/* welcome section  */}
        <DashboardWelcome />
        {/* tasks section */}
      </main>

      {/* task dialog form */}
    </div>
  );
};
