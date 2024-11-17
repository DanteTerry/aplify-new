import DashboardHeader from "../_components/DashboardHeader";
import DashboardMain from "../_components/DashboardMain";

function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-col dark:bg-indigo-500/5">
      <DashboardHeader />
      <DashboardMain />
    </div>
  );
}

export default DashboardPage;
