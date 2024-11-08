import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.LOCAL_URL}/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Please verify your email address",
    html: `
      <p>Hi there! Please click the link below to verify your email address.</p>
      <a href="${confirmLink}">Verify email address</a>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.LOCAL_URL}/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
      <p>Hi there! Please click the link below to reset your password.</p>
      <a href="${resetLink}">Reset password</a>
    `,
  });
};
