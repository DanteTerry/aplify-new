"use client";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";

function SidebarSecond() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <aside className="fixed flex h-screen w-60 flex-col gap-5 bg-[#1f1e30] px-5 py-4">
      <div className="flex items-center justify-start gap-2 px-4">
        <Image src={"/logo/aplify.png"} alt="logo" width={40} height={40} />
        <h3 className="ml-2 text-2xl font-bold text-white">Aplify</h3>
      </div>
      <div className="flex flex-col items-start gap-2.5">
        {buttonDetails.map((button) => (
          <button
            key={button.name}
            className="flex w-full items-center gap-2 rounded-full p-2 px-3 text-[#8f8f9a]"
          >
            <button.icon size={20} color="white" />
            {button.name}
          </button>
        ))}

        {linkDetails.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={cn(
              `flex w-full items-center gap-2 rounded-xl p-2 px-3 text-[#8f8f9a]`,
              pathName === link.href && "bg-[#d8f275] text-black",
            )}
          >
            <link.icon
              size={20}
              color={link.href === pathName ? "black" : "white"}
            />
            {link.name}
          </Link>
        ))}

        {endButtonDetails.map((button) => (
          <button
            key={button.name}
            className="flex w-full items-center gap-2 rounded-full p-2 px-3 text-[#8f8f9a]"
          >
            <button.icon size={20} color="white" />
            {button.name}
          </button>
        ))}
      </div>

      <div className="relative mt-auto flex h-28 w-full items-end justify-center rounded-xl bg-[#d8f275] pb-3">
        <div className="absolute -top-4 flex items-center justify-center rounded-full border-[4px] border-[#1f1e30] bg-white p-3">
          <FaLocationArrow size={20} color="black" />
        </div>

        <div className="mt-2 flex flex-col items-center justify-center gap-2">
          <button className="rounded-full bg-[#1f1e30] px-2 py-1 text-sm font-semibold text-white">
            Download the Aplify App
          </button>
        </div>
      </div>
    </aside>
  );
}
export default SidebarSecond;
