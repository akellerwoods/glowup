# Grooming Glow-Up Project — website

Marketing site for the Grooming Glow-Up Project, a Dallas nonprofit that provides professional
grooming for dogs entering Dallas Animal Services in urgent need of care.

Built with Next.js (App Router, TypeScript), Tailwind CSS v4, Framer Motion, and Lenis.
No CMS, no database: all content lives in typed files under `src/content`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (must pass with zero errors)
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run format     # Prettier
```

## The one file you'll update every week

**`src/content/impact.ts`** drives the impact tracker on the home page and the donate page.

```ts
export const impact = {
  since: "2026-05-05", // the day the count started
  glowUps: 20, // total dogs groomed
  placed: 19, // adopted or rescued into homes
  inFoster: 1, // in a foster home instead of at DAS
  updatedAt: "2026-09-14", // shown as "Updated Sep 14"
};
```

Change the numbers, save, deploy. The rings, the count-up, the "Week N" label, and the
placed/foster bar all recalculate.

## Organization details

Everything else that is specific to the organization is in **`src/config/site.config.ts`**:
name, tagline, description, address, phone, email, hours, social links, nav, the Dallas
Animal Services links, the wishlist URL, the EIN, and the Givebutter settings. Anything marked
`TODO` there is a placeholder.

## Givebutter donations

In Givebutter open your campaign → **Share** → **Embed** and copy two things:

1. The `src` of the `<script>` tag, e.g. `https://widgets.givebutter.com/latest.umd.cjs?acct=…&p=…`
2. The `id` on the `<givebutter-widget>` tag

Paste them into `siteConfig.givebutter.scriptSrc` and `siteConfig.givebutter.widgetId`. The
widget then renders inline on the home page and `/donate`. Until both are set, the site shows a
"Donate on Givebutter" button pointing at `siteConfig.givebutter.campaignUrl`.

## Adding a glow-up (the weekly transformation)

1. Put the two photos in `public/images/transformations/` named `<slug>-before.jpg` and
   `<slug>-after.jpg` (WebP or JPG both fine; keep them under ~1600px wide).
2. Add an entry to the top of the array in `src/content/transformations.ts`:
   slug, name, week number, groom date, breed, age, status (`available`, `in-foster`,
   `adopted`, `rescued`), hours, whether sedation was used, a one-line summary, the story,
   and the two image paths.
3. Set `featured: true` on the dog you want in the home-page before/after slider (only one).

The entries marked `sample: true` are layout samples with placeholder art. Delete them once
you have real dogs.

## Other content files

| File                          | What it holds                                                          |
| ----------------------------- | ---------------------------------------------------------------------- |
| `src/content/events.ts`       | Events list. Upcoming ones show on the home page and `/events`.        |
| `src/content/team.ts`         | The three partners (names, roles, bios), partner organizations, board. |
| `src/content/faqs.ts`         | FAQ accordion on `/how-it-works`.                                      |
| `src/content/testimonials.ts` | Quotes on `/about`.                                                    |

## Images

- `public/images/brand/logo-circle.png` — the logo (header, hero, OG image).
- `public/images/brand/partners.jpg` — the group photo, pre-cropped chest-up. The uncropped
  original is `partners-full.jpg`; re-crop from it if you swap the photo.
- Everything ending in `.svg` under `public/images` is generated placeholder art
  (`npm run images:placeholders` regenerates it). Replace any of them with a real photo of
  the same basename and update the path where it is referenced.

Unsplash is already allowed in `next.config.ts` for `next/image` if you want to pull stock
photos by URL.

## Forms

Newsletter, foster, volunteer, and contact forms are Server Actions in `src/actions/forms.ts`.
They validate with Zod and currently log to the server console. Replace the `deliver()`
function with Resend, a Google Sheet, or your CRM. Every form has a honeypot field.

## Design notes

- Palette: black `#0A0A0A`, surface `#141414`, gold `#C9A227`, light gold `#E8CC6B`, white,
  off-white `#F5F2EA`, muted `#8A8A8A`. Tokens are CSS variables in `src/app/globals.css`.
- The brand gold reads only 2.2:1 on off-white, so small gold text on light sections uses
  `--gold-deep` (`#7A5F0B`), and muted text on light sections uses `--muted-light` (`#5C5C5C`).
  Both pass 4.5:1. Brand gold is still used on light sections for rules, numerals, and large type.
- Motion respects `prefers-reduced-motion`: the preloader, smooth scroll, magnetic buttons,
  custom cursor, and counters switch off; simple fades remain.
- The preloader shows once per browser session (`sessionStorage`).

## Deploy

Any Next.js host works (Vercel is the zero-config option). Set `siteConfig.url` to the real
domain before deploying so the sitemap, Open Graph tags, and JSON-LD carry the right URLs.
