# ADR-010: CI/CD — GitHub Actions → `gh-pages`

## Status
Accepted

## Context
We need a deterministic, zero-secret-in-repo deployment path to GitHub Pages, including optional build-time injection of analytics IDs or outlink tokens.

## Decision
Use **GitHub Actions** to build on `main` and publish the static `dist/` output to the **`gh-pages`** branch.

## Rationale
- **Native to GitHub**: Simple permissions, good logs, easy rollbacks.
- **Secrets management**: GA/outlink tokens via Actions secrets.
- **Immutability**: Each deploy is a distinct commit on `gh-pages`.
- **Developer UX**: “Push to deploy,” with previewable PR builds if needed.

## Consequences
- Pages caching nuances; we mitigate with hashed assets and hard refresh guidance.
- If we add preview/staging, we’ll extend the workflow with environments.

## References
- Issue #2 (Architecture) — ADRs + CI ownership.
- Issue #1 (Poor readability) — CI enforces lint/build checks that catch regressions.
