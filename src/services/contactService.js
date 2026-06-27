import { siteConfig } from "../config/siteConfig";
import apiCall from "../utils/apiCall";

export const getContactDetails = async () => {
  const response = await apiCall("/contact", "GET");
  if (!response.ok) {
    throw new Error("Failed to load contact details");
  }

  const payload = await response.json();
  return payload?.data ?? payload ?? siteConfig;
};

export default getContactDetails;
