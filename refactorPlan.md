## Refactor Plan and Progress

This document tracks the refactor roadmap and ongoing progress. It will be updated as changes land.

### Goals
- Stabilize the codebase with strong formatting, linting, and type safety.
- Protect pixel-accurate visual parity during migrations.
- Establish scalable conventions (tokens, layout helpers, component APIs).

### Phases

#### Phase 0 — Infra baseline
- [ ] Add `.editorconfig` and Prettier config; wire root scripts for `format` and `format:check`.
- [ ] Integrate Prettier with ESLint (disable conflicting rules).
- [ ] Add Husky + lint-staged pre-commit (format, lint, typecheck fast-path).
- [ ] Add commitlint (Conventional Commits) commit-msg hook.
- [ ] Add `.nvmrc` (Node 20 LTS) and `.npmrc` (`save-exact=true`).
- [ ] Add path aliases (`@components`, `@styles`, `@constants`) in TS + Vite.
- [ ] Add app-level error boundary; remove `main.tsx` debug logs.

Deliverables: Green `npm run build`, lint clean, pre-commit hooks enforced.

#### Phase 1 — Visual safety nets
- [ ] Storybook scaffolding with stories for all key components.
- [ ] Visual regression snapshots (Chromatic or Playwright screenshots) to lock parity.

#### Phase 2 — Styling system migration
- [ ] Install Tailwind (PostCSS) locally; remove CDN.
- [ ] Introduce tokens (`styles/tokens.css`).
- [ ] Implement `Glass` and `Separator` utilities and adopt across components.

#### Phase 3 — Layout abstraction
- [ ] Extract `constants/layout.ts` and helpers; remove magic numbers.

#### Phase 4 — Component APIs and Accessibility
- [ ] Normalize component props and events (ZoomBar callbacks, ViewBar selection).
- [ ] Convert interactive elements to semantic controls; add labels/focus.
- [ ] Add `eslint-plugin-jsx-a11y` and fix violations.

#### Phase 5 — TypeScript strict uplift
- [ ] Incrementally enable stricter TS flags; eliminate `any` in public APIs.

#### Phase 6 — Tests and performance
- [ ] Vitest + RTL unit tests; Playwright for key interactions.
- [ ] Memoize static subtrees; add size budgets (size-limit) and bundle visualizer.

#### Phase 7 — CI/CD and ops
- [ ] CI with install cache, build, lint, typecheck, tests, visual diffs, size-limit, audit.
- [ ] PR previews.

### Current Status

Date: 2025-08-20

- Phase 0: In progress
  - [x] Added `.editorconfig`, Prettier config; adjusted to preserve current spacing.
  - [x] Integrated Prettier with ESLint via `eslint-config-prettier` (no format enforcement in lint).
  - [x] Added Husky, lint-staged, commitlint; initialized hooks.
  - [x] Added `.nvmrc` (20) and `.npmrc` (`save-exact=true`).
  - [x] Added path aliases in TS + Vite.
  - [x] Added `ErrorBoundary` and removed debug logs from `main.tsx`.
  - [x] Scripts: `format`, `format:check`, `lint`, `typecheck` wired at root and web.
  - [x] Lint clean, typecheck clean, production build succeeds.
  - [ ] Commit hook smoke (on first commit push).
- Phase 1: In progress
  - [x] Storybook installed and configured (Vite builder).
  - [x] Static assets served from `public/`; global CSS loaded.
  - [x] Stories added for Topbar, LowerTopbar, FloatingToolbar, ZoomBar, ViewBar, InfoButton, Layers, SwipeUp.
  - [x] Storybook build successful.
  - [x] Test runner (Playwright) added and executed; all suites passing; a11y warnings present.
- Phase 2: Not started
- Phase 3: Not started
- Phase 4: Not started
- Phase 5: Not started
- Phase 6: Not started
- Phase 7: Not started

### Notes and Decisions
- Path aliases will be non-breaking initially; import updates will be gradual.
- Visual regression tooling precedes large styling migrations to protect parity.
- Commit conventions and pre-commit hooks enforce hygiene from the start.


