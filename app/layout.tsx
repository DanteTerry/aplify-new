import type { Metadata } from "next";
import "./globals.css";
import { Gabarito, Inter } from "next/font/google";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className="h-full">
      <body
        className={` ${gabarito.className} ${inter.variable} -z-50 h-full antialiased dark:bg-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}
