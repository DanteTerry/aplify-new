import MainSidebar from "./_components/MainSidebar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex w-full">
      <MainSidebar />
      <section className="h-screen w-full pl-60">{children}</section>
    </main>
  );
}
export default MainLayout;
