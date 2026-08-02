// @ts-check
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const assetsDir = join(fileURLToPath(new URL('..', import.meta.url)), 'src', 'assets');

const sizes = {
  'hero-leaf': { width: 900, height: 900, quality: 80 },
  'feature-terrace': { width: 1200, height: 600, quality: 80 },
};

const files = await readdir(assetsDir);
let count = 0;
for (const file of files) {
  if (extname(file) !== '.svg') continue;
  const name = basename(file, '.svg');
  const opts = sizes[name];
  if (!opts) continue;
  const svg = await readFile(join(assetsDir, file));
  const out = join(assetsDir, `${name}.webp`);
  await sharp(svg, { density: 144 })
    .resize({ width: opts.width, height: opts.height, fit: 'cover' })
    .webp({ quality: opts.quality })
    .toFile(out);
  console.log(`rasterized ${file} -> ${basename(out)}`);
  count++;
}
console.log(`done (${count} file(s))`);
