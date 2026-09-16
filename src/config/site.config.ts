/**
 * Everything organization-specific lives here.
 * Change these values and the whole site updates.
 * The impact tracker numbers live separately in src/content/impact.ts.
 *
 * Copy marked "approved" is from Brand Standards v1.0 §10. Use it verbatim.
 */
export const siteConfig = {
  name: "Grooming Glow-Up Project",
  shortName: "Glow-Up Project",
  tagline: "One dog a week, every week of the year.",
  /** Approved one-liner: email signatures, footers. */
  oneLine: "52 dogs. 52 transformations. 52 second chances. Every year.",
  /** Approved short bio (social, meta description). */
  description:
    "Dallas nonprofit sponsoring professional grooming for one neglected shelter dog every week, with Dallas Animal Services. 52 dogs. 52 second chances.",
  /** Approved full boilerplate: website, press, grant applications. */
  boilerplate: [
    "Grooming Glow-Up Project is a Dallas-based nonprofit dedicated to transforming the lives of neglected shelter dogs through professional grooming.",
    "In partnership with Dallas Animal Services, we sponsor professional grooming services for one dog each week, providing 52 dogs per year with the care they need to look, feel, and live better.",
    "All dogs selected for the program suffer from severe matting, overgrown coats, and grooming-related neglect. Professional grooming relieves discomfort, improves quality of life, and helps these dogs put their best paw forward as they search for adoptive families.",
    "Our mission is simple: 52 dogs. 52 transformations. 52 second chances. Every year.",
  ],
  url: "https://groominggloweupproject.org", // TODO: real domain
  founded: 2026,
  city: "Dallas, Texas",
  ein: "00-0000000", // TODO: replace with the organization's real EIN
  address: {
    street: "P.O. Box 0000", // TODO
    city: "Dallas",
    state: "TX",
    zip: "75201",
    country: "US",
  },
  phone: "(214) 555-0100", // TODO
  email: "hello@groominggloweupproject.org", // TODO
  hours: [
    { days: "Grooming days", time: "By appointment with Dallas Animal Services" },
    { days: "Email & messages", time: "Answered within 48 hours" },
  ],
  partnerShelter: {
    name: "Dallas Animal Services",
    shortName: "DAS",
    adoptUrl: "https://www.dallasanimalservices.org/adopt",
    url: "https://www.dallasanimalservices.org",
  },
  /**
   * Givebutter embed. In Givebutter: Campaign → Share → Embed → copy the
   * `<script src="...">` URL and the `<givebutter-widget id="...">` id.
   * Leave either blank and the site shows a plain "Sponsor on Givebutter" button
   * pointing at `campaignUrl` instead.
   */
  givebutter: {
    scriptSrc: "", // e.g. "https://widgets.givebutter.com/latest.umd.cjs?acct=XXXXXXXX&p=XXXXXXXX"
    widgetId: "", // e.g. "AbCdEf"
    campaignUrl: "https://givebutter.com/grooming-glow-up-project", // TODO: real campaign URL
  },
  // TODO: real supply wishlist link (Amazon, Chewy, etc.)
  wishlistUrl: "https://www.amazon.com/hz/wishlist/ls/GROOMINGGLOWUP",
  social: {
    instagram: "https://www.instagram.com/groomingglowupproject",
    facebook: "https://facebook.com/groominggloweupproject",
    tiktok: "https://tiktok.com/@groominggloweupproject",
  },
  nav: [
    { label: "The Project", href: "/about" },
    { label: "The 52", href: "/the-52" },
    { label: "Transformations", href: "/transformations" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Partners", href: "/partners" },
  ],
  cta: { label: "Sponsor a Week", href: "/donate" },
  footerNav: [
    { label: "Get Involved", href: "/get-involved" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
