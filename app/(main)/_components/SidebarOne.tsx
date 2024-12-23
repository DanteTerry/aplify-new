"use client";
import { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";

const SidebarOne: FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [user, setUser] = useState(session?.user);

  useEffect(() => {
    setUser(session?.user);
  }, [session]);

  return (
    <aside className="fixed flex h-screen w-20 flex-col items-center justify-between bg-gradient-to-b from-blue-900 to-blue-500 py-5 shadow-lg transition-all duration-300 ease-in-out hover:w-24">
      <Image
        src="/logo/aplify.png"
        width={40}
        height={40}
        alt="Aplify logo"
        className="mb-5 rounded-full transition-transform duration-200 hover:scale-110"
        priority
      />

      <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white px-3 py-5 shadow-lg">
        <div className="flex flex-col gap-3">
          {buttonDetails.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200"
            >
              <Icon size={24} color="black" />
            </button>
          ))}
          {linkDetails.map(({ name, href, icon: Icon }) => (
            <Link
              href={href}
              key={name}
              className={cn(
                `rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200`,
                href === pathname && "bg-blue-900 text-white",
              )}
            >
              <Icon size={24} color={href === pathname ? "white" : "black"} />
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3">
          {endButtonDetails.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200"
            >
              <Icon size={24} color="black" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button className="rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200">
          <HiOutlineLogout size={24} color="black" />
        </button>
        {user?.image && (
          <div className="rounded-full shadow-lg transition-transform duration-200 hover:scale-110">
            <Image
              width={40}
              height={40}
              src={user.image}
              className="rounded-full"
              alt="user image"
            />
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarOne;
