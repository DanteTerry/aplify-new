import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import UserBtn from "./UserBtn";
import { SessionProvider } from "next-auth/react";
import SidebarButtons from "./SidebarButtons";
import { Separator } from "@/components/ui/separator";
import SidebarLinks from "./SidebarLinks";
import SidebarBottomButtons from "./SidebarBottomButtons";

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className="flex gap-2 border text-gray-700 transition-colors duration-300 md:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex h-full w-60 flex-col justify-between p-0"
      >
        <SheetHeader>
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
        </SheetHeader>
        {/* Sidebar Feedback and support buttons */}
        <SheetFooter className="">
          <SidebarBottomButtons />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default MobileSidebar;
