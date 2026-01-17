import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Bizneel - Premium Natural Cosmetics",
    template: "%s | Bizneel",
  },
  description:
    "Discover premium cosmetics crafted with nature's finest ingredients. Vegan, cruelty-free, and sustainably made for radiant, healthy skin.",
  keywords: [
    "cosmetics",
    "skincare",
    "vegan beauty",
    "cruelty-free",
    "natural ingredients",
    "premium skincare",
  ],
  authors: [{ name: "Bizneel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizneel.com",
    siteName: "Bizneel",
    title: "Bizneel - Premium Natural Cosmetics",
    description:
      "Discover premium cosmetics crafted with nature's finest ingredients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
