import { Button } from "@/components/ui/button";
import { ListFilter, PlusCircle } from "lucide-react";
import { FaListUl } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import SearchSidebar from "./SearchSidebar";
import MobileSidebar from "./MobileSidebar";

function MainTopBar() {
  return (
    <div className="flex w-full items-center justify-between border-b bg-gray-50 px-2 py-3 shadow-md xl:px-6 xl:py-4">
      <div className="flex items-center gap-2 sm:gap-4 md:hidden">
        <MobileSidebar />
        <SearchSidebar className="flex w-5/6 sm:w-full md:hidden" />
      </div>

      <Button
        variant={"outline"}
        className="hidden gap-2 border text-gray-700 transition-colors duration-300 md:flex"
      >
        <ListFilter /> Filter
      </Button>

      <div className="flex items-center gap-3">
        <Button
          variant={"outline"}
          className="hidden border text-gray-700 transition-colors duration-300 md:flex"
        >
          <PlusCircle /> Add Application
        </Button>

        <div className="flex items-center rounded-lg border bg-gray-100">
          <Button
            size={"icon"}
            variant={"outline"}
            className="transition-colors duration-300 hover:bg-blue-200"
          >
            <GoColumns />
          </Button>
          <Button
            size={"icon"}
            className="bg-white transition-colors duration-300 hover:bg-blue-200"
            variant={"outline"}
          >
            <FaListUl />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainTopBar;
