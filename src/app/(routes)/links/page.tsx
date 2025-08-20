import styles from "../default.page.module.css";
import Link from "next/link";

const MENU_ITEMS = ["About", "Music", "Tours", "Media"] as const;

// If "Music" is your homepage, keep this map. Otherwise change to "/music".
const ROUTE_MAP: Record<(typeof MENU_ITEMS)[number], string> = {
  About: "/about",
  _: "",
  Music: "/music",
  _: "",
  Tours: "/tours",
  _: "",
  Media: "/media",
};

export default function Links() {
  return (
    <nav aria-label="Links" className={styles.pageContent}>
      {MENU_ITEMS.map((label) => (
        <Link key={label} href={ROUTE_MAP[label]}>
          {label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
