import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getContactDetails } from "../services/contactService";
import { buildContactData } from "../utils/contactUtils";
import { siteConfig } from "../config/siteConfig";

const ContactDataContext = createContext(null);

export const ContactDataProvider = ({ children }) => {
  const { pathname } = useLocation();
  const shouldFetchContact = pathname.startsWith("/contact");
  const { data: apiContact } = useQuery({
    queryKey: ["contactDetails"],
    queryFn: getContactDetails,
    enabled: shouldFetchContact,
    staleTime: 1000 * 60 * 10, // cache for 10 minutes
  });

  const contactData = useMemo(
    () => buildContactData(apiContact || siteConfig),
    [apiContact],
  );

  return React.createElement(
    ContactDataContext.Provider,
    { value: contactData },
    children,
  );
};


export const useContactData = () => {
  const context = useContext(ContactDataContext);
  if (!context) {
    throw new Error("useContactData must be used within a ContactDataProvider");
  }
  return context;
};

