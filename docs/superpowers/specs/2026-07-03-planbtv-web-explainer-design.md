# planBTV New North End — Draft Plan Explainer Web App

**Date:** 2026-07-03
**Status:** Implemented autonomously (user requested build directly; interactive approval gates skipped)

## Purpose

A resident-facing single-page web app that explains the June 2026 draft *planBTV New North End* neighborhood plan. Content is sourced exclusively from `website-content-sources.md` (itself extracted from the 219-page draft PDF). The page's job: let a New North End resident understand, in one sitting, what the plan proposes, what changes for them, and what happens next — honestly, including community concerns.

## Architecture

- **`apps/web/`** — Vite + React + TypeScript SPA. No backend calls; all content is a typed static data module (`src/data/plan.ts`). Builds to `apps/web/dist`. Carries the four mandatory workspace scripts (`build`, `typecheck`, `test`, `lint`) per `apps/CLAUDE.md`; `build` runs `tsc --noEmit && vite build` because `tsc` alone cannot bundle a Vite app (typecheck coverage is preserved).
- **`apps/api/`** — existing Express server gains static serving of the web build: `express.static(WEB_DIST_PATH)` plus an SPA fallback for non-`/api` GET requests. `WEB_DIST_PATH` env var overrides the default relative path (`../../web/dist` from the api entrypoint), which resolves correctly in both dev (`tsx src/main.ts`) and compiled (`dist/main.js`) modes. The Dockerfile builds the web app in the builder stage and copies `apps/web/dist` next to the compiled binary, setting `WEB_DIST_PATH=/app/web-dist`.
- **Monorepo fit:** per the repo philosophy apps are thin; the web app is pure presentation of static content, no business logic. Root gains `dev:web`.

## Design direction

**Subject grounding:** the plan's core fact is that the neighborhood "funnels nearly all trips onto a single corridor — North Avenue." The design is built around that.

- **Signature element — the corridor spine:** desktop navigation is a vertical stylized "North Avenue" line with stops; each stop is a section of the page (Overview → Today → Vision → Focus Areas → Your Street → Improvements → Parks → Implementation). Scrollspy highlights the current stop. On mobile the spine collapses to a sticky chip bar.
- **Type:** display **Overpass** (open-source face derived from Highway Gothic, the US road-signage alphabet — deliberate: this is a plan about a road); body **Public Sans** (the US federal civic typeface); **Overpass Mono** for action codes (M1, UD3, P4…), page citations, and figures — styled as route badges.
- **Palette** (no cream/terracotta default): `paper #F4F7F3` (birch white), `ink #182720` (spruce), `lake #23617F` (Champlain blue, primary), `meadow #3F7A44` (parks green), `signal #B57E14` (goldenrod, Quick Win / caution highlights), `stone #5C6B63` (muted text). Chart series colors validated with the dataviz palette validator.
- **Structure encodes content:** category badges (Mobility / TDM / Greenway / Urban Design / Placemaking) reuse the plan's own action-code system; "What neighbors said" is always a two-column support/concerns treatment — the honesty feature.
- **Motion:** restrained — scrollspy, card expand/collapse, subtle section reveals; `prefers-reduced-motion` respected.

## Sections & interactivity

1. **Hero** — plan name, vision statement, draft-status note, corridor motif; headline stat tiles (7,000 units by 2050 · 835 DU + 279k SF across 5 focus areas · ~10,500 residents · ~350 acres of parks).
2. **The NNE Today** — demographic/mode-share facts with one small comparison chart (NNE vs rest of Burlington: population growth, drive-to-work share, over-65 share).
3. **Vision** — vision quote, 15-minute-neighborhood concept, six guiding principles, three frameworks.
4. **Development locations** — interactive explorer: 5 focus-area cards (click to expand: numbers, key features, Option 2 where applicable, "what neighbors said" support/concerns) + 5 secondary sites in a compact list + the six-typology "Kit of Parts."
5. **What changes on your street** — resident-impact accordion: zoning, traffic/parking/roundabouts, affordability/aging-in-place, services & utilities, plus "what happens first" (studies before construction).
6. **Improvements** — North Ave redesign (preferred cross-section, 5 phases with timeframes), three intersection transformations, bike/walk network, transit, TDM programs.
7. **Parks & green spaces** — per-park impact cards (Greenway, Leddy, Ethan Allen, Starr Farm, Arms Forest/Rock Point, etc.), UD3 replacement safeguard callout, new green spaces created.
8. **Implementation** — filterable action table (category, timeframe, Quick Win) built from the ~40 actions identifiable in the source summary, with an honest note that the full plan lists 44 and that "implementation is not guaranteed."

## Data flow & error handling

Static typed data → React components; no network, no state beyond UI state (active section, expanded cards, filters). Build-time typechecking is the data validation. API keeps `/health` and `/api/*` JSON endpoints; unknown non-API GETs serve `index.html`; if the web build is missing the API responds 503 on `/` with a hint to run the build.

## Testing

- Data-module unit test (vitest): action codes unique, categories/timeframes valid, focus areas complete — runs in the workspace `test` script.
- Existing repo verification: `bun run build && bun run typecheck && bun --filter web test && bun --filter web lint`, plus visual review of the running app.
