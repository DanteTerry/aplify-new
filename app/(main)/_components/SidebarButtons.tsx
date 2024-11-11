"use client";
import { Button } from "@/components/ui/button";
import SearchSidebar from "./SearchSidebar";
import { buttonDetails } from "@/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function SidebarButtons() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2 flex w-full flex-col gap-2 px-4 py-2 xl:py-3">
      <SearchSidebar />
      <div className="flex flex-col gap-1">
        {buttonDetails.map((button, index) => (
          <Button
            key={index}
            onClick={() => setOpen(true)}
            size="sm"
            variant="ghost"
            className="justify-start text-gray-600 hover:text-gray-900"
          >
            <button.icon size={18} className="mr-2" />
            <span className="text-sm font-medium">{button.name}</span>
          </Button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default SidebarButtons;
