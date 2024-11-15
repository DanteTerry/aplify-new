"use client";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, FileUp } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addApplicationSchema } from "@/schema/schema";
import { TAddApplicationSchema } from "@/types/types";

function NewApplicationContent({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const [date, setDate] = useState<Date>();
  const [followUpDate, setFollowUpDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddApplicationSchema>({
    resolver: zodResolver(addApplicationSchema),
  });

  const handleContinue = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleAddApplication = async (data: TAddApplicationSchema) => {
    try {
      console.log("Form data:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="col-span-4 flex w-full flex-col items-end justify-center gap-3 rounded-lg bg-white p-5 dark:bg-[#252736]">
      <div className="w-full rounded-lg bg-white p-6 dark:bg-[#252736]">
        <form
          onSubmit={handleSubmit(handleAddApplication)}
          className="flex flex-col gap-3"
        >
          {/* step 1  */}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="jobTitle"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  placeholder="Software Engineer, Marketing Specialist"
                  className="h-10 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("jobTitle")}
                />
                {errors.jobTitle && (
                  <p className="text-sm text-red-500">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Google, Amazon"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="text-sm text-red-500">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Salary */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="salary"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Salary (Per Annum)
                </label>
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="h-10 w-[100px] rounded-md border border-gray-300 px-2 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                      <SelectItem value="AUD">AUD</SelectItem>
                      <SelectItem value="CAD">CAD</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                    type="number"
                    id="salary"
                    placeholder="$70,000 - $90,000"
                    className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                    {...register("salary")}
                  />
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <input type="checkbox" id="salary-disclosed" />
                  <label htmlFor="salary-disclosed">Salary not disclosed</label>
                </div>
              </div>

              {/* job status */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="job-status"
                  className="text-sm font-semibold text-[#3C4451] dark:text-[#E5E7EB]"
                >
                  Job Status
                </label>
                <Select>
                  <SelectTrigger className="h-10 rounded-md border border-[#d1d4d9] bg-white px-3 text-sm text-[#3C4451] dark:border-gray-500/10 dark:bg-[#2A2A3A] dark:text-white">
                    <SelectValue placeholder="Select Job Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saved">Saved</SelectItem>
                    <SelectItem value="applied">Applied</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="interview-scheduled">
                      Interview Scheduled
                    </SelectItem>
                    <SelectItem value="offered">Offered</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Applied Date */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="applied-date"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Date Applied
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-10 w-full justify-start rounded-md border bg-white px-3 text-sm font-normal text-gray-700 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100",
                        !date && "text-gray-400",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </>
          )}

          {/* step 2 */}
          {step === 2 && (
            <>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="job-type"
                  className="text-sm font-semibold text-[#3C4451] dark:text-[#E5E7EB]"
                >
                  Job Type
                </label>
                <Select>
                  <SelectTrigger className="h-10 rounded-md border border-[#d1d4d9] bg-white px-3 text-sm text-[#3C4451] dark:border-gray-500/10 dark:bg-[#2A2A3A] dark:text-white">
                    <SelectValue placeholder="Select Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Location & Country */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="San Francisco, CA"
                    className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                    {...register("location")}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="country"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="United States"
                    className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                    {...register("country")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="jobLink"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Job Posting Link
                </label>
                <input
                  type="url"
                  id="jobLink"
                  placeholder="Paste the job posting URL here"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("jobLink")}
                />
              </div>

              {/* Follow up reminder  */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="applied-date"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Next Follow-Up Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-10 w-full justify-start rounded-md border bg-white px-3 text-sm font-normal text-gray-700 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100",
                        !followUpDate && "text-gray-400",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {followUpDate ? (
                        format(followUpDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={followUpDate}
                      onSelect={setFollowUpDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-1 pb-1.5">
                <label
                  htmlFor="notes"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  placeholder="Add any notes or comments here"
                  className="max-h-16 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("notes")}
                />
              </div>
            </>
          )}

          {/* step 3 */}
          {step === 3 && (
            <>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="recruiterName"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Recruiter/Contact Name
                </label>
                <input
                  type="text"
                  id="recruiterName"
                  placeholder="Enter the recruiter or contact name"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("recruiterName")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contactEmail"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="Enter the contact email"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("contactEmail")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contactPhone"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  placeholder="Enter the contact phone number"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("contactPhone")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter the company address"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("address")}
                />
              </div>
              <div className="flex flex-col gap-1 pb-6">
                <label
                  htmlFor="linkedinProfile"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedinProfile"
                  placeholder="Enter the LinkedIn profile URL"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("linkedinProfile")}
                />
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="portfolio"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Portfolio/Website
                </label>
                <input
                  type="text"
                  id="portfolio"
                  placeholder="https://portfolio.com/username"
                  className="h-10 rounded-md border border-gray-300 px-3 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("portfolio")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="resume"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Upload Resume
                </label>

                <input
                  type="file"
                  id="resume-upload"
                  name="resume-upload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log(file.name);
                      // Handle file upload logic here
                    }
                  }}
                />
                <label
                  htmlFor="resume-upload"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100 dark:hover:bg-gray-700"
                >
                  <FileUp size={18} /> Upload File
                </label>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="cover-letter-upload"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Cover Letter
                </label>

                <input
                  type="file"
                  id="cover-letter-upload"
                  name="cover-letter-upload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log(file.name);
                      // Handle file upload logic here
                    }
                  }}
                />
                <label
                  htmlFor="cover-letter-upload"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100 dark:hover:bg-gray-700"
                >
                  <FileUp size={18} /> Upload File
                </label>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="other-files-upload"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Other Files
                </label>

                <input
                  type="file"
                  id="other-files-upload"
                  name="other-files-upload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log(file.name);
                      // Handle file upload logic here
                    }
                  }}
                />
                <label
                  htmlFor="other-files-upload"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100 dark:hover:bg-gray-700"
                >
                  <FileUp size={18} /> Upload File
                </label>
              </div>
              <div className="flex flex-col gap-1 pb-2">
                <label
                  htmlFor="documentNotes"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Notes
                </label>
                <textarea
                  id="documentNotes"
                  placeholder="Add any notes or comments here"
                  className="h-16 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#2A2A3A] dark:text-gray-100"
                  {...register("documentNotes")}
                />
              </div>
            </>
          )}
        </form>
      </div>

      <div className="flex items-center gap-2 pb-4">
        <Button
          onClick={handleBack}
          disabled={step <= 1}
          className="h-10 w-24 rounded-md bg-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          Back
        </Button>
        {step < 4 ? (
          <Button
            onClick={handleContinue}
            className="h-10 w-24 rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-md"
          >
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            className="h-10 w-24 rounded-md bg-green-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-600 hover:shadow-md"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
export default NewApplicationContent;
