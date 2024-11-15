import MainSidebar from "./_components/MainSidebar";
import MainTopBar from "./_components/MainTopbar";
import SidebarOne from "./_components/SidebarOne";
import SidebarSecond from "./_components/SidebarSecond";
import SidebarThird from "./_components/SidebarThird";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex h-full w-full">
      {/* <SidebarOne /> */}
      {/* <MainSidebar /> */}
      {/* <SidebarSecond /> */}
      <SidebarThird />

      {/* normal sidbear section */}
      <section className="h-full w-full bg-[#EAE9E3] dark:bg-[#15161A]">
        {/* <MainTopBar /> */}
        {children}
      </section>
    </main>
  );
}
export default MainLayout;
