import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between border-b bg-white px-4 py-3 shadow-sm dark:border-gray-800 dark:bg-[#0A0A0A] sm:px-6 lg:px-8">
      {/* Logo */}
      <Link href="/" className="flex cursor-pointer items-center gap-2">
        <div className="rounded-md bg-black p-1 dark:bg-[#1f1f1f]">
          <Image
            src={"/logo/aplify.png"}
            alt="Taskify"
            width={33}
            height={33}
            sizes="33px"
          />
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Aplify
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={`/${link.href}`}
            className="rounded-lg px-4 py-2 text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Sign In & Sign Up Buttons */}
      <div className="ml-auto hidden items-center gap-4 md:flex">
        <Link
          href="/login"
          className="rounded-lg px-4 py-2 text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="flex items-center md:hidden">
        <button className="text-gray-700 focus:outline-none dark:text-gray-300">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
