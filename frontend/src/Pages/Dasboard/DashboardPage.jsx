import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome";
import { TaskForm } from "@/components/task/TaskForm";

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
      <TaskForm />
      {/* task dialog form */}
    </div>
  );
};
