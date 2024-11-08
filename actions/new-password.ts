"use server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { newPasswordSchema } from "@/schema/schema";
import { TNewPasswordSchema } from "@/types/types";
import { getPasswordResetByToken } from "@/data/passwordResetToken";
import { getUserByEmail } from "@/data/user";

export const newPassword = async (
  token: string | null,
  values: TNewPasswordSchema,
) => {
  if (!token) return { error: "Missing token" };

  const validateFields = newPasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { password } = validateFields.data;

  const existingToken = await getPasswordResetByToken(token);

  if (!existingToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date() > new Date(existingToken?.expiresAt);

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser || !existingUser.email) {
    return { error: "Email does not exist" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated" };
};
