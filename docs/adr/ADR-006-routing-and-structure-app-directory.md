# ADR-006: Routing & Structure — `app/` Directory (App Router)

## Status
Accepted

## Context
We want a clear mental model for page composition, shared layouts, and metadata—while keeping pages portable for static hosting.

## Decision
Use **App Router** with the **`app/` directory** for routes, layouts, and metadata.

## Rationale
- **Colocation**: Route, layout, and metadata live together; easier to reason about.
- **Static generation by default**: Ideal for GitHub Pages deployments.
- **Layouts**: Shared shells (nav, footer, typography) across EPK sections.
- **Incremental growth**: New routes/pages are trivial to add.

## Consequences
- Clear conventions for future contributors.
- Server/client component split available but used minimally for static output.

## References
- Issue #2 (Architecture) — records directory strategy with the App Router.