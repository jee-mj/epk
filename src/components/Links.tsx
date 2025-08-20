"use client";

import Link from "next/link";
import React from "react";

type LinksProps = {
  onItemClick?: () => void;
};

const ITEMS = [
  { label: "ABOUT", href: "/about" },
  { label: "MUSIC", href: "/" },
  { label: "TOURS", href: "/tours" },
] as const;

export default function Links({ onItemClick }: LinksProps) {
  return (
    <nav aria-label="Site menu" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {ITEMS.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          onClick={onItemClick}
          style={{ textDecoration: "none", fontWeight: 600 }}
        >
          {it.label}
        </Link>
      ))}
    </nav>
  );
}
