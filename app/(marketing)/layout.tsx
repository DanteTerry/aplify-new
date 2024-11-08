import Navbar from "./_components/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <Navbar />
      {children}
    </div>
  );
}
export default layout;
