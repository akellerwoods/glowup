export type TeamMember = { name: string; role: string; bio: string };

/**
 * The three partners appear together in /images/brand/partners.jpg.
 * TODO: confirm roles and bios.
 */
export const partners: TeamMember[] = [
  {
    name: "Shondra",
    role: "Co-Founder & Lead Groomer",
    bio: "Professional groomer with a specialty in severe matting and fearful dogs. Runs every glow-up day on the table.",
  },
  {
    name: "Brigette",
    role: "Co-Founder & Shelter Liaison",
    bio: "Coordinates with Dallas Animal Services to identify the dogs in the most urgent need each week.",
  },
  {
    name: "Triniti",
    role: "Co-Founder & Community Lead",
    bio: "Tells each dog's story, runs events and social, and connects glow-up dogs with fosters and adopters.",
  },
];

export const partnerOrganizations = [
  {
    name: "Dallas Animal Services",
    description: "Our shelter partner. Every dog we groom is in their care.",
    url: "https://www.dallasanimalservices.org",
  },
];

export const board = [
  { name: "TODO Board Chair", role: "Board Chair" },
  { name: "TODO Treasurer", role: "Treasurer" },
  { name: "TODO Secretary", role: "Secretary" },
];
