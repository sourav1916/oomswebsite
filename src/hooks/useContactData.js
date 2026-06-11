import React, { createContext, useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getContactDetails } from "../services/contactService";
import { buildContactData } from "../utils/contactUtils";

const ContactDataContext = createContext(null);

export const ContactDataProvider = ({ children }) => {
  const { data: apiContact } = useQuery({
    queryKey: ["contactDetails"],
    queryFn: getContactDetails,
    staleTime: 1000 * 60 * 10, // cache for 10 minutes
  });

  const contactData = useMemo(() => buildContactData(apiContact), [apiContact]);

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

