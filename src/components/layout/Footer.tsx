import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Logo } from "./Logo";

const give = [
  { label: "Donate", href: "/donate" },
  { label: "Foster a Glow-Up Dog", href: "/get-involved#foster" },
  { label: "Volunteer as a Groomer", href: "/get-involved#volunteer" },
  { label: "Supply Wishlist", href: siteConfig.wishlistUrl, external: true },
];

const learn = [
  { label: "Glow-Ups", href: "/transformations" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="border-line hover:border-gold hover:text-gold flex h-10 w-10 items-center justify-center border text-white/80 transition-colors"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain border-line border-t bg-black">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Logo size={56} />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <Social href={siteConfig.social.instagram} label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </Social>
              <Social href={siteConfig.social.facebook} label="Facebook">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8h3.3z" />
                </svg>
              </Social>
              <Social href={siteConfig.social.tiktok} label="TikTok">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M16.5 3c.3 2.2 1.7 3.7 3.9 3.9v3.1c-1.5 0-2.8-.5-3.9-1.3v6.4c0 3.3-2.6 5.9-5.9 5.9S4.7 18.4 4.7 15.1s2.6-5.9 5.9-5.9c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7V3h3.2z" />
                </svg>
              </Social>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h2 className="eyebrow mb-5">Give</h2>
              <ul className="flex flex-col gap-3 text-sm">
                {give.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-white/80 hover:text-white"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="link-underline text-white/80 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow mb-5">Learn</h2>
              <ul className="flex flex-col gap-3 text-sm">
                {learn.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="link-underline text-white/80 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow mb-5">Stay close</h2>
            <p className="mb-5 text-sm text-white/70">
              One email a week: this week&apos;s glow-up, before and after.
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="border-line mt-16 flex flex-col gap-4 border-t pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. A registered 501(c)(3) nonprofit. EIN{" "}
            {siteConfig.ein}.
          </p>
          <p>
            {siteConfig.city} · In partnership with{" "}
            <a
              href={siteConfig.partnerShelter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white/80"
            >
              {siteConfig.partnerShelter.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
