import Image from "next/image";
import Link from "next/link";

const ErrorCard = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-teal-300 via-blue-300 to-purple-400 p-4 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-indigo-800 dark:to-blue-900">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
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
          Oops! Something went wrong!
        </p>
        <Link
          href="/login"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ErrorCard;
