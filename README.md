# Static EPK Website

This repository contains the source code for a static **Electronic Press Kit (EPK)** website. It’s built with modern web technologies (JavaScript/TypeScript, HTML5/CSS3) and a static site generator (e.g. Astro) to showcase an artist’s portfolio and media content in a fast, accessible way.

## Project Overview

The EPK website serves as an online press kit, featuring the artist’s biography, media (photos/videos), and other promotional content. The site is designed to be **static** (all content pre-generated), which makes it easy to host (no server needed) and very fast for end users. We emphasize **accessibility** and **responsiveness** so that the content is readable on all devices and meets WCAG 2.0 standards.

**Key Features:**

- **Responsive Design:** Layouts adjust for mobile, tablet, and desktop to ensure the EPK is easy to read on any device.  
- **Accessible Content:** We aim for full [WCAG 2.0](https://www.w3.org/TR/WCAG20/) compliance. Text content (e.g. bios) will be optimized for readability, addressing any earlier issues with poor readability on certain devices.  
- **Media Galleries:** Includes pages for featured photos and potentially video or audio embeds (performance demos, etc.), allowing curation of high-quality media. *(Note: Album pages and additional content are planned but are not the focus of this phase.)*  
- **Fast and Lightweight:** As a static site, content is delivered quickly. We also plan to serve media assets via a Content Delivery Network (CDN) or IPFS to reduce load times globally.  
- **Integration Ready:** The site can integrate with analytics (e.g. Google Analytics) and other third-party services. External links and scripts will be managed carefully to maintain privacy and performance.

## Development Setup

To set up a local development environment for the EPK site, ensure you have **Node.js (v16+ or v18+ recommended)** installed.

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/jee-mj/epk.git
   cd epk
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

Preview with:

```bash
npm run preview
```

## Deployment (GitHub Pages)

We use **GitHub Pages** with automated deployment via GitHub Actions. Built static files are pushed to the `gh-pages` branch. Pages is configured to serve from that branch. See [ProductionDeployment.md](./ProductionDeployment.md) for details.

## Asset Delivery via CDN / IPFS

Visual assets (images, video) are delivered via IPFS using the cheapest pinning provider available (NFT.storage, Web3.storage, or Pinata). See [CDN\_IPFS.md](./CDN_IPFS.md).

## Managing Integrations and Secrets

* Google Analytics and outlinks handled via GitHub Actions secrets.
* No secrets are committed.
* See related [ADR issue](https://github.com/jee-mj/epk/issues/2).

## Architecture Decisions

We document decisions in `docs/adr/`. Current ADRs:

* ADR-001: GitHub Pages for hosting.
* ADR-002: IPFS for asset delivery.

## Future Milestones

* Album content (excluded here).
* Accessibility audit.
* Expanded press/media kit.

## Contributing

Open issues or PRs. Update ADRs for architecture changes.

## License

All rights reserved © 2025