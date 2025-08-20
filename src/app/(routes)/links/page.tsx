import styles from "../default.page.module.css";
import Link from "next/link";

const MENU_ITEMS = ["About", "Music", "Tours", "Media"] as const;

// If "Music" is your homepage, keep this map. Otherwise change to "/music".
const ROUTE_MAP: Record<(typeof MENU_ITEMS)[number], string> = {
  About: "/about",
  Music: "/music",
  Tours: "/tours",
  Media: "/media",
};

export default function Links() {
  return (
    <nav aria-label="Links" className={styles.pageContent} style={{ backgroundColor: 'var(--foreground)' }})}>
      {MENU_ITEMS.map((label) => (
        <Link key={label} href={ROUTE_MAP[label]} className={styles.pageLink}>
          <br/>
          {label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
