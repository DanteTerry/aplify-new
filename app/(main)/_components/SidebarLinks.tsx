"use client";
import { Button } from "@/components/ui/button";
import { linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

function SidebarLinks({
  isDarkMode,
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pathName = usePathname();
  const iconColor = isDarkMode ? "#9D87FE" : "#3C4451";
  const iconFill = isDarkMode ? "#2A2A3A" : "#E5E7EB";
  return (
    <div className="flex w-full flex-col items-center gap-1 px-2">
      {linkDetails.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg p-2 text-[#3C4451] transition-all duration-300 hover:bg-gray-300/20 dark:text-[#8f8f9a] dark:hover:bg-[#2A2A3A]",
            pathName === link.href && "bg-gray-300/20 dark:bg-[#2A2A3A]",
            !isSidebarOpen && "w-max justify-center",
          )}
        >
          <link.icon size={20} color={iconColor} fill={iconFill} />
          {isSidebarOpen && (
            <span className="whitespace-nowrap text-sm">{link.name}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
export default SidebarLinks;
