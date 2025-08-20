// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../lib/fontAwesome";
import AppUI from "../components/AppUI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhima Raj Bhattarai | Modern Electronic Music",
  description: "Electronic music artist from Sydney, Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mobile-first: false by default (mobile view shows the compass).
  // You can later replace this with a real media query signal in a client component.


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <AppUI>{children}</AppUI>
        </div>
      </body>
    </html>
  );
}
