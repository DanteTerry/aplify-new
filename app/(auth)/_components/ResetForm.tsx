"use client";
import { resetSchema } from "@/schema/schema";
import { TResetSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { useState } from "react";
import { reset } from "@/actions/reset";

function ResetForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<TResetSchema>({ resolver: zodResolver(resetSchema) });

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onPasswordReset = async (value: TResetSchema) => {
    const data = await reset(value);
    setError(data.error);
    setSuccess(data.success);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-teal-300 via-blue-300 to-purple-400 p-4 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-indigo-800 dark:to-blue-900">
      <div className="flex min-w-96 flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-max">
            <Link href={"/"} className="w-max">
              <div className="rounded-md bg-black px-2 py-2 dark:bg-[#1f1f1f]">
                <Image
                  src={"/logo/aplify.png"}
                  alt="Taskify"
                  width={25}
                  height={25}
                />
              </div>{" "}
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Aplify
          </h1>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Forgot your password?
        </p>
        <form onSubmit={handleSubmit(onPasswordReset)} className="w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <div className="flex w-full flex-col">
              <input
                id="email"
                type="email"
                className="rounded-[7px] border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
                placeholder="Enter your email"
                aria-label="Email"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="mt-2 text-xs text-red-700 dark:text-red-300">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />

            <button
              disabled={isSubmitting}
              type="submit"
              className="flex items-center justify-center rounded-[7px] bg-gray-800 p-2 text-white hover:bg-gray-900 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              {isSubmitting ? (
                <Loader className="animate-spin" size={25} />
              ) : (
                "Send Reset Email"
              )}
            </button>
          </div>
        </form>
        <Link href="/login" className="rounded-[8px] px-4">
          Back to login
        </Link>
      </div>
    </div>
  );
}
export default ResetForm;
