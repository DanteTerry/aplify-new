import { DashboardBar } from "./DashboardBar";

function DashboardMain() {
  return (
    <div className="flex h-full flex-col items-center gap-5 p-3">
      <div className="flex items-center gap-10">
        {/* Dashboard bar */}
        <DashboardBar />

        {/* Dashboard    */}
        <div className="flex h-80 w-80 items-center justify-center rounded-md p-4 dark:bg-[#1E1D2A]">
          2
        </div>
        <div className="flex h-80 w-80 items-center justify-center rounded-md p-4 dark:bg-[#1E1D2A]">
          3
        </div>
        <div className="flex h-80 w-80 items-center justify-center rounded-md p-4 dark:bg-[#1E1D2A]">
          4
        </div>
      </div>
      <div className="h-full w-full rounded-lg dark:bg-[#1E1D2A]">Hello</div>
    </div>
  );
}
export default DashboardMain;
