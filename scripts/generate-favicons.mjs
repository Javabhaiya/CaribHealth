import sharp from 'sharp';

const SRC = '_design-reference/assets/logo.png'; // pristine full-res original

// Trim the white margin so the mark fills the favicon, then center it on a
// white square with a small breathing margin.
const trimmed = await sharp(SRC).trim({ threshold: 10 }).toBuffer();

const targets = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'apple-touch-icon.png': 180,
  'favicon-192.png': 192,
  'favicon-512.png': 512,
};

for (const [name, size] of Object.entries(targets)) {
  const inner = Math.round(size * 0.86);
  const padL = Math.round((size - inner) / 2);
  const padR = size - inner - padL;
  await sharp(trimmed)
    .resize(inner, inner, { fit: 'contain', background: '#ffffff' })
    .extend({ top: padL, bottom: padR, left: padL, right: padR, background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png()
    .toFile('public/' + name);
  console.log('  ' + name + ' (' + size + 'x' + size + ')');
}

console.log('Favicons generated from logo.');
