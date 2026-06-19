import sharp from 'sharp';

const SRC = '_design-reference/assets/logo.png'; // pristine full-res original

// Trim the uniform white margin so the mark fills its box at small sizes.
const trimmed = await sharp(SRC).trim({ threshold: 10 }).toBuffer();

// Web-display version for nav/footer (small, crisp at 2x)
const webpInfo = await sharp(trimmed)
  .resize({ height: 120 })
  .webp({ quality: 82 })
  .toFile('public/assets/logo.webp');

// Optimized PNG fallback + OG image (replaces the 5.9 MB file)
await sharp(trimmed)
  .resize({ height: 300 })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/assets/logo.png');

console.log('Logo optimized. webp:', webpInfo.width + 'x' + webpInfo.height);
