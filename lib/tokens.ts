import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { getPasswordResetByEmail } from "@/data/passwordResetToken";
import { getVerificationTokenByEmail } from "@/data/verificationToken";

export const generateVerificationToken = async (email: string) => {
  try {
    const token = uuidv4();
    const expiresAt = new Date(new Date().getTime() + 3600 * 1000); //expires in 1 hours
    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
      await db.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const verificationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const generatePasswordResetToken = async (email: string) => {
  try {
    const token = uuidv4();
    const expiresAt = new Date(new Date().getTime() + 3600 * 1000); //expires in 1 hours
    const existingToken = await getPasswordResetByEmail(email);

    if (existingToken) {
      await db.passwordResetToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const passwordResetToken = await db.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};
