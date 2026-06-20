// =============================================================================
// CaribHealth Foundation — site configuration
// Fill in these values before going live. Each has a free, static-site-friendly
// provider. Until they are set, the donate / contact forms fall back to a clear
// "not configured yet" message instead of silently failing.
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
export const DONATION_PROVIDER_URL = 'https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-16431';

// -----------------------------------------------------------------------------
// Contact form
// Get a free access key at https://web3forms.com (no account required — it is
// emailed to you). Paste it below; the contact form POSTs to Web3Forms.
// -----------------------------------------------------------------------------
export const FORM_ACCESS_KEY = '9151d59b-be59-4334-b01f-0920a04a9e0a';

// Convenience flags used by the UI to decide whether a provider is wired up.
export const isConfigured = (v) =>
  typeof v === 'string' && v.length > 0 && !v.startsWith('PASTE_');
