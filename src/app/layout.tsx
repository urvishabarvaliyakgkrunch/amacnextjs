// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Lato, Manrope, Mulish } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import "./globals.css";

const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
// Inter is only used by the header dropdown items on the live site
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// Lato is used by the home hero eyebrow ("Serving East Cork Farmers Since 2006") on the live site
const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "AMAC Farm Supplies",
  description: "Farm Supplies, Feed & Practical Advice from a Local Team",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${manrope.variable} ${inter.variable} ${lato.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative flex min-h-full flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
