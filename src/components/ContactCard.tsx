"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoImage from "./LogoImage";
import styles from "./contact-card.module.css";
import { faTiktok, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

interface ContactCardProps {
    name: string;
    genre: string;
    location: string;
    tiktok: string;
    discord: string;
    youtube: string;
}

export default function ContactCard({name, genre, location, tiktok, discord, youtube}: ContactCardProps) {

    const toUrl = (val?: string, kind?: "tiktok" | "discord" | "youtube" | "soundcloud") => {
      if (!val) return undefined;
      if (val.startsWith("http://") || val.startsWith("https://")) return val;
      if (kind === "tiktok") return `https://www.tiktok.com/@${val.replace(/^@/, "")}`;
      if (kind === "youtube") return `https://www.youtube.com/${val}`;
      if (kind === "soundcloud") return `https://www.soundcloud.com/${val}`;
      return val;
    };
    const tiktokUrl = toUrl(tiktok, "tiktok");
    const discordUrl = toUrl(discord, "soundcloud");
    const youtubeUrl = toUrl(youtube, "youtube");

    return (
        <aside className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.cardFront}>
                  <h1>{name}</h1>
                  <h3>{genre}</h3>
                  <strong>{location}</strong>
                </div>
                <div className={styles.cardBack}>
                    <nav className={styles.cardBack__wrapper} aria-label="Social links">
                      {tiktokUrl && ( 
                        <span>
                        <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialIcon} >
                          <FontAwesomeIcon icon={faTiktok}/>
                        </a></span>
                      )}
                      {discordUrl && (
                        <span>
                        <a href={discordUrl} target="_blank" rel="noopener noreferrer" aria-label="Discord" className={styles.socialIcon} >
                          <FontAwesomeIcon icon={faDiscord}/>
                        </a></span>
                      )}
                      {youtubeUrl && (
                        <span>
                        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon} >
                          <FontAwesomeIcon icon={faYoutube}/>
                        </a></span>
                      )}
                    </nav>
                </div>
                <LogoImage
                  alt={name}
                  width={132}
                  height={132}
                  className={styles.logo}
                />
            </div>
        </aside>
    );
}
