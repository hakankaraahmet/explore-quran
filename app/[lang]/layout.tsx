import "./globals.css";
import Navbar from "../../components/partials/Navbar";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Footer from "../../components/partials/Footer";
import { Locale, i18n } from "../../i18n.config";
import { getDictionary } from "../../utils/dictionaries";

//FONT
const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

//METADATA
export const metadata: Metadata = {
  title: "Explore Quran",
  description: "Explore Quran, created by Hakan Karaahmetoglu",
};

//TRANSLATIONS
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const languages = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/images/bismillah_icon.svg" />
      </head>
      <body
        className={`flex relative flex-col min-h-screen bg-primary_color  ${rubik.className}`}
      >
        <Navbar languages={languages.navigation} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
