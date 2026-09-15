export type Event = {
  slug: string;
  title: string;
  date: string; // ISO
  startTime: string;
  endTime: string;
  location: { name: string; address: string };
  description: string;
  image: string;
  rsvpUrl: string;
  free: boolean;
};

// TODO: replace with real events. RSVP links are placeholders.
export const events: Event[] = [
  {
    slug: "glow-up-day-live",
    title: "Glow-Up Day: Watch a Transformation",
    date: "2026-09-24",
    startTime: "10:00",
    endTime: "16:00",
    location: {
      name: "Dallas Animal Services",
      address: "1818 N Westmoreland Rd, Dallas, TX 75212",
    },
    description:
      "Follow along live on Instagram as this week's dog goes from pelted to polished. We'll post the before, the during, and the reveal.",
    image: "/images/events/adoption-day.svg",
    rsvpUrl: "https://instagram.com/groominggloweupproject",
    free: true,
  },
  {
    slug: "yappy-hour-october",
    title: "Yappy Hour Fundraiser",
    date: "2026-10-08",
    startTime: "17:30",
    endTime: "20:00",
    location: {
      name: "Mutts Canine Cantina",
      address: "2889 Cityplace W Blvd, Dallas, TX 75204",
    },
    description:
      "Bring your dog, grab a drink, and fund next month's glow-ups. A portion of every tab goes to the project, plus a raffle for a year of professional grooming.",
    image: "/images/events/yappy-hour.svg",
    rsvpUrl: "https://example.com/rsvp/yappy-hour",
    free: true,
  },
  {
    slug: "groomer-volunteer-orientation",
    title: "Groomer Volunteer Orientation (Virtual)",
    date: "2026-10-20",
    startTime: "18:30",
    endTime: "19:30",
    location: { name: "Online via Zoom", address: "Link sent after registration" },
    description:
      "For professional groomers who want to donate a few hours a month. What to expect on shelter grooming days, safety with fearful dogs, and how we work with the vet team.",
    image: "/images/events/foster-orientation.svg",
    rsvpUrl: "https://example.com/rsvp/groomer-orientation",
    free: true,
  },
  {
    slug: "adoption-showcase",
    title: "Glow-Up Adoption Showcase",
    date: "2026-11-07",
    startTime: "11:00",
    endTime: "15:00",
    location: {
      name: "Klyde Warren Park",
      address: "2012 Woodall Rodgers Fwy, Dallas, TX 75201",
    },
    description:
      "Meet recent glow-up dogs still looking for homes, freshly groomed and ready. Adoptions processed on site by Dallas Animal Services.",
    image: "/images/events/5k.svg",
    rsvpUrl: "https://example.com/rsvp/showcase",
    free: true,
  },
  {
    slug: "golden-hour-gala",
    title: "The Glow-Up Gala",
    date: "2026-12-05",
    startTime: "18:00",
    endTime: "22:00",
    location: { name: "The Hall on Dragon", address: "1500 Dragon St, Dallas, TX 75207" },
    description:
      "Dinner, a silent auction, and the year's transformations on the big screen. Every table sponsors a month of glow-ups.",
    image: "/images/events/gala.svg",
    rsvpUrl: "https://example.com/tickets/gala",
    free: false,
  },
  {
    slug: "holiday-market",
    title: "Holiday Market & Wishlist Drive",
    date: "2026-12-13",
    startTime: "11:00",
    endTime: "16:00",
    location: {
      name: "Dallas Farmers Market",
      address: "920 S Harwood St, Dallas, TX 75201",
    },
    description:
      "Shop local makers and fill our supply wishlist: blades, shampoos, dryers, and towels for the winter's glow-ups.",
    image: "/images/events/holiday-market.svg",
    rsvpUrl: "https://example.com/rsvp/holiday-market",
    free: true,
  },
];

export const upcomingEvents = (from = new Date()) =>
  events
    .filter((e) => new Date(e.date + "T23:59:59") >= from)
    .sort((a, b) => a.date.localeCompare(b.date));
