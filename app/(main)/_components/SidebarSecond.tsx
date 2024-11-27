"use client";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";

const SidebarButton = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <button className="flex w-full items-center gap-3 rounded-full p-3 px-4 text-[#8f8f9a] transition-all duration-300 hover:bg-[#2c2b3e] hover:text-white hover:shadow-lg">
    <Icon size={20} color="white" />
    {name}
  </button>
);

const SidebarLink = ({
  icon: Icon,
  name,
  href,
  isActive,
}: {
  icon: any;
  name: string;
  href: string;
  isActive: boolean;
}) => (
  <Link
    href={href}
    className={cn(
      `flex w-full items-center gap-3 rounded-xl p-3 px-4 text-[#8f8f9a] transition-all duration-300 hover:bg-[#d8f275] hover:text-black hover:shadow-lg`,
      isActive && "bg-[#d8f275] text-black shadow-lg",
    )}
  >
    <Icon size={20} color={isActive ? "black" : "white"} />
    {name}
  </Link>
);

function SidebarSecond() {
  const pathName = usePathname();

  return (
    <aside className="fixed flex h-screen w-64 flex-col gap-5 bg-gradient-to-b from-[#1f1e30] to-[#2c2b3e] px-6 py-6 shadow-2xl">
      <div className="flex items-center justify-start gap-3 px-4">
        <Image src={"/logo/amplify.png"} alt="logo" width={40} height={40} />
        <h3 className="ml-2 text-2xl font-bold text-white">Amplify</h3>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        {buttonDetails.map((button) => (
          <SidebarButton
            key={button.name}
            icon={button.icon}
            name={button.name}
          />
        ))}

        {linkDetails.map((link) => (
          <SidebarLink
            key={link.name}
            icon={link.icon}
            name={link.name}
            href={link.href}
            isActive={pathName === link.href}
          />
        ))}

        {endButtonDetails.map((button) => (
          <SidebarButton
            key={button.name}
            icon={button.icon}
            name={button.name}
          />
        ))}
      </div>

      <div className="relative mt-auto flex h-32 w-full items-end justify-center rounded-xl bg-[#d8f275] pb-4 shadow-2xl">
        <div className="absolute -top-5 flex items-center justify-center rounded-full border-[4px] border-[#1f1e30] bg-white p-4 shadow-md">
          <FaLocationArrow size={20} color="black" />
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-3">
          <button className="rounded-full bg-[#1f1e30] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2c2b3e] hover:shadow-lg">
            Download the Amplify App
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SidebarSecond;
