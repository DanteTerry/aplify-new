import Link from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <header className="flex w-full flex-col items-center gap-6 px-4 md:gap-8 md:px-8">
      {/* Discord join link */}
      <div className="group w-max rounded-full transition-all duration-500 hover:bg-[#5865f2]">
        <div className="z-50">
          <Link
            target="_blank"
            href={"https://discord.gg/CWkJ7BTt"}
            className="z-50 flex -translate-y-[3px] translate-x-[2px] items-center gap-2 rounded-full border bg-white p-2 px-4 text-sm font-medium text-[#474747] transition-all duration-500 hover:text-[#6872EA] dark:border-[#1f1f1f] dark:bg-[#1f1f1f] dark:text-white dark:hover:border-[#6872EA] md:text-base"
          >
            <FaDiscord size={16} color="#5865f2" />{" "}
            <span className="text-sm">Join our Discord community</span>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>

      {/* Main heading section */}
      <div className="flex flex-col items-center text-center">
        {/* Large Text */}
        <h1 className="text-3xl font-extrabold text-[#b3b3b3] dark:text-[#6c6c6c] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Manage Your Career with
        </h1>

        <div className="mt-0 md:mt-2">
          {/* Highlighted heading */}
          <h1 className="flex flex-col items-center gap-2 text-[36px] font-extrabold text-[#141414] dark:text-white sm:flex-row sm:text-4xl md:gap-3 md:text-5xl lg:text-7xl">
            Job Application Manager <span className="hidden sm:block">💼</span>
          </h1>
        </div>

        {/* Description text */}
        <p className="text-lg font-medium text-[#818181] dark:text-[#c7c7c7] sm:text-xl md:mt-4 md:text-2xl lg:text-3xl">
          Streamline your job search process and keep track of your applications
          with our <br className="hidden sm:block" /> efficient management tool.
        </p>

        {/* Buttons for Get Started and Learn More */}
        <div className="mt-6 flex flex-row flex-wrap gap-6 md:mt-10 md:gap-10">
          {/* Get Started Button */}
          <div className="group flex w-max cursor-pointer rounded-[8px] border-2 border-black transition-all duration-500 dark:border-white">
            <Link
              href="/register"
              className="-translate-y-[6px] translate-x-[6px] rounded-[8px] bg-[#141414] px-4 py-2 text-base text-white transition-all duration-300 hover:shadow-lg group-hover:-translate-y-[3px] group-hover:translate-x-[3px] dark:bg-white dark:text-black sm:px-5 sm:py-2 sm:text-lg md:px-6 md:py-3 md:text-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Learn More Button */}
          <div className="group flex w-max cursor-pointer rounded-[8px] border-2 border-black transition-all duration-500 dark:border-white">
            <Link
              href="/learn-more"
              className="-translate-y-[6px] translate-x-[6px] rounded-[8px] border-2 border-black bg-white px-4 py-2 text-base text-black transition-all duration-300 hover:shadow-lg group-hover:-translate-y-[3px] group-hover:translate-x-[3px] dark:border-white dark:bg-black dark:text-white sm:px-5 sm:py-2 sm:text-lg md:px-6 md:py-3 md:text-lg"
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
