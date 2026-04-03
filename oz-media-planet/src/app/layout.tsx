import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OZ Media Planet – Lead Generation, Sales & Customer Support USA",
  description:
    "OZ Media Planet helps US businesses scale with high-quality lead generation, sales conversion, and 24/7 customer support. Trusted by businesses across the USA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
