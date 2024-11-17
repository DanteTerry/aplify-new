import { Button } from "@/components/ui/button";
import { endButtonDetails } from "@/constants";
import { cn } from "@/lib/utils";

function SidebarBottomButtons({
  isDarkMode,
  isSidebarOpen,
}: {
  isDarkMode: boolean;
  isSidebarOpen: boolean;
}) {
  const iconColor = isDarkMode ? "#9D87FE" : "#3C4451";
  const iconFill = isDarkMode ? "#2A2A3A" : "#E5E7EB";
  return (
    <div className="flex w-full flex-col items-center gap-1 px-2">
      {endButtonDetails.map((button) => (
        <button
          key={button.name}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg p-2 text-[#3C4451] transition-all duration-300 hover:bg-gray-300/20 dark:text-[#8f8f9a] dark:hover:bg-[#2A2A3A]",
            !isSidebarOpen && "w-max justify-center",
          )}
        >
          <button.icon size={20} color={iconColor} />
          {isSidebarOpen && (
            <span className="whitespace-nowrap text-sm">{button.name}</span>
          )}
        </button>
      ))}
    </div>
  );
}
export default SidebarBottomButtons;
