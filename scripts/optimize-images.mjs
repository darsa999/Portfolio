// Generates the responsive portrait, the Open Graph card and the icon set from the sources in assets/.
// Run with `npm run optimize:images` after replacing assets/profile-source.png or assets/favicon.svg.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'assets', 'profile-source.png');
const faviconSvg = path.join(root, 'public', 'favicon.svg');
const outDir = path.join(root, 'public', 'images');

await fs.mkdir(outDir, { recursive: true });

const report = async (file) => {
  const { size } = await fs.stat(file);
  console.log(`${path.relative(root, file).padEnd(36)} ${(size / 1024).toFixed(1)} KB`);
};

// Portrait: 320w + 640w in AVIF/WebP, plus a JPEG fallback for very old browsers.
for (const width of [320, 640]) {
  const base = sharp(src).resize({ width, withoutEnlargement: true });
  const avif = path.join(outDir, `profile-${width}.avif`);
  const webp = path.join(outDir, `profile-${width}.webp`);
  await base.clone().avif({ quality: 55, effort: 6 }).toFile(avif);
  await base.clone().webp({ quality: 78 }).toFile(webp);
  await report(avif);
  await report(webp);
}
const jpg = path.join(outDir, 'profile-640.jpg');
await sharp(src)
  .resize({ width: 640 })
  .flatten({ background: '#0f172a' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(jpg);
await report(jpg);

// Case-study screenshots: every assets/projects/<id>.jpg becomes public/images/projects/<id>-{400,800}.{avif,webp}.
const projectsSrc = path.join(root, 'assets', 'projects');
const projectsOut = path.join(outDir, 'projects');
await fs.mkdir(projectsOut, { recursive: true });
for (const file of await fs.readdir(projectsSrc)) {
  const id = path.parse(file).name;
  for (const width of [400, 800]) {
    const base = sharp(path.join(projectsSrc, file)).resize({ width, withoutEnlargement: true });
    const avif = path.join(projectsOut, `${id}-${width}.avif`);
    const webp = path.join(projectsOut, `${id}-${width}.webp`);
    await base.clone().avif({ quality: 55, effort: 6 }).toFile(avif);
    await base.clone().webp({ quality: 78 }).toFile(webp);
    await report(avif);
    await report(webp);
  }
}

// Open Graph / Twitter card, 1200x630.
const photoSize = 420;
const photo = await sharp(src)
  .resize(photoSize, photoSize, { fit: 'cover', position: 'top' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${photoSize}" height="${photoSize}"><rect width="100%" height="100%" rx="48" ry="48"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const card = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#020617"/><stop offset="0.6" stop-color="#1e1b4b"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#818cf8"/><stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="80" r="260" fill="#6366f1" opacity="0.12"/>
  <rect x="676" y="96" width="438" height="438" rx="56" fill="url(#accent)"/>
  <g font-family="Segoe UI, Inter, Arial, sans-serif">
    <text x="80" y="200" font-size="26" font-weight="700" fill="#34d399" letter-spacing="3">AVAILABLE ON UPWORK</text>
    <text x="80" y="285" font-size="68" font-weight="800" fill="#ffffff">Mamuka Darsalia</text>
    <text x="80" y="345" font-size="30" font-weight="700" fill="url(#accent)">Lead Full-Stack &amp; Automation</text>
    <text x="80" y="383" font-size="30" font-weight="700" fill="url(#accent)">Engineer</text>
    <text x="80" y="445" font-size="24" fill="#cbd5e1">React 19 · Tailwind CSS v4 · TypeScript</text>
    <text x="80" y="482" font-size="24" fill="#cbd5e1">n8n · Python · AI-Augmented Development</text>
    <text x="80" y="550" font-size="22" fill="#94a3b8">Tbilisi, Georgia · UTC+4</text>
  </g>
</svg>`;

const og = path.join(outDir, 'og-image.jpg');
await sharp(Buffer.from(card))
  .composite([{ input: photo, left: 685, top: 105 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(og);
await report(og);

// Icons rasterised from the SVG favicon.
for (const [name, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  const file = path.join(root, 'public', name);
  await sharp(faviconSvg, { density: 400 }).resize(size, size).flatten({ background: '#020617' }).png().toFile(file);
  await report(file);
}
