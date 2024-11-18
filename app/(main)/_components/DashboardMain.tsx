import { DashboardBar } from "./DashboardBar";

function DashboardMain() {
  return (
    <div className="flex h-full items-center justify-center gap-5 py-6">
      <div className="flex h-full flex-col items-start gap-5">
        <div className="flex h-full items-center gap-5">
          {/* Dashboard bar */}
          <DashboardBar />

          {/* Dashboard    */}
          <div className="flex h-full w-80 items-center justify-center rounded-md p-4 dark:bg-[#1E1D2A]">
            Recent updates
          </div>
          <div className="flex h-80 w-80 items-center justify-center rounded-md p-4 dark:bg-[#1E1D2A]">
            Resume/Cover letter
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-lg dark:bg-[#1E1D2A]">
          Recent job applications
        </div>
      </div>
      <div className="flex h-full w-80 items-center justify-center rounded-md p-4 dark:bg-[#1E1D2A]">
        Recent Jobs
      </div>
    </div>
  );
}
export default DashboardMain;
