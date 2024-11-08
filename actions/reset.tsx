"use server";
import { resetSchema } from "@/schema/schema";
import { TResetSchema } from "@/types/types";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";
import { getUserByEmail } from "@/data/user";

export const reset = async (value: TResetSchema) => {
  const validatedFields = resetSchema.safeParse(value);

  if (!validatedFields?.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found" };
  }
  const token = await generatePasswordResetToken(email);

  if (!token) {
    return { error: "Error generating token" };
  }

  await sendPasswordResetEmail(token.email, token.token);

  return { success: "Reset email sent" };
};
