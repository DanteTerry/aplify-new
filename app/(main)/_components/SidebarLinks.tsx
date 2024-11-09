"use client";
import { Button } from "@/components/ui/button";
import { linkDetails } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarLinks() {
  const pathname = usePathname();
  return (
    <div className="mt-2 flex w-full flex-col gap-1 px-4 py-2 xl:py-3">
      {linkDetails.map((link, index) => (
        <Button
          asChild
          key={index}
          size="sm"
          variant="ghost"
          className={cn(
            `justify-start text-gray-600 hover:text-gray-900`,
            link.href === pathname ? "bg-accent text-gray-900" : "",
          )}
        >
          <Link href={link.href}>
            <link.icon size={18} className="mr-2" />
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
export default SidebarLinks;
