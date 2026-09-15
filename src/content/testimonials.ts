export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  image: string;
};

// TODO: replace with real quotes from fosters, adopters, or shelter staff.
export const testimonials: Testimonial[] = [
  {
    quote:
      "You could see the moment the pelt came off. He stood up, shook, and looked at us like he'd just been let out of a cage he'd been carrying on his back.",
    name: "Foster parent",
    detail: "Butters, Glow-Up #20",
    image: "/images/transformations/butters-after.webp",
  },
  {
    quote:
      "Matted dogs get overlooked on the adoption floor. A groom changes how people see them, and more importantly, how they feel.",
    name: "Shelter staff member",
    detail: "Dallas Animal Services",
    image: "/images/story.jpg",
  },
];
