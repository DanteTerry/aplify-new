import { signOut } from "@/auth";

function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#F8F8F8]">
      <h2 className="text-2xl font-semibold">Welcome to Aplify!</h2>
      <p className="mt-2 text-center text-lg text-gray-600">
        We&apos;re glad to have you here. Explore the features and start
        building your projects efficiently.
      </p>

      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/login",
          });
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

export default DashboardPage;
