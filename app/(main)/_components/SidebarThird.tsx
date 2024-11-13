"use client";
import ThemeToggleButton from "@/components/reuseable/ThemeToggleButton";
import { Separator } from "@/components/ui/separator";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { SessionProvider, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function SidebarThird() {
  const pathName = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  const iconColor = isDarkMode ? "#9D87FE" : "#3C4451";
  const iconFill = isDarkMode ? "#1E1D2A" : "#E5E7EB";
  return (
    <SessionProvider>
      <aside
        className={cn(
          `flex h-screen w-20 flex-col items-center gap-3 border-r bg-[#f4f6f9] py-3 dark:bg-[#1E1D2A]`,
        )}
      >
        <div className="rounded-xl bg-[#1E1D2A] p-1">
          <Image
            src="/logo/aplify.png"
            alt="logo"
            width={33}
            sizes="33px"
            height={33}
            className="h-auto w-auto"
          />
        </div>

        <Separator className="h-[1.5px] bg-[#d1d4d9] dark:bg-gray-500/10" />

        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="rounded-lg p-2 transition-all duration-300 hover:bg-gray-300/20 dark:hover:bg-[#2A2A3A]"
        >
          {!isSidebarOpen ? (
            <Menu size={22} color={iconColor} fill={iconFill} />
          ) : (
            <X size={22} color={iconColor} fill={iconFill} />
          )}{" "}
        </button>
        <Separator className="h-[1.5px] bg-[#d1d4d9] dark:bg-gray-500/10" />

        <div className="flex flex-col gap-2">
          {buttonDetails.map((button) => (
            <button
              key={button.name}
              className="flex w-full items-center gap-2 rounded-lg p-2 text-[#8f8f9a] transition-all duration-300 hover:bg-gray-300/20 dark:hover:bg-[#2A2A3A]"
            >
              <button.icon size={20} color={iconColor} fill={iconFill} />
            </button>
          ))}
        </div>
        <Separator className="h-[1.5px] bg-[#d1d4d9] dark:bg-gray-500/10" />
        <div className="flex flex-col gap-2">
          {linkDetails.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={cn(
                `flex w-full items-center gap-2 rounded-lg p-2 text-[#8f8f9a] transition-all duration-300 hover:bg-gray-300/20 dark:hover:bg-[#2A2A3A]`,
                pathName === link.href && "",
              )}
            >
              <link.icon size={20} color={iconColor} fill={iconFill} />
            </Link>
          ))}
        </div>
        <Separator className="h-[1.5px] bg-[#d1d4d9] dark:bg-gray-500/10" />
        <div className="flex flex-col items-center gap-2">
          {endButtonDetails.map((button) => (
            <button
              key={button.name}
              className="flex w-full items-center justify-center gap-2 rounded-lg p-2 text-[#8f8f9a] transition-all duration-300 hover:bg-gray-300/20 dark:hover:bg-[#2A2A3A]"
            >
              <button.icon size={20} color={iconColor} fill={iconFill} />
            </button>
          ))}
        </div>
        <Separator className="h-[1.5px] bg-[#d1d4d9] dark:bg-gray-500/10" />
        <div className="flex flex-col items-center gap-2">
          <ThemeToggleButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />

          <div className="rounded-full">
            <Image
              src={user?.image}
              className="rounded-full"
              sizes="30px"
              alt="logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </aside>
    </SessionProvider>
  );
}
export default SidebarThird;
