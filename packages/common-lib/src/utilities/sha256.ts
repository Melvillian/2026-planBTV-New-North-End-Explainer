import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

/**
 * Compute the SHA256 hash (lowercase hex) of a file, streaming so large
 * files (e.g. a 200+ page PDF) are not loaded fully into memory.
 */
export async function sha256OfFile(filePath: string): Promise<string> {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(filePath)) {
    hash.update(chunk as Buffer);
  }
  return hash.digest('hex');
}

/**
 * Read a stored hash from a hash file (a single hex digest, as produced by
 * `shasum -a 256 <file> | awk '{print $1}'`).
 */
export async function readStoredHash(hashFilePath: string): Promise<string> {
  return (await readFile(hashFilePath, 'utf8')).trim();
}

export interface HashComparison {
  match: boolean;
  actualHash: string;
  storedHash: string;
}

/**
 * Hash `filePath` and compare it to the digest stored in `hashFilePath`.
 */
export async function compareFileToStoredHash(
  filePath: string,
  hashFilePath: string,
): Promise<HashComparison> {
  const [actualHash, storedHash] = await Promise.all([
    sha256OfFile(filePath),
    readStoredHash(hashFilePath),
  ]);
  return { match: actualHash === storedHash, actualHash, storedHash };
}

/**
 * Hash `filePath` and write the digest to `hashFilePath` (trailing newline,
 * same format as `shasum -a 256 <file> | awk '{print $1}' > <hashFilePath>`).
 * Returns the digest that was written.
 */
export async function updateStoredHash(
  filePath: string,
  hashFilePath: string,
): Promise<string> {
  const hash = await sha256OfFile(filePath);
  await writeFile(hashFilePath, `${hash}\n`, 'utf8');
  return hash;
}
