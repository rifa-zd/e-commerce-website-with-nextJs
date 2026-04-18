import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Roboto } from 'next/font/google'
import "./globals.css";

import { Rosarivo, Pattaya } from 'next/font/google'
import Navbar from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Required for Poppins
  variable: '--font-poppins',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify weights for Roboto
  variable: '--font-roboto',
  display: 'swap',
});

const rosarivo = Rosarivo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rosarivo',
})

const pattaya = Pattaya({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pattaya',
})

// ${poppins.variable} ${roboto.variable}

export const metadata: Metadata = {
  title: "Aiza - ecommerce site",
  description: "A women-oriented ecommerce build: for woman of all age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {/* <header>Aiza</header>
        <footer> A footer Inc. All rights reserved</footer> */}
        {children}</body>
    </html>
  );
}
