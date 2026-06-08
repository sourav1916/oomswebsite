import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
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
    <footer className="relative bg-slate-900 text-muted-foreground pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-primary-500 to-indigo-500 text-white">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                OOMS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The premier cloud ERP & CRM engineered exclusively for CAs, tax practitioners, and corporate governance firms. Automate operations and secure your practice.
            </p>
            {/* Socials */}
            <div className="flex items-center space-x-3">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                const icon = socialIcons[platform as keyof typeof socialIcons];
                if (!icon || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-primary-600 hover:text-white transition-all duration-300 text-muted-foreground hover:-translate-y-0.5"
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
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors duration-200">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors duration-200">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm hover:text-white transition-colors duration-200">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors duration-200">
                  Company History
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors duration-200">
                  Support & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase mb-6">
              Core Modules
            </h3>
            <ul className="space-y-3.5">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm hover:text-white transition-colors duration-200 block truncate"
                  >
                    {service.title.replace(' (CRM)', '').replace(' System', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-1" />
                <span className="leading-relaxed">Koramangala, Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.supportEmail}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <a href={`tel:${siteConfig.phoneNumbers[0].replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phoneNumbers[0]}
                </a>
              </li>
            </ul>

            {/* Newsletter form */}
            <div className="pt-2">
              <h4 className="font-heading font-bold text-xs text-white uppercase mb-2.5">
                Regulatory Updates Newsletter
              </h4>
              <form onSubmit={handleSubmit} className="flex relative items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter firm email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 text-xs text-white rounded-lg pl-3 pr-9 py-2.5 border border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 rounded-md bg-primary-600 hover:bg-primary-500 text-white transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {submitted && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed successfully!</span>
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Footer Bottom (Certifications + Copyright) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>

          {/* Certifications Badge items */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
            <span className="px-2.5 py-1 rounded border border-slate-800 bg-slate-900/50">
              ISO 27001 Certified
            </span>
            <span className="px-2.5 py-1 rounded border border-slate-800 bg-slate-900/50">
              GDPR Data Compliant
            </span>
            <span className="px-2.5 py-1 rounded border border-slate-800 bg-slate-900/50">
              256-Bit SSL Encrypted
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
