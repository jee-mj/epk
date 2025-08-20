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
  const widescreen = false; // set to switch automatically at 350px
  return (
    <section className= {styles.viewport}>
      <div className={styles.homeStyle}>
        <p>भीम <br/>राज <br/>भट्टराई</p>
      </div>
      <div className={styles.homeBackground}>
        <Image
          alt=""
          fill                // makes the image absolutely fill the parent
          priority           // optional: preload hero
          sizes="100vw"      // correct responsive sizing
          style={{ objectFit: "cover", objectPosition: "center" }} 
          className={styles.backgroundImage}
          src={background}
        />
      </div>
      <div className={styles.pageContent}>
      <section>
        <h2>when his frontal lobe went, the Buddha barred the RICKSHAW!!</h2>
        </section>
    </div>
      <div className={styles.homeHero}>
        <Image
          alt=""
          priority           // optional: preload hero
          sizes="100vw"      // correct responsive sizing
          style={{ objectFit: "cover", objectPosition: "center" }} 
          src={photo}
        />
      </div>
    </section>
  );
} 