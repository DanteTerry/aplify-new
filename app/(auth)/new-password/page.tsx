import { Suspense } from "react";
import NewPasswordForm from "../_components/NewPasswordForm";

function NewPassword() {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
}
export default NewPassword;
