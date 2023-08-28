import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import Footer from "@/components/Footer";
import { Providers } from "@/store/provider";


const arimo = Arimo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Explore Quran",
  description: "Explore Quran, created by Hakan Karaahmetoglu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/bismillah_icon.svg" sizes="any" />
      </head>
      <Providers>
        <body className={`flex flex-col min-h-screen  ${arimo.className}`}>
          <Navbar />
          <div className="mx-8 lg:mx-32 my-4 lg:my-12 3xl:w-2/3 3xl:mx-auto">{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
