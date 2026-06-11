import { siteConfig } from "../config/siteConfig";

export const formatWhatsAppNumber = (number) =>
  String(number ?? "").replace(/\D/g, "");

export const findContactByType = (items, type, key) => {
  if (!items?.length) return "";
  return items.find((item) => item.type === type)?.[key] ?? items[0]?.[key] ?? "";
};

const pickContactList = (apiItems, configItems) =>
  apiItems?.length ? apiItems : configItems ?? [];

export const buildContactData = (apiData) => {
  const email = pickContactList(apiData?.email, siteConfig.email);
  const phone = pickContactList(apiData?.phone, siteConfig.phone);
  const whatsapp = pickContactList(apiData?.whatsapp, siteConfig.whatsapp);
  const address = pickContactList(apiData?.address, siteConfig.address);

  const generalWhatsapp = findContactByType(whatsapp, "general", "whatsapp");

  return {
    ...siteConfig,
    email,
    phone,
    whatsapp,
    address,
    supportEmail:
      findContactByType(email, "general", "email") ||
      findContactByType(email, "technical", "email"),
    salesEmail: findContactByType(email, "sale", "email"),
    whatsappNumber: formatWhatsAppNumber(
      generalWhatsapp || findContactByType(whatsapp, "sale", "whatsapp"),
    ),
    primaryAddress:
      findContactByType(address, "head office", "address") ||
      address[0]?.address ||
      "",
  };
};
