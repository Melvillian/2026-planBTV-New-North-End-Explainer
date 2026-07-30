import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import {
  sha256OfFile,
  readStoredHash,
  compareFileToStoredHash,
  updateStoredHash,
} from './sha256.js';

// shasum -a 256 of the exact bytes "hello world" (no trailing newline)
const HELLO_WORLD_SHA256 =
  'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';

describe('sha256 utilities', () => {
  let dir: string;
  let contentFile: string;
  let hashFile: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'sha256-test-'));
    contentFile = join(dir, 'content.pdf');
    hashFile = join(dir, 'content-sha256.txt');
    await writeFile(contentFile, 'hello world');
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it('sha256OfFile computes the same digest as shasum -a 256', async () => {
    expect(await sha256OfFile(contentFile)).toBe(HELLO_WORLD_SHA256);
  });

  it('readStoredHash trims whitespace and trailing newlines', async () => {
    await writeFile(hashFile, `${HELLO_WORLD_SHA256}\n`);
    expect(await readStoredHash(hashFile)).toBe(HELLO_WORLD_SHA256);
  });

  it('compareFileToStoredHash reports a match for an unchanged file', async () => {
    await writeFile(hashFile, `${HELLO_WORLD_SHA256}\n`);
    const result = await compareFileToStoredHash(contentFile, hashFile);
    expect(result).toEqual({
      match: true,
      actualHash: HELLO_WORLD_SHA256,
      storedHash: HELLO_WORLD_SHA256,
    });
  });

  it('compareFileToStoredHash reports a mismatch for a changed file', async () => {
    await writeFile(hashFile, `${HELLO_WORLD_SHA256}\n`);
    await writeFile(contentFile, 'hello world, revised');
    const result = await compareFileToStoredHash(contentFile, hashFile);
    expect(result.match).toBe(false);
    expect(result.storedHash).toBe(HELLO_WORLD_SHA256);
    expect(result.actualHash).not.toBe(HELLO_WORLD_SHA256);
  });

  it('updateStoredHash writes the digest with a trailing newline', async () => {
    const written = await updateStoredHash(contentFile, hashFile);
    expect(written).toBe(HELLO_WORLD_SHA256);
    expect(await readFile(hashFile, 'utf8')).toBe(`${HELLO_WORLD_SHA256}\n`);
  });
});
