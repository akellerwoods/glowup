import { siteConfig } from "@/config/site.config";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    additionalType: "https://schema.org/NonprofitOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo-circle.png`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    taxID: siteConfig.ein,
    nonprofitStatus: "Nonprofit501c3",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
