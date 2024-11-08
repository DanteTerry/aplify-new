"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

function Social() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex w-full items-center gap-x-5">
      <button
        onClick={() => onClick("google")}
        className="flex w-full items-center justify-center gap-2 rounded-[7px] border border-gray-300 p-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FcGoogle className="text-lg" />
        <p className="text-sm text-black dark:text-white">
          Continue with Google
        </p>
      </button>
      <button
        onClick={() => onClick("github")}
        className="flex w-full items-center justify-center gap-2 rounded-[7px] border border-gray-300 p-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FaGithub className="text-lg text-black dark:text-white" />
        <p className="text-sm text-black dark:text-white">
          Continue with GitHub
        </p>
      </button>
    </div>
  );
}

export default Social;
