"use client";

import { TLoginSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { loginSchema } from "@/schema/schema";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { loginAction } from "@/actions/login";

function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const params = useSearchParams();

  const urlError =
    params.get("error") === "OAuthAccountNotLinked"
      ? "Email is already in use with a different provider"
      : undefined;

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });

  const onLogin = async (data: TLoginSchema) => {
    setError("");
    setSuccess("");
    const loginResponse = await loginAction(data);
    setError(loginResponse?.error);
    setSuccess(loginResponse?.success);
  };

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-xl border bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800"
    >
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
            className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
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
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Password
        </label>
        <div className="flex w-full flex-col">
          <input
            type="password"
            id="password"
            className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
            placeholder="Enter your password"
            aria-label="Password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="mt-2 text-xs text-red-700 dark:text-red-300">
              {errors.password?.message}
            </p>
          )}
        </div>
        <Link href="/reset" className="w-max text-sm">
          Forgot password?
        </Link>
      </div>
      <FormError message={error || urlError} />
      <FormSuccess message={success} />
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex items-center justify-center rounded-[7px] bg-gray-800 p-2 text-white hover:bg-gray-900 dark:bg-blue-500 dark:hover:bg-blue-400"
      >
        {isSubmitting ? <Loader className="animate-spin" size={25} /> : "Login"}
      </button>
    </form>
  );
}
export default LoginForm;
