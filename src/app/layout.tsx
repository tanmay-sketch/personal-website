import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Tanmay Grandhisiri",
  description:
    "Computational Data Science at Michigan State. Machine learning, systems, and the occasional paper about football.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
  openGraph: {
    title: "Tanmay Grandhisiri",
    description:
      "Computational Data Science at Michigan State. Machine learning, systems, and the occasional paper about football.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-bg text-fg min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
