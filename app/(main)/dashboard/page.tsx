import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
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
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}

export default DashboardPage;
