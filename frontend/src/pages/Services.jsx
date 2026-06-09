import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  MessageSquare,
  CreditCard,
  Mail,
  Settings,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { siteConfig } from "../config/siteConfig";
import { LucideIcon } from "../components/LucideIcon";

export const Services = () => {
  const integrations = [
    {
      title: "WhatsApp API Gateway",
      desc: "Direct templates dispatch for due date filings and payment receipts.",
      icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Payment Gates (UPI/Cards)",
      desc: "Integrate Razorpay or custom links inside outstanding invoices.",
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: "Custom Email Server (SES)",
      desc: "Broadcast structural tax alerts using your own SMTP credentials.",
      icon: <Mail className="w-5 h-5 text-sky-600" />,
    },
    {
      title: "Automated Reminders API",
      desc: "Auto trigger warnings 3 days prior to monthly GST GSTR-3B lines.",
      icon: <Settings className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <>
      <SEO
        title="Services & Modules"
        description="Explore OOMS modules including CRM, task automation, article clerk timesheets, finance management, and WhatsApp alerts."
      />

      {/* Header */}
      <section className="pt-20 pb-16 text-center px-4 max-w-4xl mx-auto space-y-5 bg-background">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
          Platform Suite
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-6xl text-foreground leading-[0.95] tracking-tighter">
          Everything You Need to Manage Your Firm
        </h1>
        <p className="text-text-sub text-lg leading-relaxed font-medium">
          From tracking multi-stage audits to collecting outstanding fees, OOMS
          maps your offline office hierarchy into a robust, high-performance
          workspace.
        </p>
      </section>

      {/* Services detailed catalog list */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group p-8 sm:p-10 rounded-[32px] bg-surface border border-border shadow-xl shadow-foreground/5 flex flex-col justify-between transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 border border-primary-200/50">
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-sub/60">
                    OOMS Module
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-black text-2xl text-foreground leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-text-sub text-base leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Short bullet features check */}
                <div className="space-y-3 bg-muted/50 dark:bg-slate-950/50 rounded-[24px] p-6 border border-border dark:border-slate-900">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 text-sm text-foreground leading-relaxed font-bold"
                    >
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border mt-10 flex items-center justify-between">
                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 text-sm font-black text-primary-600 dark:text-primary-400 hover:text-primary-800 transition-colors uppercase tracking-widest"
                >
                  <span>Explore module details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Highlights */}
      <section className="py-20 lg:py-32 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-t border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Smart Ecosystem
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground tracking-tighter leading-[0.95]">
              Connect With Your Daily Work Tools
            </h2>
            <p className="text-text-sub text-lg leading-relaxed font-medium">
              OOMS integrates with communication channels, SMS routers, and
              payment networks to automate manual billing and verification
              chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-surface rounded-[32px] border border-border shadow-xl shadow-foreground/5 space-y-6 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-muted dark:bg-slate-950 flex items-center justify-center border border-border dark:border-slate-900 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-base text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-sub leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
