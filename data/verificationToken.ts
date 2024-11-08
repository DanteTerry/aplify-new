import { db } from "@/lib/db";

// function to get verification token by email
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verifiedToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verifiedToken;
  } catch (error) {
    return null;
  }
};

// function to get verification token by token
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verifiedToken = await db.verificationToken.findFirst({
      where: {
        token,
      },
    });
    return verifiedToken;
  } catch (error) {
    return null;
  }
};
