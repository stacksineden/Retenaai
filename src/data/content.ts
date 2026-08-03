export const SITE = {
  name: "RetenaAI",
  tagline: "Creative supply for brands that test fast.",
  email: "hello@retenaai.com",
};

/* ---------------------------------------------------------------------------
 * LEGAL ENTITY DETAILS
 *
 * All four fields are OPTIONAL and currently empty, because RetenaAI is not
 * CAC-registered yet. While they're empty the site simply doesn't make any
 * claim about incorporation — no placeholder text, no invented RC number. The
 * privacy policy, terms and footer each adapt on their own.
 *
 * THE MOMENT THE CAC CERTIFICATE ARRIVES, fill these in. Nothing else needs
 * changing — the registered-entity block appears in the privacy policy, the
 * terms name the company as the contracting party, and the footer shows the
 * registered line.
 *
 *   entityName        → CAC-registered company name (a limited company, not a
 *                       business name)
 *   registeredAddress → the registered address. Use a virtual-office or
 *                       registered-address service, never your home — this
 *                       renders publicly, and it's the same address the cold
 *                       email footer needs.
 *   rcNumber          → from the CAC certificate, digits only (e.g. "1234567")
 *
 * `governingLaw` works without registration and is set to Nigeria. Change it to
 * "Delaware, United States" (or Wyoming) if you form the US LLC later.
 * ------------------------------------------------------------------------- */
export const LEGAL = {
  entityName: "",
  registeredAddress: "",
  rcNumber: "",
  governingLaw: "Nigeria",
};

/** True once the company is registered and its details are filled in above. */
export const HAS_REGISTERED_ENTITY = Boolean(
  LEGAL.entityName && LEGAL.registeredAddress
);

export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/#work" },
  { label: "FAQ", href: "/#faq" },
];

export const HERO = {
  eyebrow: "Creative supply, not creative testing",
  headline: "You're not shipping enough ads to find a winner.",
  sub: "RetenaAI supplies DTC beauty, skincare and wellness brands with 12+ new Meta ad concepts a month — so the brands beating you on the same budget stop beating you.",
  ctaPrimary: "Get one ad free",
  ctaSecondary: "See pricing",
};

export const STATS = [
  {
    value: 5,
    suffix: "%",
    label: "of creatives ever become winners",
    source: "Motion Creative Benchmarks 2026, 578,750 creatives",
  },
  {
    value: 0.25,
    decimals: 2,
    prefix: "",
    label: "winners/month at the average small-account pace of 4.1 creatives/week",
    source: "6,015 accounts, $1.29B in tracked spend",
  },
  {
    value: 2,
    suffix: "x",
    label: "more winners for accounts shipping top-quartile volume — same budget",
    source: "Motion Creative Benchmarks 2026",
  },
];

export const ANCHOR = {
  headline: "One new ad per $3,000 of monthly spend.",
  body: "That's the benchmark. It converts your budget into a number — how many concepts you need in market to keep finding winners instead of running the same six ads since spring.",
};

export const OFFER = {
  eyebrow: "The offer",
  headline: "12 net-new concepts a month. 3 delivered every Monday.",
  body: "No briefs to write, no creator calendars to manage, no waiting on a production company's queue. A batch lands in your inbox every Monday, ready to upload.",
  points: [
    {
      title: "3 new concepts, every Monday",
      body: "52 weeks a year, non-negotiable. Your testing calendar never runs dry.",
    },
    {
      title: "Free hook variants on winners",
      body: "The moment a creative beats your 30-day average CPA or ROAS for 3+ days and $300+ spend, we cut 4–6 new hooks on it within 48 hours — same body, new first three seconds. No extra cost.",
    },
    {
      title: "A one-page monthly log",
      body: "What tested, what won, what we're trying next. The read the whole account, not a spreadsheet of file names.",
    },
  ],
};

export const EDGE = {
  eyebrow: "Why the math works",
  headline: "We carry zero usage rights. Creator agencies can't say that.",
  body: "A single UGC video with paid usage rights runs about $3,500 on the open market. A full production agency runs $5,000+ a month for a fraction of the volume. Our cost structure doesn't climb as your ad spend climbs — creator costs do, ours don't. That gap is the business.",
  comparisons: [
    { label: "12 UGC videos, market average", value: "$2,376" },
    { label: "Same 12, with paid usage rights", value: "~$3,500" },
    { label: "Full-service video agency / mo", value: "$5,000+" },
  ],
};

export const PROCESS = {
  eyebrow: "How it works",
  headline: "From ad library to inbox, on a schedule you can plan around.",
  steps: [
    {
      step: "01",
      title: "We size your volume",
      body: "Tell us your monthly Meta spend. We use the $3,000-per-ad benchmark to size your batch and quote the right tier.",
    },
    {
      step: "02",
      title: "We build against your account, not a template",
      body: "Angle selection and scripts come from what's already working in your ad library — and what your best competitors are shipping that you aren't.",
    },
    {
      step: "03",
      title: "3 concepts land every Monday",
      body: "Ready to upload. No revisions queue, no creator scheduling, no waiting on edits.",
    },
    {
      step: "04",
      title: "Winners get free variants within 48 hours",
      body: "The second something beats your average, we're already cutting new hooks on it.",
    },
  ],
};

export const LEAD_MAGNET = {
  eyebrow: "No upfront cost",
  headline: "I'll build you one ad, free.",
  body: "The only condition: run it for 7 days against your current best performer and send me the numbers. If it wins, we talk about monthly supply. If it loses, you've lost nothing and I've learned something about your account.",
  fineprint: "Built on your existing best-performing angle from the ad library — not a generic template. Limited to the first four brands.",
  cta: "Claim your free ad",
};

export const FAQ = [
  {
    q: "Is this creative testing or creative supply?",
    a: "Supply. We don't hold your ad account or your performance data, so we can't hand you a statistical verdict on what wins — nobody honestly can from outside your account. What we do is make sure you're never short on concepts to put into your own testing pipeline. You run the tests; we make sure you always have something worth testing.",
  },
  {
    q: "What counts as a 'winner' for the free hook variants?",
    a: "A creative that beats your account's 30-day average CPA or ROAS for at least 3 days and $300 of spend. Up to two qualifying creatives get free variants per month.",
  },
  {
    q: "Who is this actually for?",
    a: "DTC beauty, skincare and wellness brands spending $20k+/month on Meta, running 15+ active ads, and launching 8 or fewer new creatives in the last 30 days. Where you're based doesn't matter — we work from your ad library and deliver to your inbox, so we supply brands in any market. If your account doesn't run on Meta, or your team already ships 15+ new concepts a week, we're probably not the right fit.",
  },
  {
    q: "How is pricing determined?",
    a: "By your monthly Meta spend, using the benchmark of one new ad per $3,000 spent. Higher spend means more concepts needed to keep pace, which is why tiers scale with volume, not with arbitrary plan names. Use the calculator on the pricing page to see exactly where you land.",
  },
  {
    q: "What's the 'founding rate'?",
    a: "A locked-in rate for our first three clients, conditional on sharing performance data and a testimonial once results are documented. It's locked for six months. Every client after that is on the standard rate.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No. Month-to-month, no minimum term. Half the fee is due up front, half on day 15.",
  },
  {
    q: "Do you need access to my ad account?",
    a: "Read-only access is enough for us to work from your real ad library and existing results — but it isn't required to start. An agreed reporting cadence works too.",
  },
];

export const WORK_SAMPLES_NOTE =
  "Concepts produced for skincare and beauty brands. Shown as work samples — not case studies with implied performance.";

export const FINAL_CTA = {
  headline: "Your next Monday batch could already be in production.",
  body: "Send your monthly Meta spend and we'll size your volume, quote your tier, and tell you exactly what a free ad on your best angle would look like.",
  cta: "Get one ad free",
};
