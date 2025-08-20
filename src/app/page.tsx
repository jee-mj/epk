"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import background from "../assets/background.jpg";
import photo from "../assets/photo.jpg";

const MENU = [
  { label: "ABOUT", href: "/about" },
  { label: "MUSIC", href: "/" },
  // { label: "TOURS", href: "/tours" },
] as const;


export default function Home() {
  return (
    <section className= {styles.viewport}>
      <div className={styles.homeStyle}>
        <p>भीम <br/>राज <br/>भट्टराई</p>
      </div>
      <div className={styles.homeBackground}>
        <Image
          alt=""
          fill 
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }} 
          className={styles.backgroundImage}
          src={background}
        />
      </div>
      <div className={styles.pageContent}>
      <section>
        <h2>when his frontal lobe went, the Buddha barred the RICKSHAW!!1</h2>
        </section>
    </div>
      <div className={styles.homeHero}>
        <Image
          alt=""
          priority
          sizes="100vw"
          style={{ width: "100%", objectFit: "cover", objectPosition: "center" }} 
          src={photo}
        />
      </div>
    </section>
  );
} 