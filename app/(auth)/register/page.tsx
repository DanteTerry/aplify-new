import Link from "next/link";
import Image from "next/image";
import RegisterForm from "../_components/RegisterForm";
import AuthWrapper from "../_components/AuthWrapper";
import CardWrapper from "../_components/CardWrapper";

function Register() {
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
        secondLabel="Create an account to manage your job applications efficiently."
        showSocial
        backButtonHref="/login"
        backButtonLabel="Already have an account? Login here"
        headerLabel="Join Aplify Today"
      >
        <RegisterForm />
      </CardWrapper>
    </AuthWrapper>
  );
}
export default Register;
