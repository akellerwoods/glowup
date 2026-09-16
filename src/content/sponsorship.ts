/** What a gift covers. Shown on the home page and /donate as a hairline-ruled table. */
export const tiers = [
  { amount: "$25", what: "Medicated shampoo and conditioner for one dog" },
  { amount: "$75", what: "Specialty blades and tools for a pelted coat" },
  { amount: "$150", what: "A full professional groom, start to finish" },
  {
    amount: "$300",
    what: "Sponsor a week: a full groom with veterinary sedation for a dog in pain, and your name on the before-and-after we publish",
  },
] as const;
