## Portico MVP – Central Documentation (GPT-5)

### 1) Project overview
- Minimal React + Vite + TypeScript app rendering a fixed-size Figma-derived UI with precise, absolute positioning inside a scaled canvas.
- Current focus: pixel-accurate visual parity with Figma; functionality minimal (e.g., ZoomBar slider state).

### 2) Tech stack
- React 19, ReactDOM 19
- Vite 7 (dev/preview), TypeScript ~5.8
- ESLint 9 (light rules); Tailwind via CDN (temporary)
- Deployed preview: Vite preview; Railway allowed host configured in `vite.config.ts`.

### 3) Dev scripts and engines
- Root `package.json`: Node >= 18, `postinstall` runs `web` workspace `npm ci`; `build` delegates to `web`; `start` builds and runs preview on `${PORT:-3000}`.
- `web/package.json`:
  - `dev`: Vite dev server (5173)
  - `preview`: Vite preview (PORT)
  - `lint`: ESLint (non-blocking)

### 4) Directory layout (key paths)
- `/web/src/App.tsx`: Composes top bars and editor canvas; absolute positions and scaling math live here.
- `/web/src/components/*`: All UI components derived from Figma nodes (Topbar, LowerTopbar, EditorBackground, CloseToolbar, LeftToolbar, Interlink, Layers, InfoButton, ZoomBar, ViewBar, FloatingToolbar, SwipeUp).
- `/web/public/topbar-assets`: SVG/PNG assets exported from Figma referenced via absolute paths like `/topbar-assets/<hash>.svg`.
- `/web/vite.config.ts`: port, preview, hosts.

### 5) Runtime layout model
- A fixed header area (Topbar 91px + LowerTopbar 34px) scaled via `ScaleContainer`; below it, a fixed editor area (`fixed left:[6px] right:[6px]`, `top: TOTAL_TOPBAR_HEIGHT + 6`, `bottom: 6`).
- Most elements in the editor area are absolutely positioned and uniformly scaled to 0.85 with `transformOrigin` to replicate Figma pixel positions.
- Spacing to the right rail is computed in `App.tsx` using simple expressions; a 0.85 scale compensation is applied for visual 10px gaps.

Additional layout primitives:
- `ScaleContainer` computes a dynamic scale based on container width; uses `ResizeObserver` and `transform: scale()` with `origin-top-left` to keep the top bars crisp on any viewport.
- Editor canvas is a fixed-position region beneath the bars; all editor widgets inside are individually scaled to 0.85 for parity.

### 6) Component notes (visual parity)
- `Topbar.tsx` and `LowerTopbar.tsx`: mirror Figma, include small separators, avatars, play/settings, breadcrumb-like labels. A manual vertical separator is used between form name and undo/redo.
- `EditorBackground.tsx`: background styling for editor surface.
- `InfoButton.tsx`: circular frosted background centered behind an info glyph; background enlarged to improve parity; placed bottom-right of editor area.
- `ZoomBar.tsx`: interactive slider with ARIA role and mouse events; controls zoom state only in-component.
- `ViewBar.tsx`: three selectable view icons; complex right icon composed to correct sizing.
- `Layers.tsx`: mirrored from Interlink, but placed top-right.
- `FloatingToolbar.tsx`: multi-group toolbar, icons placed and separated precisely; uses asset layering; z-index managed to avoid occlusion.
- `SwipeUp.tsx`: frosted pill with chevron; centered on bottom border, spacing tuned.

Behavioral components:
- `ZoomBar.tsx`: Pointer-driven slider with keyboard support. Uses a track `div` with `role="slider"`, updates `aria-valuenow` in effect, and supports Arrow keys. Internal state only (not yet lifted/connected).
- `ViewBar.tsx`: Stateless selection visuals; right icon composes two glyph layers to achieve exact size. Click handlers can be added later to lift selection state.

### 7) Styling approach
- Hybrid: Tailwind (CDN) + inline absolute styles. Tailwind CDN is a temporary helper; inline styles dominate for exact coordinates and transforms.
- Visual effects (frosted background, borders) are inline CSS. Rounded metrics are often literal Figma values (e.g., 27.867px).

Global CSS:
- `web/src/index.css` sets `html, body, #root` to full height and normalizes body background, margin 0.

### 8) Accessibility
- `ZoomBar` uses `role="slider"` and sets ARIA values. Other interactive icons are plain images/divs; full keyboard/A11y coverage is future work.

### 9) Known issues and prior fixes
- React 19 `scheduler` runtime error: fixed by adding `scheduler@0.25.0` as dependency; removed ad-hoc shims.
- Vite `createHotContext`/cache hiccups: cleared node_modules/.vite and browser cache; restart dev server.
- Git lock/bus errors: remove `.git/index.lock` and retry.
- Tailwind CDN warning in production: acknowledged; to be replaced by PostCSS Tailwind setup.

Other notes:
- Dev server occasionally killed or ports stuck; if so, free port 5173 and restart. Browser cache/Vite cache clears often resolve asset HMR oddities.

### 10) Coding conventions
- TypeScript for components; prefer explicit props and descriptive names.
- Absolute positioning retained for parity; transforms (`scale(0.85)`) with explicit `transformOrigin` for alignment.
- Asset paths use absolute `/topbar-assets/...` resolving to `/web/public/topbar-assets/...`.

### 11) Refactor plan (phased)
Phase 0 – Safety/Infra
- Lock Node/PNPM/NPM versions in docs; add `.nvmrc` (Node 18/20).
- Remove debug logs in `main.tsx` (scheduler export dump).
- Add Prettier + config; wire ESLint to CI (optional).

Phase 1 – Styling system
- Install Tailwind locally (PostCSS) and remove CDN; add `tailwind.config.{js,ts}` and `postcss.config.js`.
- Extract repeated frosted styles to utility classes/tokens (e.g., `bg-glass`, `ring-glass`).
- Introduce design tokens (CSS variables) for colors, radii, spacing, shadows.

Phase 2 – Layout abstraction
- Replace ad-hoc absolute math in `App.tsx` with named constants and helper functions; extract a right-rail layout helper to guarantee consistent gaps.
- Remove hard-coded magic numbers where possible; centralize in `constants/layout.ts` (header heights, scale, gaps).

Phase 2.5 – Component composition
- Introduce a `Glass` utility component or Tailwind classes for frosted background + border; remove repeated inline border/blur blocks.
- Create `Separator` atom with thickness/height props to replace repeated vertical line `div`s.

Phase 3 – Components API + Reusability
- Normalize icons as components (e.g., `<Icon name="…" />`) or co-locate SVGs; unify sizing/centering logic.
- Define clear props for interactive components (ZoomBar callbacks, ViewBar selection); lift state where needed.
- Add `z-index` scale and layer tokens; avoid arbitrary zIndex values.

Phase 4 – Accessibility & Semantics
- Add keyboard support to toolbars/buttons; replace non-interactive wrappers with `button` where appropriate.
- Add `aria-label` and roles; improve focus rings.

Phase 5 – Testing & Storybook
- Add Storybook for visual regression of each component.
- Add unit tests for ZoomBar behavior and ViewBar selection; smoke test rendering.

Phase 6 – Performance/Bundle
- De-duplicate assets; ensure SVGs are optimized; consider importing small SVGs as components where helpful.
- Audit re-renders, memoize static subtrees where needed.

Phase 7 – Routing/State (future)
- Introduce minimal router/state management only as required by upcoming functionality.

### 12) Operations
- Dev: `cd web && npm run dev` (5173). If Vite gets killed or stuck: kill port 5173, clear `.vite` cache, restart.
- Build: `npm run build` (root) → runs `web` build.
- Preview: `cd web && npm run preview` (PORT defaults to 3000); Railway allowed host configured in `vite.config.ts`.

Troubleshooting:
- Scheduler error: ensure `scheduler@0.25.0` installed and no custom alias. Clear `node_modules/.vite` when updating deps.
- Vite client export error: hard refresh or clear browser cache.

### 13) Open items for parity + cleanup
- Replace remaining image-layer separators with CSS-only lines if visually identical.
- Normalize all absolute sizes to tokenized constants where possible.
- Replace the remaining inline styles with Tailwind utilities after local Tailwind install.

### 14) Figma references
- Floating toolbar: node 35:397
- View bar: node 15:95
- Zoom bar: node 10:573
- Layers (top-right): node 10:446
- Swipe up: node 35:471

This document is the single source of truth for the current visual architecture and refactor roadmap. Update it alongside any structural/UI changes.


