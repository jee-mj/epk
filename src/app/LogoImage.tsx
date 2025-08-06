"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoImageProps {
  className?: string;
  alt: string;
  width: number;
  height: number;
}

export default function LogoImage({ className, alt, width, height }: LogoImageProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Image
      className={className}
      src={isDarkMode ? "/logo-red.svg" : "/logo-light.svg"}
      alt={alt}
      width={width}
      height={height}
    />
  );
}