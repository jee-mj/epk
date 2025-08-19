import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- Required for GitHub Pages static export under /epk ---
  output: "export",
  basePath: "/epk",
  images: { unoptimized: true },

  // --- SVGR: make `import Logo from './logo.svg'` a React component ---
  webpack: (config) => {
    // Exclude .svg from Next's default asset handling
    const fileLoaderRule = config.module.rules.find(
      // @ts-expect-error: loose typing in Next's internals
      (rule) => rule && rule.test && rule.test.test && rule.test.test(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
