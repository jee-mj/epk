# ADR-005: Linting & Code Quality — ESLint (flat config)

## Status
Accepted

## Context
Consistency and basic accessibility checks are needed for a production-facing EPK. We also want idiomatic Next.js/React rules and TypeScript-aware linting.

## Decision
Adopt **ESLint** with the **flat config** (`eslint.config.mjs`).

## Rationale
- **Single-source config**: The flat model simplifies shareable rules and overrides.
- **Type-aware rules** reduce common TS/React mistakes.
- **Next.js presets**: Aligns with framework best practices out of the box.
- **Fast feedback**: CI-ready and easy to run locally.

## Consequences
- Contributors follow a consistent style, reducing review time and regressions.
- Lint warnings inform accessibility/semantic HTML improvements early.

## References
- Issue #2 (Architecture) — linting/quality owned alongside ADRs.