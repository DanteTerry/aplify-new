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
      <aside className="fixed flex h-screen w-24 flex-col items-center justify-between bg-[#EAE9E3] py-5">
        <div>
          <Image
            src="/logo/aplify.png"
            width={40}
            height={40}
            alt="Aplify logo"
          />
        </div>

        <div className="flex flex-col justify-between gap-2 rounded-full bg-white px-2 py-4">
          <div className="flex flex-col gap-2">
            {buttonDetails.map((button) => (
              <button key={button.name} className="rounded-full p-2">
                <button.icon size={20} color="black" />
              </button>
            ))}
            {linkDetails.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={cn(
                  `rounded-full p-2`,
                  link.href === pathname && "bg-[#201f23]",
                )}
              >
                <link.icon
                  size={20}
                  color={link.href === pathname ? "white" : "black"}
                />
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2">
            {endButtonDetails.map((button) => (
              <button key={button.name} className="rounded-full p-2">
                <button.icon size={20} color="black" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="rounded-full p-2">
            <HiOutlineLogout size={20} color="black" />
          </button>

          <div className="rounded-full">
            <Image
              width={35}
              height={35}
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
