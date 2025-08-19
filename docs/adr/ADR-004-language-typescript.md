# ADR-004: Language — TypeScript

## Status
Accepted

## Context
We need strong correctness guarantees and editor tooling for a small codebase that will be maintained intermittently, where defects (e.g., broken links, props) can slip in easily and bugs can appear from a variety of sources.

## Decision
Use **TypeScript** across the codebase.

## Rationale
- **Type safety** guarantees that code is compliant to its explicit type definition, ensuring code coverage.
- **Static types** improve confidence in refactors and content/schema changes.
- **DX**: Autocomplete and IntelliSense speed up iteration on components/pages.
- **Gradual typing**: Any can be incrementally tightened as the EPK grows.
- **Ecosystem**: Next.js and tooling provide first-class TS support.

## Consequences
- Slight learning/compile overhead in exchange for far fewer runtime surprises.
- Enforces conventions (strict props, typed configs) that improve maintainability.

## References
- Issue #2 (Architecture) — codifies TypeScript as a baseline.
