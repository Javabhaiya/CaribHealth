# Handoff: CaribHealth Foundation — Marketing Website

## Overview
A complete marketing/informational website for **CaribHealth Foundation, Inc.**, a Connecticut 501(c)(3) nonprofit (EIN 99-2604475, incorporated March 2024) that facilitates access to high-quality medical care for underserved populations across the Caribbean. Founded by gastroenterologist Dr. Gyanprakash Ketwaroo, with founding strength in digestive health.

The site is a single-page application with 8 client-side "pages" (no server routing), plus a multi-step donation flow, a validated contact form, a filterable/searchable missions calendar, and a newsletter capture. It is navy (`#0a1f3d`) + gold (`#b8860b`) with IBM Plex Serif display type and Inter body type.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look, content, and behavior. They are **not** meant to be shipped as-is to production. The task is to **recreate this design in a real, maintainable codebase** using that environment's established patterns (React/Next.js, Astro, Vue, etc.). If no codebase exists yet, **Astro or Next.js (static export) is recommended** — this is a content-driven static marketing site with light interactivity, so a static-site framework is the natural fit.

### Important: the prototype runs on a custom runtime
`CaribHealth Foundation.dc.html` is a "Design Component" — it depends on `support.js`, a small proprietary template runtime that provides:
- `{{ dotted.path }}` template interpolation
- `<sc-if value="…">` / `<sc-for list="…" as="…">` control-flow elements
- A `class Component extends DCLogic` logic class (React-class-like: `state`, `setState`, `renderVals()`, lifecycle)

**Do not try to depend on `support.js` in production.** Treat the `.dc.html` as a readable spec: the markup shows structure/styling, and the `<script data-dc-script>` block at the bottom contains all the real logic (state shape, validation rules, handlers) to port. `CaribHealth Foundation - standalone.html` is a fully self-contained, offline-capable build (all assets + runtime inlined) — useful purely to **open in a browser and see/click the real thing**.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions are all specified and should be reproduced faithfully. Exact tokens are listed below. All body copy and microcopy in the prototype is intended final copy **except** the items explicitly flagged as placeholder/interim (see "Content status" below).

## Tech recommendations
- **Framework:** Astro (ideal for static content + islands) or Next.js static export.
- **Styling:** Tailwind or CSS Modules — match whatever the team standardizes on. Values below map cleanly to Tailwind theme tokens.
- **Fonts:** Google Fonts — `IBM Plex Serif` (400/500/600) and `Inter` (300/400/500/600/700).
- **Real integrations needed** (the prototype simulates these):
  - **Donations:** the multi-step card form is a *demo* with no processor. Replace with a real provider — for a 501(c)(3), **Zeffy** (free for nonprofits), Givebutter, or Donorbox are recommended. Easiest is to embed their hosted donate widget/page and keep the amount/frequency UI as a lead-in.
  - **Contact form:** submission is simulated. Wire to a form backend — **Netlify Forms**, Formspree, or an API route + email service.
  - **Newsletter:** stored to `localStorage` only. Wire to Mailchimp/Buttondown/etc.

---

## Global Layout & Chrome

### Utility bar (top, full-width)
- Background `#0a1f3d`, text `rgba(255,255,255,0.75)`, font-size `0.78rem`, padding `0.55rem clamp(1rem,4vw,2rem)`.
- Left: a gold `◆` glyph + "501(c)(3) Nonprofit · EIN 99-2604475 · Incorporated in Connecticut, 2024".
- Right: `caribhealthfoundation@gmail.com` (mailto link).

### Sticky nav (below utility bar)
- `position: sticky; top: 0; z-index: 100`, background `#fff`, `border-bottom: 1px solid #e5e7eb`, height `74px`, padding `0 clamp(1rem,4vw,2rem)`, flex space-between.
- **Logo (left):** 38×38 box, background `#0a1f3d`, `border-radius: 4px`, white serif "C", `border-bottom: 3px solid #b8860b`. Beside it: "CaribHealth Foundation" (IBM Plex Serif, 1.18rem, 600, `#0a1f3d`) over "CARIBBEAN MEDICAL CARE" (0.68rem, uppercase, `letter-spacing: 0.1em`, `#6b7280`). Logo click → Home.
- **Desktop nav (>820px):** text buttons Home · About · Programs · Missions · Board · Stories · Contact, each `0.875rem`, `#374151`, padding `0.5rem 0.85rem`. Active page shows a 2px gold underline (`bottom: -2px`, left/right `0.85rem`). Then a solid **Donate** button: `#0a1f3d` bg, white, `border-radius: 3px`, padding `0.62rem 1.3rem`.
- **Mobile (≤820px):** hamburger (24px, 3-line SVG) toggles a sticky dropdown panel (`top: 74px`) listing all links vertically + a full-width Donate button. Breakpoint driven by `window.matchMedia('(max-width: 820px)')`.

### Footer
- Background `#0a1f3d`, padding `clamp(2.75rem,5vw,3.5rem) clamp(1.25rem,4vw,2rem) 2rem`, font `0.85rem`, text `rgba(255,255,255,0.7)`.
- Grid: brand column (logo + 1-sentence description + **newsletter capture**) and two link columns ("Organization" and "Engage").
- **Newsletter capture:** label "GET MISSION UPDATES", email input (`rgba(255,255,255,0.08)` bg, `1px solid rgba(255,255,255,0.18)`, white text) + gold **Subscribe** button. On invalid email → error text `#f0a0a0`. On success → replaces form with "✓ You're subscribed — thank you for following our work." (gold). Persists via `localStorage['chf_newsletter']`.
- Bottom bar: "© 2026 CaribHealth Foundation, Inc. · 501(c)(3) · EIN 99-2604475 · Orange, CT" and the email, separated by a `1px solid rgba(255,255,255,0.1)` top border.

---

## Screens / Views

All pages share a max content width of **1100px** centered, with section padding around `clamp(3rem,5vw,5rem) clamp(1.25rem,4vw,2rem)`. Page headers (non-home) use a `#f4f7fb` band with a breadcrumb ("Home / Page"), an IBM Plex Serif `clamp(1.85rem,3.5vw,2.5rem)` h1 in `#0a1f3d`, and a ~660px intro paragraph in `#374151`.

A recurring **eyebrow** label appears above section headings: `0.72rem`, uppercase, `letter-spacing: 0.15em`, `#1b3766`, 600, preceded by an 18px×1px gold rule.

### 1. Home
- **Hero:** gradient `linear-gradient(135deg,#0a1f3d,#11294a)`, white. Eyebrow "Medical missions · Equipment · Training · The Caribbean"; h1 (IBM Plex Serif, `clamp(2rem,4.6vw,3.1rem)`, 500, max 780px); subhead `rgba(255,255,255,0.82)`, max 600px; two buttons: gold **Support Our Work** (→ donation) and ghost **Explore Our Programs** (→ Programs, `1px solid rgba(255,255,255,0.35)`).
- **Stats strip:** white, 4-col grid with right-border dividers — "2024 / Year Founded", "501(c)(3) / Tax-Deductible Status", "4 / Core Programs", "Caribbean / Region Served". Numbers IBM Plex Serif 2.1rem.
- **"What We Do":** intro + 4 program cards (grid, `minmax(230px,1fr)`). Each card: white, `1px solid #e5e7eb`, `border-top: 2px solid #0a1f3d` that turns gold on hover; a line-icon, serif h3, body. Then a "See how each program works →" button → Programs.
- **Quote band (`#f4f7fb`):** ⚠ **PLACEHOLDER** — carries an amber "Placeholder / Interim quote" pill. Centered serif blockquote attributed to "Dr. Gyanprakash Ketwaroo · Founder & President". Replace with approved wording.
- **First-Year Goals:** ⚠ **PLACEHOLDER** — amber interim banner ("Illustrative first-year targets…"). 4 gold-left-border items ("1st", "2", "$25K", "3+").
- **Closing CTA:** navy rounded panel, gold **Make a Donation** button.

### 2. About
- Header band + breadcrumb.
- Two-column: **Mission** (heading + 3 paragraphs, real org history) and **Our Principles** (4 numbered, divided rows: Patient dignity / Local partnership / Financial transparency / Evidence-based practice).
- **Organization Facts** band (`#f9fafb`): 6 fact pairs (Legal Name, Tax Status, Incorporated, Principal Office, Fiscal Year, Classification) — all real, from filings.
- Navy CTA panel → Programs.

### 3. Programs
- Header band + breadcrumb.
- 4 stacked rows, each a 2-col block (`1px solid #e5e7eb`): a navy left cell (`#0a1f3d`, white) with "Program 0N", icon, serif title, one-line tagline; and a white right cell with a paragraph + pill tags (`#f4f7fb` bg, `#1b3766`, `1px solid #d7e0ee`, `border-radius: 999px`).
  1. **Medical Missions** — heart-with-pulse icon. Tags: GI screening & endoscopy / Consultations / Bedside teaching.
  2. **Equipment Donation** — medical-bag icon. Tags: Endoscopy systems / Diagnostics / Consumables.
  3. **Training & Education** — graduation-cap icon. Tags: Symptom recognition / Triage & referral / Procedure technique.
  4. **Training Grants** — shield-check icon. Tags: Continuing education / Specialty training / Caribbean-wide.
- Closing `#f4f7fb` panel: gold **Donate** + ghost **View Missions** buttons.

### 4. Missions & Events (filterable)
- Header band + breadcrumb.
- ⚠ **PLACEHOLDER** amber interim banner: "Sample schedule for layout only. These missions, dates, and locations are placeholders…".
- **Filter row:** category chips (All / Medical Mission / Training / Equipment / Fundraiser / Grant) as pills — active = `#0a1f3d` filled, inactive = white `1px solid #d1d5db`, `border-radius: 999px`. Plus a search input (magnifier icon) filtering title/location/description/region live.
- **Event cards:** white, `1px solid #e5e7eb`, flex row. Left: a date badge (64px, navy month header + serif day). Middle: a type tag + a status pill (green `#f0f9f4/#1e6e4d/#c5e7d3` for "open", blue `#f4f7fb/#1b3766/#d7e0ee` for "neutral"), serif title, 📅 date + 📍 location line, description. Right: ghost **Get Involved** button (→ contact, preset reason "Clinical volunteer inquiry").
- **Empty state:** dashed-border box "No events match your filters."
- Closing `#f4f7fb` panel: gold **Partner With Us** (→ contact, preset "Institutional partnership").
- The 6 seed events are defined in the logic class `this.events` array (see State below).

### 5. Board & Governance
- Header band + breadcrumb.
- ⚠ **PLACEHOLDER (partial):** amber banner clarifies "Director **names and roles are accurate**; the biography text below is interim placeholder copy." Keep the names/roles; replace bios.
- 3 director cards (`minmax(320px,1fr)` grid), each white `1px solid #e5e7eb`, avatar + text:
  1. **Dr. Gyanprakash Ketwaroo, MD** — Founder, President & Chair. **Real photo** at `assets/dr-ketwaroo.jpg` (round, 68px, `object-fit: cover; object-position: center top`).
  2. **Wellington Phillips** — Director & Co-Founder. Avatar = initials "WP" on `#e8edf5`.
  3. **Ronald Dixon** — Director. Avatar = initials "RD".
  - Role label: `0.72rem`, uppercase, gold, 600, `letter-spacing: 0.1em`.
- **"How We Govern"** band (`#f9fafb`): 4 items (Officers / Meetings / Committees / Oversight) — derived from the bylaws.
- Navy CTA: gold **Submit an Inquiry** (→ contact, preset "Board membership inquiry").

### 6. Stories
- Header band + breadcrumb.
- ⚠ **PLACEHOLDER:** amber interim banner: "Every quote and testimonial on this page is placeholder copy shown for layout only…".
- **Featured quote:** navy panel with a "Placeholder quote" tag, large serif blockquote attributed to Dr. Ketwaroo. Replace with approved words.
- **"Why our volunteers are joining"** (tagged "Placeholder statements"): 3 cards (white, gold left border) with generic, unnamed roles (Volunteer Physician / Student Volunteer / Partner Clinic Lead) — clearly not real individuals.
- Closing `#f9fafb` panel: navy **Submit a Statement** button (→ contact, preset "Submit a testimonial").

### 7. Get Involved (Donation flow + more ways)
The flagship interaction. A centered card (max 660px), white, `border-radius: 6px`, `box-shadow: 0 8px 30px rgba(10,31,61,0.06)`.
- **Card header:** navy gradient, "Make a donation" + "Tax-deductible · 501(c)(3) · EIN 99-2604475", and a 3-dot step indicator (active dot = gold).
- **Step 1 — Amount:**
  - One-time / Monthly segmented toggle (active segment = white pill with shadow on `#f3f4f6` track).
  - 6 preset amount pills in a 3-col grid: $10/$25/$50/$100/$250/$500 (selected = navy filled). Default selected: **$100**.
  - Custom "$ Other amount" input (numeric only, max 7 digits); typing here overrides the preset selection.
  - "Dedicate this gift in honor or memory of someone" checkbox → reveals an "In honor of…" text field.
  - ⚠ **PLACEHOLDER** amber note: the $25K founding-goal figure is illustrative.
  - **Continue** button (gold) shows live amount + frequency, e.g. "Continue — $100/month →". Validates amount ≥ $1.
- **Step 2 — Payment:**
  - Summary row (frequency + amount) with an **Edit** link back to step 1 (retains entered values).
  - Fields: Name on card, Email (for receipt), Card number (auto-formats to groups of 4, max 16 digits), Expiry (auto-formats MM/YY), CVC (3–4 digits), ZIP. All required, each with inline red (`#d9534f`) error messages on a `1px solid #d9534f` border. Email must match a basic regex; card ≥ 13 digits; expiry `MM/YY`; CVC 3–4; ZIP 4–6.
  - **Donate $X** button. Below it, a small lock-icon line: "Demonstration form — no real payment is processed." **(Replace with real processor.)**
- **Step 3 — Confirmation:** green check, "Thank you for your gift.", a summary box (Amount / Frequency / Card •••• last4 / Receipt-to email), a tax-deductibility note, and two buttons: ghost **Make another gift** (resets the flow) and navy **Back to home**.
- **Below the card — "More ways to help":** 3 cards (Clinical Volunteers / Institutional Partnerships / Spread Awareness), each with a numbered eyebrow, body, and a full-width ghost button routing to the contact form with the matching preset reason ("Clinical volunteer inquiry" / "Institutional partnership" / "Request information packet").

### 8. Contact (validated form)
- Header band + breadcrumb.
- Two columns. **Left — contact info:** intro + 4 icon rows (Email / Response Time "Within 2 business days" / Principal Office "Orange, Connecticut, USA — Programs across the Caribbean" / Tax ID "501(c)(3) · EIN 99-2604475").
- **Right — form:** Full name (required), Email (required, regex), Organization (optional), **Reason for inquiry** `<select>` (8 options, see below), Message (required, min 10 chars). Required fields marked with a gold `*`. Inline red errors per field.
  - On success → replaces the form with a green confirmation card: "Your inquiry has been received." personalized with the entered name + email, and a **Send another inquiry** reset button.
  - Reason options: Clinical volunteer inquiry · Institutional partnership · Donation inquiry · Board membership inquiry · Submit a testimonial · Request information packet · Media or press · General inquiry.
  - **Deep-link behavior:** other pages route here and pre-select a specific reason (see `presetReason` in logic).

---

## Interactions & Behavior
- **Routing:** single-page; `state.page` switches which screen renders. Every nav/CTA sets `page` and scrolls to top. There is **no URL routing** in the prototype — in production, give each page a real route/path (`/about`, `/programs`, `/missions`, `/board`, `/stories`, `/donate`, `/contact`) for SEO and deep-linking. The contact deep-links should carry the reason as a query param (e.g. `/contact?reason=board`).
- **Mobile nav:** `matchMedia('(max-width: 820px)')` toggles hamburger vs. inline nav; the mobile menu closes on any selection.
- **Donation validation:** see Step 2 rules above. Card/expiry inputs auto-format as the user types. "Edit" preserves entered amount/frequency.
- **Events filter:** type chip + free-text search combine (AND). Empty result → empty state.
- **Contact + newsletter validation:** email regex `^[^@\s]+@[^@\s]+\.[^@\s]+$`; message ≥ 10 chars.
- **No animations of note** beyond hover color/border transitions (~0.15–0.2s). (An earlier fade-in was intentionally removed — do not reintroduce an opacity-0 initial state.)

## State Management
Port these from the `Component` logic class:
- **Navigation:** `page` ('home'|'about'|'programs'|'events'|'board'|'stories'|'involve'|'contact'), `mobileNav`, `isMobile`.
- **Donation:** `dStep` (1–3), `dFreq` ('one-time'|'monthly'), `dAmount`, `dCustom`, `dDedicate`, `dDedicateName`, `dName`, `dEmail`, `dCard`, `dExp`, `dCvc`, `dZip`, `dErrors`. Effective amount = `dCustom || dAmount`.
- **Contact:** `cName`, `cEmail`, `cOrg`, `cReason`, `cMessage`, `cErrors`, `cSubmitted`.
- **Events:** `evtType` (active chip), `evtSearch`. Seed data: `this.events` (6 objects: `id,title,date,month,day,location,region,type,status,statusKind('open'|'neutral'),desc`).
- **Newsletter:** `nlEmail`, `nlDone`, `nlError`; persisted in `localStorage['chf_newsletter']`.

## Design Tokens
**Colors**
- Navy (primary): `#0a1f3d`; navy-2 (gradient end): `#11294a`; navy-ink accent: `#1b3766`
- Gold (accent): `#b8860b`
- Body text: `#1f2937`; secondary text: `#374151`; muted: `#6b7280`; faint: `#9ca3af`
- Surfaces: page `#fbfbfa`, white `#fff`, tint `#f4f7fb`, tint-2 `#f9fafb`
- Borders: `#e5e7eb` (default), `#d1d5db` (input/strong), `#d7e0ee` (tint border)
- Status — success: bg `#f0f9f4`, text `#1e6e4d`, border `#c5e7d3`. Neutral: bg `#f4f7fb`, text `#1b3766`, border `#d7e0ee`.
- Error: `#d9534f` (borders/text); error text on navy: `#f0a0a0`
- Placeholder/interim markers (amber): bg `#fff7ed`, border `#fdba74`, text/badge `#9a3412`, dark badge bg `#9a3412` w/ `#fff7ed` text

**Typography**
- Display/headings: `'IBM Plex Serif', serif` (400/500/600). Headings mostly weight 500.
- Body/UI: `'Inter', sans-serif` (300/400/500/600/700).
- Eyebrow labels: 0.72rem, uppercase, `letter-spacing: 0.15em`, weight 600.

**Radius:** 3px (buttons/inputs/pills-square), 4px (cards/bands), 6px (donation card), 999px (chips), 50% (avatars).
**Shadow:** donation card `0 8px 30px rgba(10,31,61,0.06)`; mobile menu `0 6px 14px rgba(0,0,0,0.06)`.
**Layout:** content max-width 1100px (660px for donation card / form text). Section padding `clamp(3rem,5vw,5rem) clamp(1.25rem,4vw,2rem)`. Mobile breakpoint 820px.
**Icons:** inline stroke SVGs (1.4–2 stroke width), Lucide-style. In production use **Lucide** (or similar): heart-pulse, briefcase-medical, graduation-cap, shield-check, mail, clock, map-pin, file-text, search, menu.

## Content status (what's real vs. placeholder)
- **Real (from incorporation filings / EIN / bylaws — keep):** org name, EIN 99-2604475, 501(c)(3) status, CT incorporation March 2024, Orange CT office, the four program areas, director **names & roles** (Ketwaroo / Phillips / Dixon), governance facts, Dr. Ketwaroo's photo.
- **⚠ Placeholder / interim (flagged amber in-page — replace before launch):** both Dr. Ketwaroo **quotes** (Home + Stories), all **Stories testimonials**, the entire **Missions/Events** schedule, the **first-year goals** figures, the **$25K** donation-goal figure, and the director **bio paragraphs** (names/roles are fine).

## Assets
- `assets/dr-ketwaroo.jpg` — real headshot of Dr. Gyanprakash Ketwaroo (1100×1367 JPEG), used on the Board page. The only raster asset; everything else is inline SVG/CSS. Source: provided by the client (extracted from the original site draft).

## Files in this bundle
- `CaribHealth Foundation.dc.html` — the editable prototype source. Markup = structure/styling; the `<script data-dc-script>` block at the bottom = all logic (state, validation, handlers, seed event data). **Primary reference.**
- `support.js` — the prototype's template runtime. **Reference only; do not ship.**
- `CaribHealth Foundation - standalone.html` — self-contained, offline build. Open in any browser to see/click the real thing.
- `assets/dr-ketwaroo.jpg` — board photo.
