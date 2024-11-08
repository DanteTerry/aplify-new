"use server";
import { db } from "@/lib/db";
import { getVerificationTokenByToken } from "@/data/verificationToken";
import { getUserByEmail } from "@/data/user";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Token does not exists",
    };
  }

  const isTokenExpired = new Date(existingToken.expiresAt) < new Date();

  if (isTokenExpired) {
    return {
      error: "Token is expired",
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return {
      error: "Email does not exists",
    };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return {
    success: "Email verified",
  };
};
