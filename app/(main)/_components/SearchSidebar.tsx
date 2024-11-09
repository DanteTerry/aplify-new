import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

function SearchSidebar({ className }: { className?: string }) {
  return (
    <div className={cn(`relative`, className)}>
      <Input
        placeholder="Search"
        className="rounded-md border pl-10 pr-4 text-gray-700 focus:outline-none focus-visible:ring-0"
      />
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"
      />
    </div>
  );
}
export default SearchSidebar;
