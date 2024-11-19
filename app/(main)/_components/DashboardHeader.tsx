import { auth } from "@/auth";
import { BellRing, Search, Sun } from "lucide-react";
import Image from "next/image";

async function DashboardHeader() {
  const session = await auth();
  const user = session?.user;

  const iconColor = true ? "#9D87FE" : "#3C4451";

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md transition-colors duration-300 dark:bg-[#1E1D2A]">
      {/* user greet and profile */}
      <div className="flex items-center gap-4">
        <div className="h-full rounded-full">
          <Image
            src={user?.image || "/userAvatar/avatar.jpg"}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user?.name || "John Doe"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hello, Welcome back!
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* search bar  */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md bg-gray-100 px-4 py-2 pl-10 text-sm text-gray-900 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-[#2E2D3A]/40 dark:text-white"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400">
            <Search size={16} color={iconColor} />
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform text-xs text-gray-400">
            <p>Ctrl K</p>
          </div>
        </div>

        {/* notification */}
        <div className="relative flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:bg-[#2E2D3A]/40 dark:hover:bg-[#3E3D4A]">
          <button className="flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <BellRing size={16} color={iconColor} />
          </button>
          <div className="flex items-center justify-center rounded-md bg-indigo-500 px-2">
            <p className="text-sm text-white">3</p>
          </div>
        </div>

        {/* theme toggle */}
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-gray-400 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900 dark:bg-[#2E2D3A]/40 dark:hover:bg-[#3E3D4A] dark:hover:text-white">
            <Sun size={20} color={iconColor} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default DashboardHeader;
