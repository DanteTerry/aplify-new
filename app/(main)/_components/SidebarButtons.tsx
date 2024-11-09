import { Button } from "@/components/ui/button";
import SearchSidebar from "./SearchSidebar";
import { buttonDetails } from "@/constants";

function SidebarButtons() {
  return (
    <div className="mt-2 flex w-full flex-col gap-2 px-4 py-2 xl:py-3">
      <SearchSidebar />
      <div className="flex flex-col gap-1">
        {buttonDetails.map((button, index) => (
          <Button
            key={index}
            size="sm"
            variant="ghost"
            className="justify-start text-gray-600 hover:text-gray-900"
          >
            <button.icon size={18} className="mr-2" />
            <span className="text-sm font-medium">{button.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
export default SidebarButtons;
