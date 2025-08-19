"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import LogoRed from "../assets/logo-red.svg";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";

interface LogoImageProps {
  className?: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => onStoreChange();
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}

function getSnapshot() {
  if (typeof window === "undefined") return false; // SSR = light
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function LogoImage({
  className,
  alt,
  width,
  height,
  priority,
}: LogoImageProps) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);

  return (
    isDark ? <LogoRed /> : <LogoLight />
  );
}
