import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanmay Grandhisiri - Personal Website",
  description: "Welcome to my personal website",
  icons: {
    icon: [
      {
        url: '/logo.svg',
        href: '/logo.svg',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
