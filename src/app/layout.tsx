import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wajeh Al Howari",
  description: "Portfolio for Flutter projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistRoboto.variable} antialiased
          w-[98%] sm:w-[90%] lg:w-[80%] mx-auto
          `}
      >
        <div className="bg-mainColor px-[1.7rem] lg:px-[4.8rem]"  id='up'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
