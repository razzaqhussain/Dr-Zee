import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [owner, repository] = (process.env.GITHUB_REPOSITORY || 'razzaqhussain/Dr-Zee').split('/');
if (!owner || !repository) throw new Error('GITHUB_REPOSITORY must use owner/repository format.');

const isUserSite = repository.toLowerCase() === `${owner}.github.io`.toLowerCase();
const basePath = isUserSite ? '/' : `/${repository}/`;
const sourceDir = path.resolve('site');
const outputDir = path.resolve(process.env.PAGES_OUTPUT_DIR || '_site');

await mkdir(outputDir, { recursive: true });
await cp(sourceDir, outputDir, {
  recursive: true,
  filter: source => !source.endsWith('.htaccess') && !source.endsWith('UPLOAD-README.txt'),
});

const internalPath = /(["'`])\/((?:assets|about|treatments|faqs|blog|blogs|book-consultation|contact|cookie-policy|medical-disclaimer|privacy-policy|terms)(?:\/[^"'`\s<>]*)?|(?:#[^"'`\s<>]*)?)(?=["'`])/g;

async function rewriteFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteFiles(filePath);
      continue;
    }
    if (!/\.(?:html|js)$/i.test(entry.name)) continue;
    const original = await readFile(filePath, 'utf8');
    const rewritten = original.replace(internalPath, (_match, quote, internal) => `${quote}${basePath}${internal}`);
    await writeFile(filePath, rewritten, 'utf8');
  }
}

await rewriteFiles(outputDir);
await writeFile(path.join(outputDir, '.nojekyll'), '');
console.log(`Built GitHub Pages artifact at ${outputDir} using base path ${basePath}`);
