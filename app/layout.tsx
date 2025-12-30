import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "./site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.year} ${SITE.name} | Free Estimate`,
  description: SITE.description,
  keywords: [
    "car accident settlement calculator",
    "car accident calculator",
    "pain and suffering calculator",
    "car crash settlement",
    "auto accident calculator",
    "personal injury calculator",
    "accident settlement estimator",
  ],
  openGraph: {
    title: `${SITE.year} Car Accident Settlement Calculator | Free`,
    description: "Calculate your car accident settlement value for free. Estimate medical bills, pain and suffering, and lost wages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
