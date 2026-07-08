# Web

## Overview

Vite + React + TypeScript SPA explaining the June 2026 draft planBTV New North End plan. All content is a typed static data module (`src/data/plan.ts`) sourced from `website-content-sources.md` — no backend calls. Built bundle (`dist/`) is served by `apps/api` in production.

## Commands

- `bun run build` - Typecheck (`tsc --noEmit`) then `vite build` to `dist/`
- `bun run dev` - Vite dev server with HMR (or `bun run dev:web` from repo root)
- `bun run typecheck` - `tsc --noEmit`
- `bun run test` - Data-module tests (vitest)
- `bun run lint` - `eslint src --fix`
- `bun run preview` - Preview the production build

## Structure

- `src/data/plan.ts` - All plan content, typed, with page citations. Edit content here.
- `src/sections.ts` - Page section registry (drives nav + scrollspy)
- `src/components/` - One component per page section + `CorridorNav` (scrollspy spine nav)
- `src/styles.css` - All styling; design tokens in `:root`

## Design notes

- Signature element: "corridor spine" nav — sections as stops along a stylized North Avenue line
- Fonts bundled via @fontsource: Overpass (display), Public Sans (body), Overpass Mono (codes/citations)
- Chart palette validated for CVD/contrast: `#0E68A8` (NNE) vs `#3F7A44` (rest of city)
- Max content honesty: every claim carries a draft-plan page citation; community concerns shown alongside support

## Dependencies

<!-- AUTO-GENERATED - DO NOT EDIT -->

- **react / react-dom** (^19) - UI
- **@fontsource/overpass, public-sans, overpass-mono** - bundled fonts
- **vite + @vitejs/plugin-react** (dev) - build tooling

## Auto-Update Instructions

After changes to files in this directory, run `/update-claude-md`.
