import Link from "next/link";
import AuthWrapper from "../_components/AuthWrapper";
import Image from "next/image";
import CardWrapper from "../_components/CardWrapper";
import LoginForm from "../_components/LoginForm";
import { Suspense } from "react";

function LoginPage() {
  return (
    <AuthWrapper>
      <div className="w-max">
        <Link href={"/"} className="w-max">
          <div className="rounded-md bg-black px-2 py-2 dark:bg-[#1f1f1f]">
            <Image
              src={"/logo/aplify.png"}
              alt="Taskify"
              width={25}
              height={25}
            />
          </div>{" "}
        </Link>
      </div>
      <CardWrapper
        secondLabel="Enter your credentials to manage job applications."
        showSocial
        backButtonHref="/register"
        backButtonLabel="Don't have an account? Register here."
        headerLabel="Welcome back to Aplify"
      >
        <Suspense>
          <LoginForm />
        </Suspense>
      </CardWrapper>
    </AuthWrapper>
  );
}

export default LoginPage;
