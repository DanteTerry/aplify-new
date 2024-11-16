"use client";

import { buttonDetails } from "@/constants";
import { Dialog } from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import Trash from "./Trash";
import NewApplication from "./NewApplication";

function SidebarButtons({
  isSidebarOpen,
  isDarkMode,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    setOpen(true);
    setSelectedButton(buttonName);
  };

  const iconColor = isDarkMode ? "#9D87FE" : "#3C4451";
  const iconFill = isDarkMode ? "#2A2A3A" : "#E5E7EB";

  return (
    <>
      <div className="flex w-full flex-col items-center gap-1 px-2">
        {buttonDetails.map((button) => (
          <button
            key={button.name}
            onClick={() => handleButtonClick(button.name)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg p-2 text-[#3C4451] transition-all duration-300 hover:bg-gray-300/20 dark:text-[#8f8f9a] dark:hover:bg-[#2A2A3A]",
              !isSidebarOpen && "w-max justify-center",
            )}
          >
            <button.icon size={20} color={iconColor} fill={iconFill} />
            {isSidebarOpen && (
              <span className="whitespace-nowrap text-sm">{button.name}</span>
            )}
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedButton === "New Application" && (
          <NewApplication setOpen={setOpen} />
        )}
        {selectedButton === "Trash" && <Trash />}
      </Dialog>
    </>
  );
}

export default SidebarButtons;
