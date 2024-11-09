import { Button } from "@/components/ui/button";
import { endButtonDetails } from "@/constants";

function SidebarBottomButtons() {
  return (
    <div className="mt-auto w-full px-4 py-2 xl:py-3">
      {endButtonDetails.map((button, index) => (
        <Button
          key={index}
          size="sm"
          variant="ghost"
          className="w-full justify-start text-gray-600 hover:text-gray-900"
        >
          <button.icon size={18} className="mr-2" />
          <span className="text-sm font-medium">{button.name}</span>
        </Button>
      ))}
    </div>
  );
}
export default SidebarBottomButtons;
