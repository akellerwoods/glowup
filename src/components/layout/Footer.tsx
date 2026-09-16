import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const give = [
  { label: "Sponsor a Week", href: "/donate" },
  { label: "Foster", href: "/get-involved#foster" },
  { label: "Volunteer", href: "/get-involved#volunteer" },
  { label: "Supply Wishlist", href: siteConfig.wishlistUrl, external: true },
];

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const cls = "text-sm text-bone/75 transition-colors hover:text-gold";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-hairline border-t">
      <Container className="py-14 sm:py-22">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src="/images/brand/logo-circle.png" alt="" width={96} height={96} />
            <p className="font-display text-champagne mt-8 max-w-[26ch] text-xl italic">
              {siteConfig.oneLine}
            </p>
            <p className="text-bone/60 mt-6 max-w-[48ch] text-sm">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-4">
            <div>
              <p className="label rule text-gold pt-4">Explore</p>
              <ul className="mt-5 flex flex-col gap-3">
                {[...siteConfig.nav, ...siteConfig.footerNav].map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label rule text-gold pt-4">Give</p>
              <ul className="mt-5 flex flex-col gap-3">
                {give.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} external={l.external}>
                      {l.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="label rule text-gold pt-4">Weekly glow-up email</p>
            <p className="text-bone/60 mt-5 text-sm">
              One email a week: this week&apos;s dog, before and after.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {Object.entries(siteConfig.social).map(([k, v]) => (
                <li key={k}>
                  <a
                    href={v}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-bone/60 hover:text-gold text-[0.6875rem] transition-colors"
                  >
                    {k}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-hairline text-bone/50 mt-14 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
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
              className="text-bone/75 hover:text-gold"
            >
              {siteConfig.partnerShelter.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
