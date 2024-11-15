"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sun, SunMoon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect } from "react";

function ThemeToggleButton({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="">
      <button
        onClick={toggleDarkMode}
        className="rounded-lg p-2 transition-all duration-300 hover:bg-gray-300/20 dark:hover:bg-[#2A2A3A]"
      >
        {isDarkMode ? (
          <Sun
            size={24}
            color={isDarkMode ? "#9D87FE" : "#3C4451"}
            fill={isDarkMode ? "#1c1c1d" : "#D1D4D9"}
          />
        ) : (
          <SunMoon
            size={24}
            color={isDarkMode ? "#2A2A3A" : "#3C4451"}
            fill={isDarkMode ? "#1c1c1d" : "#D1D4D9"}
          />
        )}
      </button>
    </div>
  );
}
export default ThemeToggleButton;
