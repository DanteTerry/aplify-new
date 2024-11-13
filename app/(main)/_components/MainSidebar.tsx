import UserBtn from "./UserBtn";
import { SessionProvider } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import SidebarButtons from "./SidebarButtons";
import SidebarLinks from "./SidebarLinks";
import SidebarBottomButtons from "./SidebarBottomButtons";

function MainSidebar() {
  return (
    <aside
      className={`fixed left-0 top-0 hidden h-screen w-60 flex-col items-center gap-3 overflow-y-auto border-r bg-white font-inter text-white md:flex`}
    >
      {/* Sidebar user button */}
      <div className="w-full px-4 py-2 xl:py-3">
        <SessionProvider>
          <UserBtn />
        </SessionProvider>
      </div>

      {/* Sidebar side button */}
      <SidebarButtons />

      {/* Separator */}
      <div className="w-full">
        <Separator />
      </div>

      {/* Sidebar links */}
      <SidebarLinks />
      {/* Sidebar Feedback and support buttons */}
      <SidebarBottomButtons />
    </aside>
  );
}
export default MainSidebar;
