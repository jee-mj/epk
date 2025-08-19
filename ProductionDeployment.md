# Production Deployment Guide

This document outlines the steps to **build and deploy** the EPK static site to production using GitHub Pages.

## Prerequisites

- Node.js v16+ or v18+.  
- Push access to repo.  
- GitHub Pages set to `gh-pages` branch.

## Build Process

1. `npm install`  
2. `npm run build`  
3. `npm run preview` to test.

## Deployment Steps (GitHub Pages)

Automated via GitHub Actions:
- Push to `main` triggers build.  
- Workflow pushes `dist/` to `gh-pages`.  
- Pages publishes site.

Manual fallback: commit and push `dist/` to `gh-pages`.

## Environment Variables and Secrets

- Store secrets in GitHub Actions → Secrets.  
- Example: `GA_MEASUREMENT_ID` injected during build.  
- Outlinks follow same pattern.

## Post-Deployment Verification

- Visit Pages URL.  
- Hard refresh, check for broken assets.  
- Verify GA script loads.  
- Ensure IPFS assets resolve.

## Troubleshooting

- Check Actions logs.  
- Ensure Pages settings point to `gh-pages`.  
- Clear cache if assets stale.

## Reference: ADRs

- ADR-001: GitHub Pages for hosting.  
- ADR-002: IPFS for CDN.