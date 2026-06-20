import sharp from 'sharp';

// 1200x630 branded Open Graph / social-share banner.
const W = 1200;
const H = 630;

// Trimmed logo, sized to sit inside a white badge.
const logo = await sharp('_design-reference/assets/logo.png')
  .trim({ threshold: 10 })
  .resize({ height: 188 })
  .toBuffer();
const lm = await sharp(logo).metadata();

// White rounded badge so the white-background logo reads cleanly on navy.
const cardW = 248;
const cardH = 248;
const cardX = Math.round((W - cardW) / 2);
const cardY = 60;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#0a1f3d"/>
  <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="26" fill="#ffffff"/>
  <text x="${W / 2}" y="406" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="700" fill="#ffffff">CaribHealth Foundation</text>
  <rect x="${W / 2 - 34}" y="438" width="68" height="4" rx="2" fill="#c79a3a"/>
  <text x="${W / 2}" y="506" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#c8d2e0">Bridging healthcare across the Caribbean</text>
  <text x="${W / 2}" y="556" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="2" fill="#9fb0c7">501(c)(3) NONPROFIT</text>
</svg>`;

const logoTop = Math.round(cardY + (cardH - lm.height) / 2);
const logoLeft = Math.round((W - lm.width) / 2);

await sharp(Buffer.from(svg))
  .composite([{ input: logo, top: logoTop, left: logoLeft }])
  .png()
  .toFile('public/og-image.png');

console.log('OG image created: public/og-image.png (' + W + 'x' + H + ')');
