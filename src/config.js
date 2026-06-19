// =============================================================================
// CaribHealth Foundation — site configuration
// Fill in these values before going live. Each has a free, static-site-friendly
// provider. Until they are set, the donate / contact / newsletter forms fall
// back to a clear "not configured yet" message instead of silently failing.
// =============================================================================

// Canonical production URL (no trailing slash). Used for SEO meta + JSON-LD.
export const SITE_URL = 'https://javabhaiya.github.io/CaribHealth';

// Organization contact email (shown in the top bar, footer, contact page).
export const ORG_EMAIL = 'caribhealthfoundation@gmail.com';

// -----------------------------------------------------------------------------
// Donation provider
// Create a free nonprofit account at https://www.zeffy.com (0% fees) or
// https://givebutter.com / https://donorbox.org. Paste the hosted donation page
// URL below. The Donate page appends ?amount=&frequency=&dedication= as query
// params so your provider can pre-fill them (most accept an `amount` param).
// -----------------------------------------------------------------------------
export const DONATION_PROVIDER_URL = 'PASTE_ZEFFY_OR_GIVEBUTTER_URL_HERE';

// -----------------------------------------------------------------------------
// Contact form
// Get a free access key at https://web3forms.com (no account required — it is
// emailed to you). Paste it below; the contact form POSTs to Web3Forms.
// -----------------------------------------------------------------------------
export const FORM_ACCESS_KEY = 'PASTE_WEB3FORMS_ACCESS_KEY_HERE';

// -----------------------------------------------------------------------------
// Newsletter
// Either reuse a Web3Forms access key (it will email you each signup) OR paste a
// Mailchimp / Buttondown / Beehiiv embed POST URL. If it looks like a URL the
// footer form POSTs to it directly; otherwise it is treated as a Web3Forms key.
// -----------------------------------------------------------------------------
export const NEWSLETTER_ENDPOINT = 'PASTE_NEWSLETTER_ENDPOINT_HERE';

// Convenience flags used by the UI to decide whether a provider is wired up.
export const isConfigured = (v) =>
  typeof v === 'string' && v.length > 0 && !v.startsWith('PASTE_');
