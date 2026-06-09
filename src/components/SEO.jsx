import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/siteConfig";

export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  schema,
  breadcrumbs,
}) => {
  const metaTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.seoDefaults.defaultTitle;
  const metaDesc = description || siteConfig.seoDefaults.defaultDescription;
  const currentUrl = canonicalUrl || siteConfig.websiteUrl;

  // JSON-LD Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.websiteUrl}/#organization`,
    name: siteConfig.companyName,
    url: siteConfig.websiteUrl,
    logo: `${siteConfig.websiteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneNumbers[0],
      contactType: "customer support",
      email: siteConfig.supportEmail,
      availableLanguage: ["en", "hi"],
    },
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
  };

  // JSON-LD Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.websiteUrl}/#localbusiness`,
    name: siteConfig.companyName,
    image: `${siteConfig.websiteUrl}/logo.png`,
    url: siteConfig.websiteUrl,
    telephone: siteConfig.phoneNumbers[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, Innovation Wing, Koramangala Inner Ring Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560034",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9237731,
      longitude: 77.6221193,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  // JSON-LD Breadcrumb Schema
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: crumb.item.startsWith("http")
          ? crumb.item
          : `${siteConfig.websiteUrl}${crumb.item}`,
      })),
    };
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={currentUrl} />
      <meta
        property="og:site_name"
        content={siteConfig.seoDefaults.openGraph.siteName}
      />
      <meta
        property="og:image"
        content={`${siteConfig.websiteUrl}/og-image.jpg`}
      />

      {/* Twitter Cards */}
      <meta
        name="twitter:card"
        content={siteConfig.seoDefaults.twitter.cardType}
      />
      <meta
        name="twitter:creator"
        content={siteConfig.seoDefaults.twitter.handle}
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta
        name="twitter:image"
        content={`${siteConfig.websiteUrl}/og-image.jpg`}
      />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};
