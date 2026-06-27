import { useEffect, useMemo } from "react";
import { useContactData } from "../hooks/useContactData";
import { siteConfig } from "../config/siteConfig";

export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  schema,
  breadcrumbs,
}) => {
  const contactData = useContactData();
  const metaTitle = title
    ? `${title} | ${contactData.shortName}`
    : contactData.seoDefaults.defaultTitle;
  const metaDesc = description || contactData.seoDefaults.defaultDescription;
  const currentUrl = canonicalUrl || contactData.websiteUrl;

  const organizationSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${contactData.websiteUrl}/#organization`,
      name: contactData.companyName,
      url: contactData.websiteUrl,
      logo: `${contactData.websiteUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contactData.phone[0]?.phone,
        contactType: "customer support",
        email: contactData.supportEmail,
        availableLanguage: ["en", "hi"],
      },
      sameAs: Object.values(contactData.socialLinks).filter(Boolean),
    }),
    [contactData],
  );

  const localBusinessSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${contactData.websiteUrl}/#localbusiness`,
      name: contactData.companyName,
      image: `${contactData.websiteUrl}/logo.png`,
      url: contactData.websiteUrl,
      telephone: contactData.phone[0]?.phone,
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
    }),
    [contactData],
  );

  const breadcrumbSchema = useMemo(() => {
    if (!breadcrumbs || breadcrumbs.length === 0) {
      return null;
    }
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: crumb.item.startsWith("http")
          ? crumb.item
          : `${contactData.websiteUrl}${crumb.item}`,
      })),
    };
  }, [breadcrumbs, contactData.websiteUrl]);

  useEffect(() => {
    document.title = metaTitle;

    const ensureMeta = (selector, attributes) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
    };

    const ensureLink = (selector, attributes) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("link");
        document.head.appendChild(tag);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
    };

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: metaDesc,
    });
    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: currentUrl,
    });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: ogType });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: metaTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: metaDesc });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: currentUrl });
    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: siteConfig.seoDefaults.openGraph.siteName,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${contactData.websiteUrl}/og-image.jpg`,
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: siteConfig.seoDefaults.twitter.cardType,
    });
    ensureMeta('meta[name="twitter:creator"]', {
      name: "twitter:creator",
      content: siteConfig.seoDefaults.twitter.handle,
    });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: metaTitle });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: metaDesc,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: `${contactData.websiteUrl}/og-image.jpg`,
    });
  }, [contactData.websiteUrl, currentUrl, metaDesc, metaTitle, ogType]);

  useEffect(() => {
    const upsertJsonLd = (id, data) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    upsertJsonLd("organization-schema", organizationSchema);
    upsertJsonLd("local-business-schema", localBusinessSchema);
    if (breadcrumbSchema) {
      upsertJsonLd("breadcrumb-schema", breadcrumbSchema);
    }
    if (schema) {
      upsertJsonLd("custom-schema", schema);
    }
  }, [breadcrumbSchema, localBusinessSchema, organizationSchema, schema]);

  return null;
};
