"use client";
import { buttonDetails, endButtonDetails, linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";

// sidebar button details
const SidebarButton = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <button className="flex w-full items-center gap-3 rounded-lg p-3 px-4 text-gray-500 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg">
    <Icon size={20} />
    <span>{name}</span>
  </button>
);

// sidebar link details
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
      "flex w-full items-center gap-3 rounded-lg p-3 px-4 text-gray-500 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg",
      isActive &&
        "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg",
    )}
  >
    <Icon size={20} />
    <span>{name}</span>
  </Link>
);

// sidebar second component
function SidebarSecond() {
  const pathName = usePathname();

  return (
    <aside className="fixed flex h-screen w-64 flex-col gap-5 bg-gradient-to-b from-gray-900 to-gray-800 p-6 shadow-2xl">
      <div className="flex items-center gap-3">
        <Image
          src="/logo/amplify.png"
          alt="logo"
          width={40}
          height={40}
          className="animate-spin-slow"
        />
        <h3 className="text-2xl font-bold text-white">Amplify</h3>
      </div>
      <div className="mt-6 flex flex-col gap-4">
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
      <div className="mt-auto flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-xl">
        <div className="flex items-center justify-center rounded-full border-4 border-gray-800 bg-white p-4 shadow-md">
          <FaLocationArrow size={20} className="animate-bounce text-blue-500" />
        </div>
        <button className="rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-600">
          Download the Amplify App
        </button>
      </div>
    </aside>
  );
}

export default SidebarSecond;
