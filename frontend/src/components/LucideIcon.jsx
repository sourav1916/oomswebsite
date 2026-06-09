import React from "react";
import * as Icons from "lucide-react";

export const LucideIcon = ({ name, className = "", size }) => {
  // Safe lookup of the icon from Lucide library
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a fallback HelpCircle if the icon name is not found
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};

export default LucideIcon;
