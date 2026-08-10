# planBTV New North End Explainer

A resident-facing web app that explains the June 2026 draft **planBTV New North End** neighborhood plan for Burlington, VT. It lets a New North End resident understand, in one sitting, what the plan proposes, what changes for them, and what happens next — honestly, including community concerns. Content is sourced from the 219-page draft plan PDF (see `website-content-sources.md`).

The repo is a TypeScript monorepo (Bun workspaces): `apps/web` is the Vite + React explainer SPA (deployed as a [Render static site](https://render.com/docs/static-sites)), `apps/cli` is a maintenance CLI, and `packages/*` hold the importable logic.

## Setup

> **Using Claude Code?** Just run `/setup` — it checks all prerequisites, installs dependencies, builds everything, and verifies your environment. No manual steps needed.

### Manual setup

Requires **Node >= 22** and **Bun >= 1.3.9**.

```bash
bun install
bun run build
```

See the [Environment variables](#environment-variables) section below for required configuration.

## Features

- Mono-repository using bun workspaces
- TypeScript for type safety
- ES Modules for fast builds
- NodeNext node resolution
- React (Vite) web app in `apps/web`, deployed as a Render static site
- CLI via @commander
- Prettier for code formatting
- ESLint for linting
- VSCode will auto-format on save and paste
- Vitest for testing with coverage support
- Github action CI

## Commands

| Command                    | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `bun run build`            | Build all packages and apps                           |
| `bun run dev:cli`          | Build packages, then run the CLI app                  |
| `bun run cli <command>`    | Build, then run a CLI command (see below)             |
| `bun run dev:web`          | Run the web app dev server (vite)                     |
| `bun run test`             | Run tests (vitest)                                    |
| `bun run test:watch`       | Run tests in watch mode                               |
| `bun run test:coverage`    | Generate test coverage report                         |
| `bun run lint`             | Lint and fix (eslint)                                 |
| `bun run lint:check`       | Lint check only                                       |
| `bun run typecheck`        | Type check all packages                               |
| `bun run format`           | Format code (prettier)                                |
| `bun run clean`            | Remove dist directories                               |
| `bun run clean:all`        | Remove dist + node_modules                            |
| `bun run cloc`             | Count lines of code                                   |
| `bun run depcheck`         | Report unused dependencies                            |

## Tracking draft plan PDF updates

The website's content is derived from `planBTV.pdf`, the draft plan published by the city. `planBTV-sha256.txt` (repo root) stores the SHA256 of the version of the PDF the website content is currently based on, so the site maintainer (not site visitors) can detect when the city publishes a new draft and the website needs updating.

Check whether a newly downloaded draft differs from the one the site is based on:

```bash
bun run cli compare-sha <path/to/new/planbtv.pdf>
```

Prints `MATCH` (exit 0) if the PDF is unchanged, or `NO MATCH` (exit 1) with both hashes if it differs. After updating the website content from a new draft, record its hash:

```bash
bun run cli update-hash <path/to/new/planbtv.pdf>
```

This overwrites `planBTV-sha256.txt` with the new PDF's SHA256 (equivalent to `shasum -a 256 planBTV.pdf | awk '{print $1}' > planBTV-sha256.txt`). Both commands accept `--hash-file <path>` to use a different hash file; the default is `planBTV-sha256.txt` relative to the directory you run the command from (normally the repo root).

## Environment variables

- `OPENAI_API_KEY` — Required for OpenAI-powered features (used by `openai-summarizer`)
- `RENDER_API_KEY` — Optional, only needed for Render deployments
