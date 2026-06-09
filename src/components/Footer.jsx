import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const socialIcons = {
    linkedin: <Linkedin className="w-4 h-4" />,
    twitter: <Twitter className="w-4 h-4" />,
    facebook: <Facebook className="w-4 h-4" />,
    youtube: <Youtube className="w-4 h-4" />,
  };

  return (
    <footer className="relative bg-background text-text-sub pt-16 pb-8 border-t border-border overflow-hidden dark:bg-slate-950 dark:border-slate-800">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-border dark:border-slate-800">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-primary-600 to-indigo-600 text-white shadow-lg shadow-primary-600/20">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-heading font-black text-xl tracking-tighter text-foreground">
                OOMS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-text-sub font-medium">
              The premier cloud ERP & CRM engineered exclusively for CAs, tax
              practitioners, and corporate governance firms. Automate operations
              and secure your practice.
            </p>
            {/* Socials */}
            <div className="flex items-center space-x-3">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                const icon = socialIcons[platform];
                if (!icon || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-muted hover:bg-primary-600 hover:text-white transition-all duration-300 text-text-sub hover:-translate-y-0.5 border border-border/50"
                    aria-label={`Follow us on ${platform}`}
                  >
                    {icon}
                    <span className="sr-only">Follow us on {platform}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-widest text-foreground uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: "Home Overview", path: "/" },
                { label: "Services Catalog", path: "/services" },
                { label: "Industries Served", path: "/industries" },
                { label: "Company History", path: "/about" },
                { label: "Pricing Plans", path: "/pricing" },
                { label: "Business Policy", path: "/business-policy" },
                { label: "Support & Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-widest text-foreground uppercase mb-6">
              Core Modules
            </h3>
            <ul className="space-y-3.5">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm font-medium hover:text-primary-600 transition-colors duration-200 block truncate"
                  >
                    {service.title.replace(" (CRM)", "").replace(" System", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-xs tracking-widest text-foreground uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Koramangala, Bengaluru, Karnataka
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-primary-600 shrink-0" />
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {siteConfig.supportEmail}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-primary-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneNumbers[0].replace(/\s+/g, "")}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {siteConfig.phoneNumbers[0]}
                </a>
              </li>
            </ul>

            {/* Newsletter form */}
            <div className="pt-2">
              <h4 className="font-heading font-bold text-[10px] text-foreground uppercase tracking-wider mb-3">
                Regulatory Updates Newsletter
              </h4>
              <form
                onSubmit={handleSubmit}
                className="flex relative items-center"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter firm email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-muted text-xs text-foreground rounded-xl pl-4 pr-10 py-3 border border-border focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />

                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors cursor-pointer shadow-md shadow-primary-600/20"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {submitted && (
                <p className="text-xs text-emerald-600 mt-2 flex items-center space-x-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed successfully!</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom (Certifications + Copyright) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-text-sub">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All
            rights reserved.
          </p>

          {/* Certifications Badge items */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[9px] uppercase font-black tracking-[0.15em] text-text-sub">
            <span className="px-3 py-1.5 rounded-lg border border-border bg-muted/50">
              ISO 27001 Certified
            </span>
            <span className="px-3 py-1.5 rounded-lg border border-border bg-muted/50">
              GDPR Data Compliant
            </span>
            <span className="px-3 py-1.5 rounded-lg border border-border bg-muted/50">
              256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
