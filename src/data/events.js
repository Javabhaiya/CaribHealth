// -----------------------------------------------------------------------------
// Missions & events seed data.
// PLACEHOLDER: every mission, date, and location below is illustrative sample
// content for layout only (flagged with an amber "Interim" banner on the page).
// Replace with the board's confirmed mission calendar before launch.
// Ported verbatim from the prototype's `this.events` array.
//
// Fields: id, title, date, month, day, location, region, type, status,
//         statusKind ('open' | 'neutral'), desc
// `type` must match one of the filter categories in CATEGORIES below.
// -----------------------------------------------------------------------------

export const CATEGORIES = [
  'All',
  'Medical Mission',
  'Training',
  'Equipment',
  'Fundraiser',
  'Grant',
];

export const events = [
  {
    id: 1,
    title: 'Kingston Digestive-Health Mission',
    date: 'September 18–24, 2026',
    month: 'SEP',
    day: '18',
    location: 'Kingston, Jamaica',
    region: 'Jamaica',
    type: 'Medical Mission',
    status: 'Recruiting clinicians',
    statusKind: 'open',
    desc: 'A week-long endoscopy and GI screening mission at a partner clinic, pairing visiting specialists with local providers.',
  },
  {
    id: 2,
    title: 'Endoscopy Equipment Delivery',
    date: 'August 12, 2026',
    month: 'AUG',
    day: '12',
    location: 'Georgetown, Guyana',
    region: 'Guyana',
    type: 'Equipment',
    status: 'Scheduled',
    statusKind: 'neutral',
    desc: 'Shipment and on-site installation of refurbished endoscopy and diagnostic equipment for a regional hospital.',
  },
  {
    id: 3,
    title: 'GI Triage & Referral Workshop',
    date: 'October 9, 2026',
    month: 'OCT',
    day: '09',
    location: 'Port of Spain, Trinidad',
    region: 'Trinidad',
    type: 'Training',
    status: 'Open registration',
    statusKind: 'open',
    desc: 'A one-day continuing-education workshop for nurses and community health workers on recognizing and triaging digestive disease.',
  },
  {
    id: 4,
    title: 'Annual Caribbean Health Benefit',
    date: 'November 14, 2026',
    month: 'NOV',
    day: '14',
    location: 'Orange, CT (in-person & virtual)',
    region: 'United States',
    type: 'Fundraiser',
    status: 'Tickets available',
    statusKind: 'open',
    desc: 'Our founding-year benefit evening supporting the 2027 mission calendar. Sponsorship and individual tickets available.',
  },
  {
    id: 5,
    title: 'Rural Outreach Screening Mission',
    date: 'January 22–28, 2027',
    month: 'JAN',
    day: '22',
    location: 'St. Elizabeth, Jamaica',
    region: 'Jamaica',
    type: 'Medical Mission',
    status: 'In planning',
    statusKind: 'neutral',
    desc: 'A mobile screening mission reaching rural parishes with limited access to specialty evaluation.',
  },
  {
    id: 6,
    title: 'Continuing-Education Grant Cycle',
    date: 'Applications due December 1, 2026',
    month: 'DEC',
    day: '01',
    location: 'Caribbean-wide',
    region: 'Caribbean-wide',
    type: 'Grant',
    status: 'Accepting applications',
    statusKind: 'open',
    desc: 'Grant funding for Caribbean medical professionals pursuing training that strengthens local specialty care.',
  },
];
