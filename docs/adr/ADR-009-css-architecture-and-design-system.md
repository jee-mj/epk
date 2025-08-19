# ADR-009: CSS Architecture & Design System — Tokens, App Design, Page Modules

## Status

**Accepted — Refactor In Progress**

## Context

We currently ship a custom design embedded in a virtual page within the app. Global styles are intentionally lightweight and mostly hold design constants.

**As-Is**

* `src/app/globals.css` — minimal resets and design tokens (custom properties).
* App-level design (layout scaffolding, persistent UI chrome) lives inside the app’s virtual page.
* Route styling is mixed: some page-local styles, some app-level concerns bleed into routes.

This creates **technical debt**: app design concerns aren’t separated into their own stylesheet, making reuse, testing, and changes riskier than necessary.

## Decision

Refactor to a three-layer CSS architecture:

1. **Tokens & Base** — `src/app/globals.css`

   * Keep light. Contains resets, `:root` tokens (color, type, space, radius, shadow, breakpoints), and base element defaults only.
   * No component or layout classes.

2. **App Design (App Shell)** — `src/app/app-shell.css`

   * New file that owns site-wide composition: grid, page chrome, header/footer, nav, containers, page gutters, global layout utilities, typography scales and rhythm mappings derived from tokens.
   * No route-specific overrides.

3. **Page Modules** — `src/app/**/page.module.css`

   * Route-specific composition/refinements.
   * No globals, no cross-route leakage.

All new styling must either:

* Extend token values in `globals.css`, or
* Live in `app-shell.css` if it’s truly app-wide, or
* Live in the relevant `*.module.css` for route-local needs.

Utility frameworks (Tailwind, Bootstrap) and CSS-in-JS remain **out of scope** unless a future ADR supersedes this.

## Rationale

* **Separation of concerns:** Tokens vs. app shell vs. per-route styles clarifies ownership and reduces accidental coupling.
* **Predictability & performance:** Small, cacheable stylesheets align with static export (GitHub Pages/CDN).
* **Isolation:** CSS Modules prevent cross-route regressions; app shell codifies shared layout once.
* **Accessibility by default:** Base element rules and token-level constraints (line-height/contrast/focus) apply consistently.
* **Maintainability:** Clear layering shortens onboarding time and reduces “where does this go?” thrash.

## Consequences

* **Explicit placement discipline:** Contributors must decide “token vs. shell vs. module” for each change.
* **Initial refactor cost:** Extracting app design from the virtual page into `app-shell.css` requires targeted edits.
* **Theming via tokens:** Dark mode and themes flow through `:root` tokens, not per-class overrides.

## Non-Goals

* Introducing CSS-in-JS, runtime theming, or utility-first frameworks.
* Server-driven or per-request CSS variants (static export target).

## Implementation Notes

* `globals.css`: keep free of any component/layout classes; tokens + element defaults only.
* `app-shell.css`: owns app-wide layout primitives (wrappers, grid, spacing system), persistent UI, and typographic scale mappings using `clamp()` and token-derived steps.
* `*.module.css`: only route-local classes and compositions.
* Respect `prefers-reduced-motion`; constrain transitions to `opacity` and `transform`.
* Enforce WCAG 2.0 AA contrast at the **token** level.
* Naming guidance:

  * App shell file: **`app-shell.css`** (chosen for clarity and searchability).
  * Route modules: **`page.module.css`** per route (existing convention).

## File Structure (to-be)

```
src/
  app/
    app-shell.css          # new: app-wide layout & chrome
    globals.css            # tokens + base only
    page.module.css        # root route module (if needed)
    about/
      page.module.css
    epk/
      page.module.css
    ...
```

## Migration Plan

1. **Create `src/app/app-shell.css`.**
2. Move app-wide styles out of the virtual page and into `app-shell.css`:

   * Layout wrappers, grid, header/footer/nav, containers, spacing utilities.
   * Typographic scale utilities that map token scales to actual classes.
3. Trim `globals.css` to tokens + base elements; remove component/layout rules.
4. For each route, ensure styles live in that route’s `page.module.css`.
5. Update imports:

   * Ensure `globals.css` loads once globally.
   * Import `app-shell.css` at the app entry (or `layout.tsx`) so it’s present for all routes.
6. Lint/CI: add a style check that prevents component/layout classes in `globals.css`.

## Acceptance Criteria

* No component or layout classes remain in `globals.css`.
* All app-wide design concerns exist in `app-shell.css`.
* Each route compiles without relying on cross-route or global component classes.
* Visual regressions limited to expected changes from normalization; snapshots updated accordingly.

## References

* `src/app/globals.css` — tokens & base (post-refactor).
* `src/app/app-shell.css` — app design (new).
* `src/app/**/page.module.css` — route composition.
* Issue #2 (Architecture) — CSS approach owned within ADRs.
