"use client";

import React, { JSX, useEffect, useState, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactCard from "../components/ContactCard";
import styles from "./AppUI.module.css";
import { faCompass } from "@fortawesome/free-regular-svg-icons/faCompass";
import Link from "next/link";

const LINKS = [
  { label: "LINKS", href: "/links" },
] as const;
const THIN = [
  { label: "ABOUT", href: "/about" },
  { label: "BHIMA", href: "/" },
  // { label: "TOURS", href: "/tours" },
] as const;
const WIDE = [
  { label: "ABOUT", href: "/about" },
  { label: "BHIMA", href: "/" },
  { label: "TOURS", href: "/tours" },
] as const;

export default function AppUI({ children }: { children: ReactNode }): JSX.Element {
  const [widescreen, setWidescreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setWidescreen(mq.matches);
    const handleChange = (e: MediaQueryListEvent) => setWidescreen(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);
  
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.ctas} aria-label="Primary">
          {widescreen ? (
            <>
              {WIDE.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </>
          ) : (
            <>
              {THIN.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}

              <span>
                
                {LINKS.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <FontAwesomeIcon icon={faCompass} title="Menu" />
                  </Link>))}
              </span>
            </>
          )}
        </nav>
        {children}
      </main>

      <footer className={styles.footer}>
        <ContactCard
          name={"Bhima Raj Bhattarai"}
          nickname={"BRB"}
          email={"bhima@bhattarai.com.au"}
          phoneNumber={61461461461}
          genre={"Modern Electronic Music"}
          location={"Sydney, Australia"}
          tagline={"Just gimme a sec..."}
          tiktok={"tiktokuser"}
          discord={"discorduser"}
          youtube={"youtubeuser"}
        />
        <p>All Rights Reserved © 2025</p>
      </footer>
    </>
  );
}
