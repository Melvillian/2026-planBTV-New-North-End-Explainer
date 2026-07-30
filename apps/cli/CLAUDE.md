# CLI

## Overview

Command-line tool built with Commander.js. Uses workspace packages `common-lib` and `openai-summarizer`.

## CLI commands

Run from the repo root via `bun run cli <command>` (builds first), or `bun apps/cli/bin/cli.js <command>` if already built.

- `hello` - Hello world example
- `compare-sha <pdf-path>` - Hash a PDF and compare against the stored hash in `planBTV-sha256.txt`; exits 1 on mismatch. Used to detect a new draft plan release.
- `update-hash <pdf-path>` - Hash a PDF and overwrite `planBTV-sha256.txt` with the digest.
- Both hash commands take `--hash-file <path>` to override the default hash file (resolved relative to cwd).

Command definitions live in `src/commands/`; hashing logic lives in `@melvillian/common-lib` (`sha256.ts`).

## Commands

- `bun run build` - Compile TypeScript
- `bun run dev` - Watch mode compilation
- `bun run typecheck` - Type check without emitting
- `bun run start` - Run CLI via `bun bin/cli.js`
- `bun run build:single` - Compile to standalone binary

## Dependencies

<!-- AUTO-GENERATED - DO NOT EDIT -->

- **@melvillian/common-lib** (workspace) - Shared utilities
- **@melvillian/openai-summarizer** (workspace) - OpenAI integration
- **commander** (^14.0.2) - CLI argument parsing
- **date-fns** (^4.1.0) - Date utilities
- **wellcrafted** (^0.23.1) - Rust-style error definitions and handling to make Typescript errors more robust. Use this when it makes sense to declare user-defined errors

## Auto-Update Instructions

After changes to files in this directory, run `/update-claude-md`.
