"use client";

import { registerAction } from "@/actions/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schema/schema";
import { TRegisterSchema } from "@/types/types";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

function RegisterForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema) });
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onRegister = async (data: TRegisterSchema) => {
    const registerResponse = await registerAction(data);
    setError(registerResponse.error);
    setSuccess(registerResponse.success);
    if (success) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onRegister)}
      className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-xl border bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <div className="flex w-full flex-col">
          <input
            id="name"
            type="text"
            className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
            placeholder="Enter your name"
            aria-label="Name"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="mt-2 text-xs text-red-700 dark:text-red-300">
              {errors.name?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
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
      <div className="flex flex-col gap-1">
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
          "Create an account"
        )}
      </button>
    </form>
  );
}

export default RegisterForm;
