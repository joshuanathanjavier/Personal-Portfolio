import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Joshua Nathan Javier's Portfolio",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  height: "device-height",
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
        <Background />
        </div>
        <div>
        <Navbar />
        </div>
        {children}
        <div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
