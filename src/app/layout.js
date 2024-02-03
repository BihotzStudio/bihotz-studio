import Navbar from "@/components/layout/navbar/navbar";
import { Noto_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bihotz Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={noto_sans.className}>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
