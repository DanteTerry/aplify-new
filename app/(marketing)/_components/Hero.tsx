import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <header className="flex w-full flex-col items-center gap-8 px-6 py-12 md:gap-10 md:px-12 lg:py-16">
      {/* Discord join link */}
      <div className="group w-max rounded-full bg-gradient-to-r from-[#5865f2] to-[#6872EA] p-[2px] transition-all duration-500 hover:shadow-lg">
        <Link
          target="_blank"
          href="https://discord.gg/CWkJ7BTt"
          className="flex items-center gap-2 rounded-full bg-white p-2 px-4 text-sm font-medium text-[#474747] transition-all duration-500 hover:text-white dark:bg-[#1f1f1f] dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#5865f2] dark:hover:to-[#6872EA] md:text-base"
        >
          <FaDiscord size={16} color="#5865f2" />
          <span>Join our Discord community</span>
          <MdKeyboardArrowRight />
        </Link>
      </div>

      {/* Main heading section */}
      <div className="flex flex-col items-center text-center">
        {/* Large Text */}
        <h1 className="bg-gradient-to-r from-[#b3b3b3] to-[#6c6c6c] bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Manage Your Career with
        </h1>

        <div className="mt-2 md:mt-4">
          {/* Highlighted heading */}
          <h1 className="flex flex-col items-center gap-2 bg-gradient-to-r from-[#141414] to-[#000000] bg-clip-text text-[36px] font-extrabold text-transparent dark:from-white dark:to-gray-300 sm:flex-row sm:text-4xl md:gap-3 md:text-5xl lg:text-7xl">
            Job Application Manager <span className="hidden sm:block">💼</span>
          </h1>
        </div>

        {/* Description text */}
        <p className="mt-4 text-lg font-medium text-[#818181] dark:text-[#c7c7c7] sm:text-xl md:mt-6 md:text-2xl lg:text-3xl">
          Streamline your job search process and keep track of your applications
          with our <br className="hidden sm:block" /> efficient management tool.
        </p>

        {/* Buttons for Get Started and Learn More */}
        <div className="mt-8 flex flex-row flex-wrap gap-6 md:mt-12 md:gap-10">
          {/* Get Started Button */}
          <div className="group flex w-max cursor-pointer rounded-lg bg-gradient-to-r from-[#141414] to-[#000000] p-[2px] transition-all duration-500 hover:shadow-lg dark:from-white dark:to-gray-300">
            <Link
              href="/register"
              className="flex items-center justify-center rounded-lg bg-[#141414] px-6 py-3 text-base text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5865f2] hover:to-[#6872EA] dark:bg-white dark:text-black sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Learn More Button */}
          <div className="group flex w-max cursor-pointer rounded-lg bg-gradient-to-r from-[#ffffff] to-[#f0f0f0] p-[2px] transition-all duration-500 hover:shadow-lg dark:from-black dark:to-gray-800">
            <Link
              href="/learn-more"
              className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base text-black transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5865f2] hover:to-[#6872EA] dark:bg-black dark:text-white sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
