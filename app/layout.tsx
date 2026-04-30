import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Knewave, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AppContextProvider } from "@/context/AppContext";

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
  weight: ["400"],
});

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

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
      // className={`${outfit.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

 {/* each componenet will be rendered inside here
//     now for each component we can access context */}

        <AppContextProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
