import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { chivo } from "@/lib/fonts";
import AllProviders from "@/providers/AllProviders";
import LocomotiveScroll from "@/components/utils/LocomotiveScroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocomotiveScroll>
          <AllProviders>{children}</AllProviders>
        </LocomotiveScroll>
      </body>
    </html>
  );
}
