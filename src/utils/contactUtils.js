import { siteConfig } from "../config/siteConfig";

export const buildContactData = (apiContact) => {
  const source = {
    ...siteConfig,
    ...(apiContact || {}),
  };

  return {
    ...source,
    email: apiContact?.email || siteConfig.email,
    phone: apiContact?.phone || siteConfig.phone,
    whatsapp: apiContact?.whatsapp || siteConfig.whatsapp,
    address: apiContact?.address || siteConfig.address,
    businessHours: apiContact?.businessHours || siteConfig.businessHours,
    socialLinks: source.socialLinks || siteConfig.socialLinks,
    services: source.services || siteConfig.services,
    industries: source.industries || siteConfig.industries,
    testimonials: source.testimonials || siteConfig.testimonials,
    faqs: source.faqs || siteConfig.faqs,
    stats: source.stats || siteConfig.stats,
    trustIndicators: source.trustIndicators || siteConfig.trustIndicators,
    teamMembers: source.teamMembers || siteConfig.teamMembers,
    websiteUrl: source.websiteUrl || siteConfig.websiteUrl,
    shortName: source.shortName || siteConfig.shortName,
    companyName: source.companyName || siteConfig.companyName,
    seoDefaults: source.seoDefaults || siteConfig.seoDefaults,
    supportEmail:
      source.email?.find((item) => item.type === "technical")?.email ||
      source.email?.[0]?.email ||
      "support@ooms.in",
    primaryAddress: source.address?.[0]?.address || "",
    whatsappNumber:
      source.whatsapp?.[0]?.whatsapp?.replace(/\D/g, "") || "919876543210",
    whatsappMessage:
      source.whatsappMessage ||
      "Hi OOMS team, I am interested in scheduling a live demo.",
  };
};
