import { compareFileToStoredHash, errorToString } from '@melvillian/common-lib';
import { Command } from 'commander';

import { DEFAULT_HASH_FILE } from './hash-file.js';

const compareSha = new Command('compare-sha')
  .description(
    'Hash a (potentially new) planBTV PDF and compare it to the stored hash',
  )
  .argument('<pdf-path>', 'path to the planBTV PDF to check')
  .option(
    '--hash-file <path>',
    'path to the stored hash file',
    DEFAULT_HASH_FILE,
  )
  .action(async (pdfPath: string, options: { hashFile: string }) => {
    try {
      const { match, actualHash, storedHash } = await compareFileToStoredHash(
        pdfPath,
        options.hashFile,
      );
      if (match) {
        console.log(`MATCH: ${pdfPath} is unchanged (sha256: ${actualHash})`);
      } else {
        console.log(`NO MATCH: ${pdfPath} differs from the stored hash`);
        console.log(`  stored (${options.hashFile}): ${storedHash}`);
        console.log(`  actual:                       ${actualHash}`);
        console.log(
          'The draft plan has changed — update the website, then run `bun run cli update-hash <pdf-path>`.',
        );
        process.exitCode = 1;
      }
    } catch (error) {
      console.error(`Failed to compare hashes: ${errorToString(error)}`);
      process.exitCode = 1;
    }
  });

export default compareSha;
