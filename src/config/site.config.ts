/**
 * Everything organization-specific lives here.
 * Change these values and the whole site updates.
 * The impact tracker numbers live separately in src/content/impact.ts.
 */
export const siteConfig = {
  name: "Grooming Glow-Up Project",
  shortName: "Glow-Up Project",
  tagline: "Every dog deserves a glow-up.",
  description:
    "We provide professional grooming for dogs who enter Dallas Animal Services in need of urgent grooming care, offering relief from pain and a path toward adoption.",
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
   * Leave either blank and the site shows a plain "Donate on Givebutter" button
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
    instagram: "https://instagram.com/groominggloweupproject",
    facebook: "https://facebook.com/groominggloweupproject",
    tiktok: "https://tiktok.com/@groominggloweupproject",
  },
  nav: [
    { label: "Glow-Ups", href: "/transformations" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
