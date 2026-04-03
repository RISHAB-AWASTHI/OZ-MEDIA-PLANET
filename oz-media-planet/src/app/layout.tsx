import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OZ Media Planet – Lead Generation, Sales & Customer Support USA",
  description:
    "OZ Media Planet helps US businesses scale with high-quality lead generation, sales conversion, and 24/7 customer support. Trusted by businesses across the USA.",
  metadataBase: new URL("https://ozmediaplanet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OZ Media Planet – Lead Generation, Sales & Customer Support USA",
    description:
      "OZ Media Planet helps US businesses scale with high-quality lead generation, sales conversion, and 24/7 customer support. Trusted by businesses across the USA.",
    url: "https://ozmediaplanet.com",
    siteName: "OZ Media Planet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZ Media Planet – Lead Generation, Sales & Customer Support USA",
    description:
      "OZ Media Planet helps US businesses scale with high-quality lead generation, sales conversion, and 24/7 customer support. Trusted by businesses across the USA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
