---
name: render-deploys
description: Render deploy concepts for this repo — Docker vs native runtime, why bun is mandatory in the Dockerfile, and workspace build order. Use when editing a Dockerfile or render.yaml, debugging a Render build, or reproducing a Render build locally.
---

# Render deploy concepts

- **Docker vs native runtime:** services use `env: docker`, so build and run come
  from the **Dockerfile** (`RUN`/`CMD`) — NOT `render.yaml`
  `buildCommand`/`startCommand` (those are native-runtime only). The Dockerfile is
  the single source of truth, giving local == Render parity. Reproduce a Render
  build locally with `bun run docker:build:api` (directory
  context `.`, so the root `.dockerignore` applies). The build uses your working
  tree as-is — commit and push first if you want it to mirror exactly what Render
  builds from your branch.
- **bun is mandatory** in the Dockerfile: npm cannot resolve the `workspace:*`
  protocol. Build with bun, run under Node, and match the runtime Node major to
  bun's embedded Node (bun@1.3.14 → Node 24) for native-addon ABI compatibility.
- **Build order:** `bun run build` is `bun --filter '*' build`, which builds every
  workspace in dependency order automatically (requires Bun >= 1.3.9). No manual
  step is needed when adding a package or app.
