import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-white transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-md dark:from-blue-400 dark:to-indigo-500 dark:hover:from-blue-500 dark:hover:to-indigo-600"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none dark:text-gray-300"
          aria-label="Toggle mobile menu"
        >
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

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-16 bg-white shadow-lg transition-transform duration-300 dark:bg-[#0A0A0A] md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-4 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`/${link.href}`}
              className="w-full rounded-lg px-4 py-2 text-center text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/login"
            className="w-full rounded-lg px-4 py-2 text-center text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-center text-white transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-md dark:from-blue-400 dark:to-indigo-500 dark:hover:from-blue-500 dark:hover:to-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
