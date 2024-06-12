import Navbar from "@/components/layout/navbar/navbar";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

const foundersGrotesk = localFont({
  variable: "--font-founders-grotesk",
  src: [
    {
      path: "./fonts/FoundersGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/FoundersGrotesk-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/FoundersGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/FoundersGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-RegularItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/FoundersGrotesk-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-SemiboldItalic.woff",
      weight: "600",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "Bihotz Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={foundersGrotesk.className}>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
