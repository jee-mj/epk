# ADR-003: Web Framework — Next.js (App Router) with React

## Status
Accepted

## Context
We need a production-ready framework for a static EPK with fast routing, image/asset optimizations, SEO primitives, and frictionless static export to GitHub Pages.

## Decision
Adopt **Next.js (App Router) with React** as the application framework.

## Rationale
- **Static-first**: Supports static generation for a CDN/Pages workflow.
- **SEO & metadata**: Built-in metadata APIs and head management.
- **Image/fonts**: Next/Image and next/font (Geist) reduce CLS and improve performance.
- **File-based routing**: `app/` directory simplifies page composition and layouts.
- **TypeScript-native**: First-class TS support across pages, configs, and components.

## Consequences
- We align with a well-documented, fast-evolving ecosystem.
- App Router conventions guide project structure and server/client boundaries.
- Some advanced features (e.g., dynamic server rendering) are available but out-of-scope for a static EPK.

## References
- Issue #2 (Architecture) — tracks framework selection and Pages integration.
