import MainSidebar from "./_components/MainSidebar";
import MainTopBar from "./_components/MainTopbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex w-full">
      <MainSidebar />
      <section className="w-full bg-[#F8F8F8] md:pl-60">
        <MainTopBar />
        {children}
      </section>
    </main>
  );
}
export default MainLayout;
