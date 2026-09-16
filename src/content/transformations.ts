/**
 * Glow-Up gallery. Butters is real; the rest are SAMPLE entries so you can see
 * the layout. Delete the samples (or set `sample: true` entries aside) and add
 * a new entry each week. Photos go in public/images/transformations/<slug>-before.*
 * and <slug>-after.*
 */
export type Status = "adopted" | "in-foster" | "available" | "rescued";

export type Transformation = {
  slug: string;
  name: string;
  week: number;
  date: string; // ISO groom date
  breed: string;
  ageLabel: string;
  status: Status;
  hours: number; // groom duration
  sedated: boolean;
  summary: string;
  story: string;
  before: string;
  after: string;
  featured?: boolean;
  sample?: boolean;
};

export const statusLabel: Record<Status, string> = {
  adopted: "Adopted",
  "in-foster": "In foster",
  available: "Available at DAS",
  rescued: "Rescue transfer",
};

export const transformations: Transformation[] = [
  {
    slug: "butters",
    name: "Butters",
    week: 20,
    date: "2026-09-10",
    breed: "Poodle mix",
    ageLabel: "About 6 years",
    status: "in-foster",
    hours: 5,
    sedated: true,
    featured: true,
    summary:
      "Butters arrived so matted his coat had fused into a single pelt. Five hours later he could see, walk, and wag.",
    story:
      "Butters came into Dallas Animal Services with matting so severe it had wrapped around his legs and pulled at his skin with every step. His eyes were hidden. His ears were sealed shut. Our team assessed him with the shelter's veterinary staff and decided sedation was the kind thing to do; a groom this extensive would have been frightening and painful awake. Over five hours, the pelt came off in one piece, the sores underneath were cleaned and treated, and a very small, very sweet poodle mix emerged. Butters is now in a foster home instead of a kennel, healing, and learning that hands mean good things.",
    before: "/images/transformations/butters-before.webp",
    after: "/images/transformations/butters-after.webp",
  },
  {
    slug: "sample-maple",
    name: "Maple",
    week: 19,
    date: "2026-09-03",
    breed: "Shih Tzu",
    ageLabel: "About 8 years",
    status: "adopted",
    hours: 4,
    sedated: false,
    sample: true,
    summary: "Sample entry. Replace with a real weekly glow-up.",
    story:
      "This is a sample entry so you can see the layout of a transformation page. Replace the name, photos, and story with a real dog from the program, or delete it.",
    before: "/images/transformations/sample-1-before.svg",
    after: "/images/transformations/sample-1-after.svg",
  },
  {
    slug: "sample-duke",
    name: "Duke",
    week: 18,
    date: "2026-08-27",
    breed: "Doodle",
    ageLabel: "About 3 years",
    status: "adopted",
    hours: 6,
    sedated: true,
    sample: true,
    summary: "Sample entry. Replace with a real weekly glow-up.",
    story:
      "This is a sample entry so you can see the layout of a transformation page. Replace the name, photos, and story with a real dog from the program, or delete it.",
    before: "/images/transformations/sample-2-before.svg",
    after: "/images/transformations/sample-2-after.svg",
  },
  {
    slug: "sample-pearl",
    name: "Pearl",
    week: 17,
    date: "2026-08-20",
    breed: "Cocker Spaniel",
    ageLabel: "About 10 years",
    status: "rescued",
    hours: 4,
    sedated: false,
    sample: true,
    summary: "Sample entry. Replace with a real weekly glow-up.",
    story:
      "This is a sample entry so you can see the layout of a transformation page. Replace the name, photos, and story with a real dog from the program, or delete it.",
    before: "/images/transformations/sample-3-before.svg",
    after: "/images/transformations/sample-3-after.svg",
  },
  {
    slug: "sample-rocco",
    name: "Rocco",
    week: 16,
    date: "2026-08-13",
    breed: "Terrier mix",
    ageLabel: "About 5 years",
    status: "adopted",
    hours: 5,
    sedated: true,
    sample: true,
    summary: "Sample entry. Replace with a real weekly glow-up.",
    story:
      "This is a sample entry so you can see the layout of a transformation page. Replace the name, photos, and story with a real dog from the program, or delete it.",
    before: "/images/transformations/sample-4-before.svg",
    after: "/images/transformations/sample-4-after.svg",
  },
  {
    slug: "sample-olive",
    name: "Olive",
    week: 15,
    date: "2026-08-06",
    breed: "Maltese mix",
    ageLabel: "About 7 years",
    status: "adopted",
    hours: 4,
    sedated: false,
    sample: true,
    summary: "Sample entry. Replace with a real weekly glow-up.",
    story:
      "This is a sample entry so you can see the layout of a transformation page. Replace the name, photos, and story with a real dog from the program, or delete it.",
    before: "/images/transformations/sample-5-before.svg",
    after: "/images/transformations/sample-5-after.svg",
  },
];

export const sortedTransformations = [...transformations].sort((a, b) => b.week - a.week);
export const featuredTransformation =
  transformations.find((t) => t.featured) ?? sortedTransformations[0];
export const getTransformation = (slug: string) =>
  transformations.find((t) => t.slug === slug);
