/**
 * Generates public/og-image.jpg — 1200×630 Open Graph thumbnail.
 * Run: npm run generate:og-image
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
const NAVY = "#040175";
const TAGLINE = "Canada PR · Australia PR · Study Abroad — Kochi, Kerala";
const LOGO_PATH = join(root, "src/assets/orbix-logo-transparent.png");
const OUTPUT_PATH = join(root, "public/og-image.jpg");

const logoSource = sharp(LOGO_PATH);
const { width: logoWidth, height: logoHeight } = await logoSource.metadata();

/** Crop to the orbix wordmark — exclude the "OVERSEAS CAREERS" subtitle. */
const wordmarkHeight = Math.round(logoHeight * 0.64);

const logo = await logoSource
  .clone()
  .extract({ left: 0, top: 0, width: logoWidth, height: wordmarkHeight })
  .resize({ width: 540 })
  .png()
  .toBuffer();

const { width: renderedLogoWidth, height: renderedLogoHeight } = await sharp(logo).metadata();
const taglineGap = 48;
const blockHeight = renderedLogoHeight + taglineGap + 36;
const logoTop = Math.round((HEIGHT - blockHeight) / 2);
const logoLeft = Math.round((WIDTH - renderedLogoWidth) / 2);
const taglineY = logoTop + renderedLogoHeight + taglineGap + 24;

const taglineSvg = Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <text
    x="${WIDTH / 2}"
    y="${taglineY}"
    font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="30"
    font-weight="500"
    fill="#ffffff"
    text-anchor="middle"
    letter-spacing="0.01em"
  >${TAGLINE}</text>
</svg>`);

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 3,
    background: NAVY,
  },
})
  .composite([
    { input: logo, top: logoTop, left: logoLeft },
    { input: taglineSvg, top: 0, left: 0 },
  ])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(OUTPUT_PATH);

console.log(`Wrote ${OUTPUT_PATH} (${WIDTH}×${HEIGHT})`);
