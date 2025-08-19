# ADR-009: Dependency & Tooling Policy — Minimal, Pages-Friendly Stack

## Status
Accepted

## Context
The site is hosted on GitHub Pages intended with assets via IPFS. We want minimal runtime dependencies and a build that’s reproducible and easy to audit.

## Decision
Favor **framework-native tooling** (Next.js + TS + ESLint) and avoid heavy runtime/client deps unless they materially improve the EPK.

## Rationale
- **Lower risk**: Fewer packages → fewer security updates and breakages.
- **Faster builds**: Clean CI publishing to `gh-pages`.
- **Auditability**: Easier to review for a public, press-facing site.
- **Focus**: Spend complexity budget on content, accessibility, and CDN.

## Consequences
- Larger UI libraries or state managers are deferred until there’s a concrete need.
- Any new dependency must justify bundle impact and maintenance cost in a future ADR.

## References
- Issue #2 (Architecture) — codifies “minimal by default” for the stack.
