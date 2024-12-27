"use client";
import { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineLogout, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";

const Tooltip: FC<{ text: string }> = ({ text }) => (
  <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
    {text}
  </span>
);

const SidebarOne: FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [user, setUser] = useState(session?.user);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setUser(session?.user);
  }, [session]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside className="fixed flex h-screen w-20 flex-col items-center justify-between bg-gradient-to-b from-purple-500 via-purple-700 to-purple-900 py-5 shadow-lg transition-all duration-300 ease-in-out hover:w-24">
      <Image
        src="/logo/aplify.png"
        width={40}
        height={40}
        alt="Aplify logo"
        className="mb-5 rounded-full transition-transform duration-200 hover:scale-110"
        priority
      />

      <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white/80 px-3 py-5 shadow-lg backdrop-blur-md dark:bg-gray-800/80">
        <div className="flex flex-col gap-3">
          {buttonDetails.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="group relative rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-purple-300"
            >
              <Icon size={24} color="black" />
              <Tooltip text={name} />
            </button>
          ))}
          {linkDetails.map(({ name, href, icon: Icon }) => (
            <Link
              href={href}
              key={name}
              className={cn(
                `group relative rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-purple-300`,
                href === pathname && "bg-purple-900 text-white",
              )}
            >
              <Icon size={24} color={href === pathname ? "white" : "black"} />
              <Tooltip text={name} />
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3">
          {endButtonDetails.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="group relative rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-purple-300"
            >
              <Icon size={24} color="black" />
              <Tooltip text={name} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          className="group relative rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-purple-300"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <HiOutlineSun size={24} color="black" />
          ) : (
            <HiOutlineMoon size={24} color="black" />
          )}
          <Tooltip text="Toggle Dark Mode" />
        </button>
        <button className="group relative rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-purple-300">
          <HiOutlineLogout size={24} color="black" />
          <Tooltip text="Logout" />
        </button>
        {user?.image && (
          <div className="rounded-full shadow-lg transition-transform duration-200 hover:scale-110">
            <Image
              width={40}
              height={40}
              src={user.image}
              className="rounded-full shadow-md"
              alt="user image"
            />
          </div>
        )}
        {user && (
          <div className="text-center text-white">
            <p className="text-sm">{user.name}</p>
            <p className="text-xs">{user.email}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarOne;
