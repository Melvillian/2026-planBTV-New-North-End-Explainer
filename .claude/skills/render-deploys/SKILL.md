---
name: render-deploys
description: Render deploy concepts — deciding static site vs web service, the static-site blueprint pattern, bun requirements, and workspace build order. Use when adding or editing render.yaml, deploying a new app to Render, debugging a Render build, or reproducing a Render build locally.
---

# Render deploy concepts

This skill is written to be portable: copy it into any Bun-workspaces TypeScript
monorepo (e.g. repos derived from `typescript-projects`) to give Claude the
context to pick the right Render service type and generate the config.

## Decision: static site vs web service

**Default to a static site** (`runtime: static`). It has no fixed compute cost
(a Docker/native web service costs $7+/mo on starter), builds in seconds, and
serves from Render's CDN. Only fall back to a **web service** when the app
genuinely needs a server at request time.

An app requires a web service if ANY of these hold — check the frontend and
every sibling app, not the server framework:

1. **Frontend calls same-repo server code at runtime.** Grep the frontend
   source for `fetch(`, `axios`, `WebSocket`, `EventSource`, `io(` targeting
   same-origin paths (`/api/...` etc.), and check whether a sibling app
   registers matching routes.
2. **SSR / server-rendered framework.** Next.js with server features, Remix,
   SvelteKit with a node adapter, etc. (A purely static export is fine.)
3. **Secrets needed at request time.** Static builds may use build-time env
   vars, but their values are baked into the public bundle — anything secret
   disqualifies pure-static.
4. **Server-only behavior.** Websockets, background jobs, request-time auth,
   file uploads, redirects computed per-request.

**Do not judge by the mere existence of a server app.** A server (Express,
Hono, anything) whose registered routes are only (a) static-file middleware
(`express.static`, Hono's `serveStatic`), (b) an SPA fallback, and (c)
health/info endpoints exists solely to host the SPA — the repo is
static-eligible and that server can be deleted. Enumerate the routes; ignore
the framework.

**Hybrid is the default for repos with a real API**: the frontend still
deploys as a free static site, with a `routes` rewrite proxying `/api/*` to a
separate `<repo>-api` web service. Static XOR web service is a false choice.

## Static site blueprint pattern (proven in this repo)

```yaml
services:
  - type: web
    name: <repository-name>-<app-name>   # e.g. myrepo-web
    runtime: static
    autoDeploy: true
    buildCommand: bun install --frozen-lockfile && bun run build
    staticPublishPath: apps/<app-name>/dist
    routes:
      # SPA fallback: existing files are served directly; everything else
      # rewrites to index.html. Omit for non-SPA (multi-page/plain HTML) sites.
      - type: rewrite
        source: /*
        destination: /index.html
```

- The build runs in Render's **native environment**, not Docker. Bun is
  included automatically because the repo root has `bun.lock`; pin the version
  with a root `.bun-version` file (keep it in sync with `packageManager` in
  `package.json`). Node version pins via `NODE_VERSION` env var or
  `.node-version` if needed.
- Local parity is trivial: the `buildCommand` is exactly what you run locally.
- Static sites cannot use `startCommand`/`dockerCommand`; static-only fields
  are `staticPublishPath`, `routes`, and `headers`.
- Blueprint sync creates the service automatically on push to main — no
  dashboard steps (first-time repos need a one-time Blueprint connection).
- Render prefixes subdomain slugs that start with a digit (e.g. `2026-...` →
  `two026-...`); use a custom domain if the slug matters.

## Web service pattern (when the decision says so)

- Use `env: docker` with a Dockerfile as the single source of truth for build
  and run (`render.yaml` `buildCommand`/`startCommand` are native-runtime
  only). Build with bun (npm cannot resolve the `workspace:*` protocol), run
  under Node, and match the runtime Node major to bun's embedded Node
  (bun@1.3.14 → Node 24) for native-addon ABI compatibility.
- Give it `healthCheckPath: /health` and a root `.dockerignore` (build context
  is the repo root).

## Shared concepts

- **Build order:** `bun run build` is `bun --filter '*' build`, which builds
  every workspace in dependency order automatically (requires Bun >= 1.3.9).
  No manual step is needed when adding a package or app.
- **Migrating a service between types:** changing `type`/`runtime`/`name` in
  the blueprint creates a NEW service; it never converts the old one. Sequence:
  add the new service entry, sync, verify, move custom domains, then delete the
  old service (removing its entry from `render.yaml` does not destroy the
  running service — confirm deletion in the dashboard or via the API).
