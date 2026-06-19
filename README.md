# CaribHealth Foundation — Website

Marketing/informational website for **CaribHealth Foundation, Inc.** — a
Connecticut 501(c)(3) nonprofit (EIN 99-2604475, incorporated March 2024) that
facilitates access to high-quality medical care for underserved populations
across the Caribbean.

Built as a fast, static site: navy (`#0a1f3d`) + gold (`#b8860b`) with IBM Plex
Serif display type and Inter body type.

---

## Tech stack

- **[Astro](https://astro.build)** — static site generator (zero JS shipped by
  default; the few interactive pieces are vanilla `<script>` islands).
- **[Tailwind CSS](https://tailwindcss.com)** via `@astrojs/tailwind` — design
  tokens live in `tailwind.config.mjs`; most layout uses scoped component styles
  plus shared CSS variables defined in `src/layouts/Base.astro`.
- **`@astrojs/sitemap`** — auto-generates `sitemap-index.xml` / `sitemap-0.xml`.
- **`sharp`** — powers Astro's `<Image>` optimization (the board headshot is
  served as an optimized WebP).
- Deployed to **GitHub Pages** via GitHub Actions.

## Project structure

```
src/
  layouts/Base.astro       # <html>/<head>, SEO meta, JSON-LD, skip-link, global CSS vars
  components/
    Nav.astro              # sticky nav, CSS C-box wordmark, mobile hamburger
    Footer.astro           # footer + newsletter capture
    Icon.astro             # Lucide-style inline SVG icon set
  pages/                   # one .astro file per route (index, about, programs,
                           # missions, board, stories, donate, contact, training)
  data/
    events.js              # missions/events seed data (PLACEHOLDER)
    stories.js             # testimonials seed data (PLACEHOLDER)
  assets/dr-ketwaroo.jpg   # board headshot, optimized at build via <Image>
  config.js                # ← paste your provider keys here (see below)
public/
  assets/logo.png          # full logo (served as-is; used for OG image)
  favicon.svg / favicon-32.png
  site.webmanifest / robots.txt / CNAME
_design-reference/         # original prototype + handoff spec (NOT part of the build)
```

## Run locally

```bash
npm install
npm run dev          # http://localhost:4321/CaribHealth
```

> **Note on Node:** this project was scaffolded with Node 24 LTS. Any current
> Node 18+/20+/22+/24+ works. The CI workflow uses Node 20.

## Build

```bash
npm run build        # outputs static site to dist/
npm run preview      # serve the production build locally
```

---

## Configure provider keys before going live

All form/donation integrations are wired but **not yet connected**. Open
**`src/config.js`** and replace the four `PASTE_…` placeholders. Until each is
set, the corresponding form validates input but shows a clear "not configured
yet" notice instead of silently failing.

| Constant                 | What it's for      | Where to get it (free)                                    |
| ------------------------ | ------------------ | -------------------------------------------------------- |
| `DONATION_PROVIDER_URL`  | Donate hand-off    | [zeffy.com](https://www.zeffy.com) (0% fees), Givebutter, Donorbox |
| `FORM_ACCESS_KEY`        | Contact form       | [web3forms.com](https://web3forms.com) (key emailed to you) |
| `NEWSLETTER_ENDPOINT`    | Footer newsletter  | A Web3Forms key, or a Mailchimp/Buttondown/Beehiiv POST URL |
| `SITE_URL`               | SEO canonical URLs | Already set; change only if you move domains              |

- **Donate:** the amount selector (one-time/monthly, presets, custom, dedicate)
  hands off to your provider with `?amount=&frequency=&dedication=` query params.
  **No card data is collected on this site.**
- **Contact:** POSTs to Web3Forms; pre-selects a reason from `?reason=` deep
  links (e.g. `/contact?reason=board`). Validates name, email regex, and a
  10-char minimum message.
- **Newsletter:** if `NEWSLETTER_ENDPOINT` looks like a URL it POSTs there;
  otherwise it's treated as a Web3Forms access key.

## Add real training videos

Edit `src/pages/training.astro` and add objects to the `videos` array using each
YouTube video's ID (the part after `watch?v=`). Items without a `youtubeId`
render as "Coming soon" placeholder cards. A worked example is in the file's
top comment.

---

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`
(and via manual *workflow_dispatch*). One-time setup:

1. In the GitHub repo: **Settings → Pages → Build and deployment → Source =
   "GitHub Actions"**.
2. Push to `main`. The site publishes to
   `https://javabhaiya.github.io/CaribHealth/`.

### Using a custom domain

1. **`astro.config.mjs`** — set `site` to your domain and **remove the `base`**
   (or set it to `'/'`) since a custom domain serves from the root:
   ```js
   export default defineConfig({
     site: 'https://www.caribhealthfoundation.org',
     // base: '/CaribHealth',   ← delete this line
     integrations: [tailwind(), sitemap()],
     output: 'static',
   });
   ```
2. **`public/CNAME`** — replace the placeholder comment with your bare domain on
   a single line, e.g. `www.caribhealthfoundation.org`.
3. **`src/config.js`** — update `SITE_URL` to match.
4. **DNS** — at your registrar, add a `CNAME` record pointing `www` to
   `javabhaiya.github.io` (and apex/`A` records per
   [GitHub's docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
5. **Settings → Pages → Custom domain** — enter the domain and enable
   *Enforce HTTPS*.

---

## ⚠ Content that must be replaced before launch

These are flagged in-page with **amber "Placeholder / Interim" banners**. Real,
filing-sourced content (org name, EIN, 501(c)(3) status, CT incorporation,
Orange CT office, the four programs, director names & roles, governance facts)
is final and should be kept.

| Placeholder content                              | File(s)                          |
| ------------------------------------------------ | -------------------------------- |
| Dr. Ketwaroo quotes (Home + Stories)             | `src/pages/index.astro`, `stories.js` |
| All Stories testimonials                         | `src/data/stories.js`            |
| Entire Missions/Events schedule                  | `src/data/events.js`             |
| First-year goals figures                         | `src/pages/index.astro`          |
| `$25,000` founding-campaign goal                 | `src/pages/index.astro`, `donate.astro` |
| Director **bio paragraphs** (names/roles are OK) | `src/pages/board.astro`          |

The original design prototype and full handoff spec are preserved (out of the
build) in **`_design-reference/`**.
