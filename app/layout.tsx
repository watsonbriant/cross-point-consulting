import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./ascend.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-disp",
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cross Point Consulting — Charlotte, NC",
  description:
    "A Charlotte-based B2B client acquisition team. We build careers from the ground up and promote 100% from within.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
