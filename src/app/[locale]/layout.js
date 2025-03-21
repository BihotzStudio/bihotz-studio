import Navbar from "@/components/layout/navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getTranslations } from "@/utils/getTranslations";

import "./globals.css";

const foundersGrotesk = localFont({
  variable: "--font-founders-grotesk",
  src: [
    {
      path: "../../../public/fonts/FoundersGrotesk-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
});

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "ca" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations(locale, "Home");

  return {
    title: t.seoTitle,
    keywords: t.seoKeywords,
    metadataBase: new URL("https://www.bihotz-studio.com"),
    alternates: {
      canonical: locale,
      languages: {
        en: "/en",
        es: "/es",
        ca: "/ca",
      },
    },
    openGraph: {
      images: "/opengraph-image.png",
    },
    authors: [{ name: "Bihotz Studio" }],
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    creator: "Bihotz Studio",
    publisher: "Bihotz Studio",
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const t = await getTranslations(locale, "Header");

  return (
    <html lang={locale}>
      <body className={foundersGrotesk.className}>
        <Navbar locale={locale} t={t} />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
