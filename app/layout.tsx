import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Knewave, Inter } from 'next/font/google'
import "./globals.css";

import Navbar from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const knewave = Knewave({
  variable: "--font-knewave",
  subsets: ["latin"],
  weight: ["400"]
});


// ${poppins.variable} ${roboto.variable}

export const metadata: Metadata = {
  title: "Aiza - ecommerce site",
  description: "A women-oriented ecommerce: for woman of all age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${knewave.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        
        {children}</body>
    </html>
  );
}
