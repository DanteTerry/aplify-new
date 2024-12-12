"use client";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import { SessionProvider, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";

function SidebarOne() {
  const pathname = usePathname();
  const { data } = useSession();
  const user = data?.user;

  return (
    <SessionProvider>
      <aside className="fixed flex h-screen w-24 flex-col items-center justify-between bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] py-5 shadow-lg transition-all duration-300 ease-in-out hover:w-28">
        <div className="flex flex-col items-center">
          <Image
            src="/logo/aplify.png"
            width={40}
            height={40}
            alt="Aplify logo"
            className="mb-5 rounded-full transition-transform duration-200 hover:scale-110"
          />
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white px-3 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {buttonDetails.map((button) => (
              <button
                key={button.name}
                className="rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200"
              >
                <button.icon size={24} color="black" />
              </button>
            ))}
            {linkDetails.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={cn(
                  `rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200`,
                  link.href === pathname && "bg-[#201f23]",
                )}
              >
                <link.icon
                  size={24}
                  color={link.href === pathname ? "white" : "black"}
                />
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {endButtonDetails.map((button) => (
              <button
                key={button.name}
                className="rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200"
              >
                <button.icon size={24} color="black" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200">
            <HiOutlineLogout size={24} color="black" />
          </button>

          <div className="rounded-full shadow-lg transition-transform duration-200 hover:scale-110">
            <Image
              width={40}
              height={40}
              src={user?.image}
              className="rounded-full"
              alt="user image"
            />
          </div>
        </div>
      </aside>
    </SessionProvider>
  );
}
export default SidebarOne;
