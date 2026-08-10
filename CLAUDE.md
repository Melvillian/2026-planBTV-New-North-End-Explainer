# CLAUDE.md

## Overview

TypeScript monorepo using Bun workspaces. Node >=22 required.

- `apps/*` — Thin executable wrappers. Each app's entrypoint should do minimal work: parse CLI args or set up a server, then delegate to a package. Apps should not contain business logic.
- `packages/*` — Importable TypeScript modules containing the actual logic. Each package exposes an interface that the corresponding app depends on and the package implements. There is no standard interface shape; it depends on what the module does.

## Render

- When using the Render MCP, always select this workspace first using `select_workspace` with id `tea-cspvkb8gph6c73ft0hd0`
- **Service naming**: when adding a new service to `render.yaml`, name it `<repository-name>-<app-name>` (e.g. `caroline-nanny-website-api` for `apps/api` in this repo). Render appends its own random suffix to the `.onrender.com` subdomain (e.g. `caroline-nanny-website-api-mvqh.onrender.com`) — do not try to include or control the suffix in `render.yaml`. Generic names like `api` produce unrecognizable domains like `api-mvqh.onrender.com`.
- Exception: the existing `api` service in this repo keeps its name — renaming a service in a blueprint creates a new service rather than renaming the old one. This convention applies to new services and to fresh deploys of repos derived from this template.
- Deploy concepts (Docker vs native runtime, bun requirements, build order) live in the `render-deploys` skill.
