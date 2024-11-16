"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Check,
  CircleDashed,
  CirclePlus,
  CircleUser,
  FileSliders,
  ListCollapse,
} from "lucide-react";
import NewApplicationContent from "./NewApplicationContent";

function NewApplication({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const iconColor = isDarkMode ? "#818cf8" : "#4f46e5";
  const [step, setStep] = useState(1);

  return (
    <DialogContent className="max-w-4xl rounded-lg shadow-md">
      <div className="grid grid-cols-6 gap-x-4">
        {/* Sidebar */}
        <div className="col-span-2 h-full rounded-lg p-4">
          <DialogHeader className="flex h-full flex-col justify-between gap-3">
            <div className="flex flex-col gap-3">
              <DialogTitle className="flex items-center gap-2 text-xl text-black dark:text-white">
                <CirclePlus size={20} /> New Application
              </DialogTitle>
              <DialogDescription className="pr-2 text-justify tracking-tight text-[#3C4451] dark:text-[#E5E7EB]">
                Enter key details of your job application, including position,
                company, and status for improved tracking and organization.
              </DialogDescription>

              <div className="mt-3 flex flex-col gap-2 pr-2">
                {[
                  { label: "Job Basic Details", icon: ListCollapse },
                  { label: "Additional Details", icon: CircleDashed },
                  { label: "Contact Information", icon: CircleUser },
                  { label: "Application Documents", icon: FileSliders },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all duration-300",
                      step === index + 1
                        ? "bg-[#e2e8f0] text-[#3C4451] dark:bg-[#2a2a3a] dark:text-[#8f8f9a]"
                        : "text-[#3C4451] dark:text-[#8f8f9a]",
                      "text-sm font-medium",
                    )}
                  >
                    <div className="flex gap-3">
                      <item.icon size={20} color={iconColor} />
                      <span>{item.label}</span>
                    </div>
                    {step > index + 1 && <Check color="#22c55e" size={15} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <p className="text-sm text-[#3C4451] dark:text-[#E5E7EB]">
                Step {step} of 4
              </p>
              <Progress
                max={4}
                value={step}
                className="h-1 bg-[#d1d5db] dark:bg-[#2a2a3a]"
                color={isDarkMode ? "bg-[#818cf8]" : "bg-[#4f46e5]"}
              />
            </div>
          </DialogHeader>
        </div>

        {/* Main Content */}
        <div className="col-span-4 flex w-full flex-col items-end justify-center gap-3 rounded-lg bg-white p-5 dark:bg-[#252736]">
          <div className="w-full rounded-lg bg-white p-6 dark:bg-[#252736]">
            <NewApplicationContent step={step} setStep={setStep} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default NewApplication;
