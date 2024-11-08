"use client";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { newVerification } from "@/actions/new-verification";

function NewVerificationForm() {
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    if (success || error) return;
    if (!token) {
      setError("Token does not exists");
      return;
    }

    const data = await newVerification(token);
    setError(data.error);
    setSuccess(data.success);
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-teal-300 via-blue-300 to-purple-400 p-4 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-indigo-800 dark:to-blue-900">
      <div className="flex transform flex-col items-center justify-center gap-4 rounded-xl bg-white p-10 shadow-2xl transition-all dark:bg-gray-800">
        <div className="flex items-center gap-4">
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
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Aplify
          </h1>
        </div>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          Confirming your email address
        </p>

        <div className="flex w-full items-center justify-center">
          {!success && !error && (
            <Loader color="#1e40af" className="animate-spin" size={50} />
          )}
          <FormSuccess message={success} />
          {!success && <FormError message={error} />}{" "}
        </div>
        <Link
          href="/sign-in"
          className="text-md mt-2 rounded-[8px] bg-blue-500 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default NewVerificationForm;
