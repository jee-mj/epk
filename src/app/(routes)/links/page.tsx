import styles from "../default.page.module.css";
import Link from "next/link";

const MENU_ITEMS = ["About", "Music", "Tours"] as const;

// If "Music" is your homepage, keep this map. Otherwise change to "/music".
const ROUTE_MAP: Record<(typeof MENU_ITEMS)[number], string> = {
  About: "/about",
  Music: "/music",
  Tours: "/tours",
};

export default function Menu() {
  return (
    <nav aria-label="Main">
      {MENU_ITEMS.map((label) => (
        <Link key={label} href={ROUTE_MAP[label]}>
          {label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
