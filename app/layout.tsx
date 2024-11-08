import type { Metadata } from "next";
import "./globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aplify - A job application manager",
  description:
    "Aplify - The ultimate job application manager to streamline your job search and boost your career prospects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${gabarito.className} -z-50 antialiased dark:bg-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}
