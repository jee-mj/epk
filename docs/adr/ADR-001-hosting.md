# ADR-001: Hosting Strategy

## Status
Accepted

## Context
We needed to decide how to host the static EPK website for production. Options included GitHub Pages, Netlify, Vercel, AWS S3 + CloudFront, or other static hosting providers. Cost, ease of deployment, and integration with our workflow were primary considerations.

## Decision
We chose **GitHub Pages** as the hosting platform.

## Rationale
- Free for public repositories.  
- Direct integration with GitHub repository.  
- Easy to automate deployment using GitHub Actions.  
- Supports custom domains.  
- Sufficient performance for a static EPK site.  

## Consequences
- Reliance on GitHub’s infrastructure and Pages uptime.  
- Bandwidth limited by GitHub’s policies.  
- Larger assets (images, video) should be hosted elsewhere (hence ADR-002).  
- Simplified team workflow since everything is GitHub-native.

