import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchSidebar() {
  return (
    <div className="relative">
      <Input
        placeholder="Search"
        className="rounded-md border bg-[#F8F8F8] pl-10 pr-4 text-gray-700 focus:outline-none focus-visible:ring-0"
      />
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"
      />
    </div>
  );
}
export default SearchSidebar;
