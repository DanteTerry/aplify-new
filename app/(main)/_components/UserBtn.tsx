import { auth, signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

async function UserBtn() {
  const session = await auth();

  if (!session?.user) return null;
  const { user } = session;

  return (
    <div className="w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-10 w-full items-center justify-between whitespace-nowrap rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none">
          <div className="flex items-center gap-3">
            <Image
              height={24}
              width={24}
              src={user.image || "/userAvatar/avatar.jpg"}
              alt="User avatar"
              className="rounded-full"
            />
            <span className="text-[12.5px]">{user.name}</span>
          </div>
          <ChevronsUpDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          <DropdownMenuLabel className="w-full px-4 py-2 text-sm font-medium text-gray-500">
            {user.email}
          </DropdownMenuLabel>
          <DropdownMenuItem disabled className="px-0 py-0">
            <Separator className="my-1" />
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <form
              className="w-full"
              action={async () => {
                "use server";
                await signOut({
                  redirectTo: "/login",
                });
              }}
            >
              <button className="w-full text-left" type="submit">
                Sign Out
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export default UserBtn;
