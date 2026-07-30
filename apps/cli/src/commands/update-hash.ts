import { errorToString, updateStoredHash } from '@melvillian/common-lib';
import { Command } from 'commander';

import { DEFAULT_HASH_FILE } from './hash-file.js';

const updateHash = new Command('update-hash')
  .description(
    'Hash a planBTV PDF and write the digest to the stored hash file',
  )
  .argument('<pdf-path>', 'path to the planBTV PDF to hash')
  .option(
    '--hash-file <path>',
    'path to the hash file to write',
    DEFAULT_HASH_FILE,
  )
  .action(async (pdfPath: string, options: { hashFile: string }) => {
    try {
      const hash = await updateStoredHash(pdfPath, options.hashFile);
      console.log(`Wrote sha256 of ${pdfPath} to ${options.hashFile}: ${hash}`);
    } catch (error) {
      console.error(`Failed to update hash file: ${errorToString(error)}`);
      process.exitCode = 1;
    }
  });

export default updateHash;
