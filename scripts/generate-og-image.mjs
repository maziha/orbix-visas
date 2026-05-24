import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "og-image.jpg");
const logoPath = join(root, "src", "assets", "logo_white_navy_background.png");

const WIDTH = 1200;
const HEIGHT = 630;
const NAVY = { r: 4, g: 1, b: 117 };

const logo = await sharp(logoPath).resize({ width: 520 }).toBuffer();
const logoMeta = await sharp(logo).metadata();
const logoW = logoMeta.width ?? 520;
const logoH = logoMeta.height ?? 200;
const left = Math.round((WIDTH - logoW) / 2);
const top = Math.round((HEIGHT - logoH) / 2);

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 3,
    background: NAVY,
  },
})
  .composite([{ input: logo, left, top }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outPath);

console.log(`Wrote ${outPath} (${WIDTH}x${HEIGHT})`);
