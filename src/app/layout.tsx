import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import LogoImage from "./LogoImage";
import styles from "./page.module.css";
import "./globals.css";

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <main className={styles.main}>
            <nav className={styles.ctas}>
              <Link href="/about">ABOUT</Link>
              <Link href="/">MUSIC</Link>
              <Link href="/tours">TOURS</Link>
            </nav>
            {children}
          </main>
          <footer className={styles.footer}>
            <aside>
              <div>
                <h1>Bhima Raj Bhattarai</h1>
                <h3>Modern Electronic Music</h3>
                <strong>Sydney, Australia</strong>
              </div>
              <LogoImage
                className={styles.logo}
                alt="Bhima Raj Bhattarai"
                width={132}
                height={132}
              />
            </aside>
            <p>All Rights Reserved © 2025</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
