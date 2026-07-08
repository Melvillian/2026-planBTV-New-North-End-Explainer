# API

## Overview

Express HTTP API server. Part of the monorepo workspace. Also serves the built `apps/web` SPA: `express.static` + SPA fallback for non-API GETs. Web bundle path defaults to `../../web/dist` (works in dev and compiled modes); override with `WEB_DIST_PATH` if the bundle lives elsewhere (the Docker image copies the whole built tree, so the default path works there too). If the bundle is missing, `/` returns 503 with a build hint. JSON endpoints: `/health`, `/api/info`.

## Commands

- `bun run build` - Compile TypeScript (`tsc`)
- `bun run start` - Run compiled server (`node dist/main.js`)
- `bun run dev` - Dev mode with watch (`tsx watch src/main.ts`)
- `bun run start:docker` - Build and run via Docker

## Dependencies

<!-- AUTO-GENERATED - DO NOT EDIT -->

- **express** (^4.18.2) - HTTP server framework

## Auto-Update Instructions

After changes to files in this directory, run `/update-claude-md`.
