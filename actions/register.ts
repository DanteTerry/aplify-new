"use server";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/schema/schema";
import { TRegisterSchema } from "@/types/types";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const registerAction = async (values: TRegisterSchema) => {
  // validate fields with zod on the server
  const validateFields = registerSchema.safeParse(values);

  // if validation fails, return error
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  // destructure fields from validated data
  const { name, email, password } = validateFields.data;

  // hash password to store in database
  const hashedPassword = await bcrypt.hash(password, 10);

  // check if email already exists
  const existingUser = await getUserByEmail(email);

  // if email exists, return error that email already exists
  if (existingUser?.id) {
    return { error: "Email already exists" };
  }

  //if email does not exist, create user in database
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // todo send verification token email

  const verificationToken = await generateVerificationToken(email);
  // Todo send verification email
  await sendVerificationEmail(
    verificationToken?.email as string,
    verificationToken?.token as string
  );
  return { success: "Confirmation email sent!" };
};
