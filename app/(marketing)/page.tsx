import ThemeToggleButton from "@/components/reuseable/ThemeToggleButton";
import Hero from "./_components/Hero";

function Home() {
  return (
    <div className="flex h-screen w-full bg-white pt-24 text-black dark:bg-[#0A0A0A] dark:text-white">
      <Hero />
    </div>
  );
}
export default Home;
