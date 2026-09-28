/* ============================================================================
 * /implementations — content
 * ============================================================================
 *
 * An UNLISTED page: not in the nav, footer or any sitemap, not linked from the
 * main site, noindex + Disallow in robots.txt. It's a different buyer and a
 * different product from the main site.
 *
 * RULES FOR THIS FILE
 * - Quote-only. No price, range or "from" figure in any currency.
 * - Do NOT put internal pricing for this arm anywhere in the repo — not here,
 *   not in comments, not in an env file. Everything in a Vite build ships to
 *   the browser and is readable in dev tools.
 * - Do not mention the creative retainer, "concepts", the Drop,
 *   Founding/Standard, or Meta ad testing.
 *
 * Sections with an empty array render nothing. That's deliberate for PROOF
 * (no case studies until real ones exist) and for HOW_IT_WORKS / WHO_FOR,
 * whose copy wasn't supplied — paste it in and the sections appear.
 * ========================================================================== */

export const HERO = {
  heading: "Creative gets attention. The system catches it.",
  body: [
    "Most businesses lose the sale after the hard part. The post worked, the ad worked, someone got in touch — and then the DM sat unanswered, the site couldn't take the order, the lead from March never heard back.",
    "We build both halves: the creative that brings people in, and the system that turns them into money.",
  ],
  cta: "Tell us what's broken",
};

/** "How this works" — four numbered steps. Copy not supplied yet. */
export const HOW_IT_WORKS: { title: string; body: string }[] = [];

export type Stage = {
  label: string;
  line: string;
  items: { title: string; body: string }[];
};

export const STAGES: Stage[] = [
  {
    label: "Capture",
    line: "Somewhere for people to buy",
    items: [
      {
        title: "Conversion websites and store pages.",
        body: "Built to take orders or enquiries, not to win a design award.",
      },
      {
        title: "WhatsApp ordering and routing.",
        body: "Orders land in one place. Nothing sits unanswered because it came in at 11pm.",
      },
    ],
  },
  {
    label: "Convert",
    line: "Nothing falls through",
    items: [
      {
        title: "Lead capture automation.",
        body: "Every enquiry — from your site, ads, Instagram or WhatsApp — lands in one place you actually check, with an alert.",
      },
      {
        title: "Appointment booking.",
        body: "Calendar, confirmation and reminders, for businesses that sell time.",
      },
      {
        title: "Lead reactivation.",
        body: "You already have a list of people who nearly bought. We go back to it.",
      },
    ],
  },
  {
    label: "Attract",
    line: "The creative",
    items: [
      {
        title: "Product imagery and copy.",
        body: "Phone shots turned into something that holds up next to an imported brand.",
      },
      {
        title: "Static ad creative.",
        body: "Built for the feed, not the portfolio.",
      },
      {
        title: "Cinematic video.",
        body: "Short, product-led, made to stop the scroll.",
      },
      {
        title: "Motion graphics.",
        body: "For when the product needs explaining.",
      },
    ],
  },
  {
    label: "Keep",
    line: "It keeps working",
    items: [
      {
        title: "Monthly care.",
        body: "Hosting, fixes, small changes, and the automations kept running.",
      },
    ],
  },
];

/** Package names double as the form's options, so they must match exactly. */
export const PACKAGES = [
  {
    name: "Get Selling",
    for: "For businesses still selling out of DMs.",
    items: ["Website or store page", "WhatsApp ordering", "Product imagery and copy"],
  },
  {
    name: "Catch Every Lead",
    for: "For businesses getting enquiries and losing them.",
    items: [
      "Website or store page",
      "Lead capture automation",
      "Booking or lead reactivation",
      "One batch of creative",
    ],
  },
  {
    name: "Full System",
    for: "For businesses ready to spend on growth.",
    items: [
      "Everything in Catch Every Lead",
      "Monthly creative — statics, video or motion as needed",
      "Monthly care",
    ],
  },
] as const;

export type PackageName = (typeof PACKAGES)[number]["name"];

/** "Closest to what you need" — the form's radio options, in order. */
export const NEED_OPTIONS = [
  ...PACKAGES.map((p) => p.name),
  "Just one piece",
  "Not sure yet",
] as const;

export type NeedOption = (typeof NEED_OPTIONS)[number];

/** Live sites we've built. Descriptions state what the site does, never results. */
export const RECENT_BUILDS = [
  {
    name: "MacBite",
    url: "https://www.macbite.com.ng/",
    domain: "macbite.com.ng",
    image: "/work/macbite.jpg",
    description:
      "Restaurant ordering site — full menu, cart, and delivery or pickup across Ibadan.",
  },
  {
    name: "The Yemi Farounbi Colloquium",
    url: "https://www.tyfcolloquium.org/",
    domain: "tyfcolloquium.org",
    image: "/work/tyf-colloquium.jpg",
    description:
      "Events and research site — event pages with registration, reports and awards.",
  },
];

/** "Who this is for" — copy not supplied yet. */
export const WHO_FOR: string[] = [];

/** Case studies. Stays EMPTY until real ones exist — no placeholders. */
export const PROOF: { title: string; summary: string }[] = [];

export const QUOTE = {
  heading: "Every build is different, so we quote every build.",
};
