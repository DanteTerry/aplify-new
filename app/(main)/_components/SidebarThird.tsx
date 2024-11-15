"use client";
import ThemeToggleButton from "@/components/reuseable/ThemeToggleButton";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SidebarButtons from "./SidebarButtons";
import SidebarLinks from "./SidebarLinks";
import Link from "next/link";

function SidebarThird() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const iconColor = isDarkMode ? "#9D87FE" : "#3C4451";
  const iconFill = isDarkMode ? "#2A2A3A" : "#E5E7EB";

  return (
    <aside
      className={cn(
        "relative flex h-screen flex-col items-center gap-4 border-r bg-[#f4f6f9] py-4 transition-all dark:bg-[#1E1D2A]",
        isSidebarOpen ? "w-64" : "w-20",
      )}
    >
      {/* Logo Section */}
      <div className="flex w-full items-center gap-3 px-4">
        <Link href={"/dashboard"} className="flex items-center gap-3">
          <div className="flex-shrink-0 rounded-xl p-1">
            <Image
              src="/logo/aplify.png"
              alt="logo"
              width={33}
              height={33}
              sizes="33px"
              className="h-auto w-auto"
            />
          </div>
          {isSidebarOpen && (
            <h1 className="text-xl font-semibold text-[#8f8f9a] dark:text-[#8f8f9a]">
              Aplify
            </h1>
          )}
        </Link>
      </div>

      <Separator className="bg-[#d1d4d9] dark:bg-gray-500/10" />

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="rounded-lg p-2 transition-all duration-300 hover:bg-gray-300/20 dark:hover:bg-[#2A2A3A]"
      >
        {isSidebarOpen ? (
          <X size={22} color={iconColor} fill={iconFill} />
        ) : (
          <Menu size={22} color={iconColor} fill={iconFill} />
        )}
      </button>

      <Separator className="bg-[#d1d4d9] dark:bg-gray-500/10" />

      {/* Button Details */}
      <SidebarButtons
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        isDarkMode={isDarkMode}
      />

      <Separator className="bg-[#d1d4d9] dark:bg-gray-500/10" />

      {/* Link Details */}
      <SidebarLinks
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        isDarkMode={isDarkMode}
      />

      <Separator className="bg-[#d1d4d9] dark:bg-gray-500/10" />

      {/* Theme Toggle & Profile Image */}
      <div className="mt-auto flex flex-col items-center gap-2 px-2">
        <ThemeToggleButton
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        {/* <UserBtn /> */}
      </div>
    </aside>
  );
}

export default SidebarThird;
