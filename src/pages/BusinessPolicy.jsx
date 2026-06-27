import { useState, useEffect, cloneElement } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  RefreshCcw,
  Lock,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  BookOpen,
  Scale,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { SEO } from "../components/SEO";

const sections = [
  {
    id: "overview",
    title: "Company Overview",
    icon: <Globe className="w-5 h-5" />,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
    content:
      "OneSaaS Technologies Private Limited is a technology company focused on developing web-based CRM and office management software. Our flagship product, OneSaaS Office Management System (OOMS), is designed for Chartered Accountants, Cost Accountants, Company Secretaries, Advocates, and professional service providers to manage their staff, clients, tasks, and finances seamlessly through a centralized platform.",
  },
  {
    id: "products",
    title: "Product and Services",
    icon: <BookOpen className="w-5 h-5" />,
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30",
    content: [
      "Subscription-based access to our OOMS web application.",
      "Custom software development for professionals.",
      "Technical support and software updates.",
      "Optional integration services (e.g., payment gateways, APIs, document signing tools).",
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Payment",
    icon: <RefreshCcw className="w-5 h-5" />,
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30",
    content: [
      "Services are offered on a subscription basis (monthly/quarterly/annually).",
      "Payments are accepted online through integrated payment gateways.",
      "Invoices and payment receipts are automatically generated via the platform.",
      "Pricing plans are available on our website and are subject to change with prior notice.",
    ],
  },
  {
    id: "refunds",
    title: "Refund & Cancellation",
    icon: <Scale className="w-5 h-5" />,
    color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30",
    content: [
      "Subscriptions may be cancelled anytime before the renewal date.",
      "Refunds will be processed only if cancellation is made within 7 days of the initial payment for first-time subscriptions.",
      "No refunds will be provided for renewals or on services already consumed.",
      "Any technical dispute must be raised within 48 hours of service disruption for refund eligibility.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: <Lock className="w-5 h-5" />,
    color: "text-rose-600 bg-rose-50 dark:bg-rose-950/30",
    content: [
      "We collect user data such as name, contact details, billing info, and business profile for account creation and platform usage.",
      "Customer data remains confidential and is not shared with any third-party except as required to provide services (e.g., payment processors, legal compliance).",
      "All data is stored securely in encrypted form and processed in accordance with the IT Act and applicable data protection laws in India.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30",
    content: [
      "The OOMS platform is licensed to subscribers for professional use only.",
      "Unauthorized reselling, reverse engineering, or hacking attempts will result in account termination and legal action.",
      "Users are responsible for the activities under their account and must maintain the confidentiality of their login credentials.",
    ],
  },
];

const BusinessPolicy = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Scroll spy implementation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection((prev) =>
              prev === section.id ? prev : section.id
            );
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SEO
        title="Business Policy & Terms"
        description="Official Business Policy of OneSaaS Technologies Private Limited (OOMS). Professional guidelines on privacy, refunds, and service terms."
      />

      {/* Hero Header */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),transparent_38%)] dark:opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-600/10 to-transparent dark:from-primary-600/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-700 dark:text-primary-400 text-xs font-black uppercase tracking-[0.2em] shadow-sm backdrop-blur-sm">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Center</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-foreground tracking-tighter leading-[0.95]">
              Business <span className="text-primary-600">Policy</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium">
              Updated July 1, 2025. This document outlines our commitment to
              transparency, security, and professional integrity in every
              interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-10">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-sub/60 mb-6 ml-4">
                  Sections
                </h3>
                <nav className="space-y-1.5">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-black transition-all duration-500 group ${activeSection === s.id
                        ? "bg-primary-600 text-white shadow-xl shadow-primary-600/25"
                        : "text-slate-600 hover:text-slate-950 hover:bg-white dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
                        }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-1.5 rounded-lg transition-colors ${activeSection === s.id ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"}`}
                        >
                          {cloneElement(s.icon, { className: "w-4 h-4" })}
                        </div>
                        <span>{s.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-500 ${activeSection === s.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                      />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-slate-900 dark:bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-900/30 border border-white/5">
                <h4 className="font-heading font-black text-lg leading-tight tracking-tight">
                  Need Legal Clarification?
                </h4>
                <p className="text-primary-50 leading-relaxed text-base font-medium opacity-90">
                  Our compliance team is available to discuss enterprise
                  licensing and data agreements.
                </p>
                <a
                  href="mailto:contact@onesaas.in"
                  className="inline-flex items-center space-x-2 text-sm font-black text-primary-400 hover:text-primary-300 transition-colors uppercase tracking-widest"
                >
                  <span>Email Compliance</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Content */}
          <main className="lg:col-span-9 space-y-24">
            {sections.map((section, idx) => (
              <motion.div
                id={section.id}
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.05 }}
                className="scroll-mt-28"
              >
                <div className="flex items-center space-x-5 mb-8 ml-2">
                  <div
                    className={`p-4 rounded-2xl ${section.color} border border-current/10 shadow-lg`}
                  >
                    {cloneElement(section.icon, { className: "w-6 h-6" })}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground tracking-tighter">
                    {section.title}
                  </h2>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[48px] p-8 sm:p-12 shadow-xl shadow-slate-200/40 dark:shadow-slate-950/30 hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden group">
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 opacity-[0.04] transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-12 ${section.color.split(" ")[0]}`}
                  >
                    {cloneElement(section.icon, {
                      className: "w-full h-full",
                    })}
                  </div>

                  {typeof section.content === "string" ? (
                    <p className="text-slate-800 dark:text-slate-100 leading-relaxed text-xl font-bold border-l-4 border-primary-600/30 pl-8">
                      {section.content}
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      {section.content.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-5 p-6 rounded-[24px] bg-slate-50 border border-slate-200/70 dark:bg-slate-950/40 dark:border-slate-800/70 group/item transition-all duration-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:border-primary-500/20"
                        >
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-primary-600/20">
                            {i + 1}
                          </div>
                          <span className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-bold group-hover/item:text-slate-950 dark:group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Compliance Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-600 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-600/30"
              >
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <ShieldCheck className="w-40 h-40" />
                </div>
                <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl font-heading font-black tracking-tighter leading-tight">
                    Compliance Status
                  </h3>
                  <p className="text-primary-50 leading-relaxed text-base font-medium opacity-90">
                    Our software and services comply with applicable Indian IT
                    laws, tax laws, and data privacy norms. We undergo regular
                    audits to maintain ISO 27001 standards.
                  </p>
                  <div className="pt-6 border-t border-white/20 flex flex-col space-y-3">
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary-200">
                      Registration Details
                    </span>
                    <span className="text-xs font-mono font-black tracking-wider bg-white/10 px-3 py-1.5 rounded-lg inline-block w-fit">
                      CIN: U46512AS2024PTC026214
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[40px] p-10 shadow-xl shadow-slate-200/40 dark:shadow-slate-950/30 relative flex flex-col justify-between"
              >
                <h3 className="text-3xl font-heading font-black text-foreground tracking-tighter mb-8 leading-tight">
                  Official Contact
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                      <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-text-sub uppercase tracking-widest mb-1.5">
                        Registered Office
                      </h4>
                      <p className="text-base text-slate-900 dark:text-slate-100 font-black leading-relaxed">
                        H. No. 356, Vill. Nagajan Niz, Kharupetiaghat, Darrang,
                        Assam 784115
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-500/20 transition-all duration-500 shadow-sm dark:bg-slate-950 dark:border-slate-800">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-black text-slate-900 dark:text-slate-100 truncate">
                        contact@onesaas.in
                      </span>
                    </div>
                    <div className="flex items-center space-x-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-500/20 transition-all duration-500 shadow-sm dark:bg-slate-950 dark:border-slate-800">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-black text-slate-900 dark:text-slate-100">
                        +91-7002695990
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </section>

      {/* Modern Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto rounded-[48px] bg-slate-950 p-12 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-slate-950/20 dark:bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-whitetext-background tracking-tighter leading-[0.95]">
              Ready to automate your practice under professional guidelines?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-[20px] bg-primary-600 text-white font-heading font-black shadow-2xl shadow-primary-600/30 hover:bg-primary-700 hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 text-lg"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-10 py-5 rounded-[20px] bg-background/10 border border-background/20 !text-white font-heading font-black hover:bg-background/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 text-lg group"
              >
                <span>View Pricing Plans</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPolicy;
