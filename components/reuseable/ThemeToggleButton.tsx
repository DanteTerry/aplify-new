"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={toggleDarkMode}
              className="cursor-pointer text-xl text-gray-800 transition-transform duration-200 hover:scale-110 dark:text-gray-200"
            >
              {isDarkMode ? <IoMdSunny size={30} /> : <IoMdMoon size={30} />}
            </div>
          </TooltipTrigger>
          <TooltipContent className="top-5 mb-4">
            <p className="font-semibold text-white dark:text-black">
              {isDarkMode ? "Light mode" : "Dark mode"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
export default ThemeToggleButton;
