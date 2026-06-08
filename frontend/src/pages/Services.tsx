import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageSquare, CreditCard, Mail, Settings } from 'lucide-react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/siteConfig';
import { LucideIcon } from '../components/LucideIcon';

export const Services: React.FC = () => {
  const integrations = [
    { title: 'WhatsApp API Gateway', desc: 'Direct templates dispatch for due date filings and payment receipts.', icon: <MessageSquare className="w-5 h-5 text-emerald-500" /> },
    { title: 'Payment Gates (UPI/Cards)', desc: 'Integrate Razorpay or custom links inside outstanding invoices.', icon: <CreditCard className="w-5 h-5 text-indigo-500" /> },
    { title: 'Custom Email Server (SES)', desc: 'Broadcast structural tax alerts using your own SMTP credentials.', icon: <Mail className="w-5 h-5 text-sky-500" /> },
    { title: 'Automated Reminders API', desc: 'Auto trigger warnings 3 days prior to monthly GST GSTR-3B lines.', icon: <Settings className="w-5 h-5 text-amber-500" /> },
  ];

  return (
    <>
      <SEO 
        title="Services & Modules" 
        description="Explore OOMS modules including CRM, task automation, article clerk timesheets, finance management, and WhatsApp alerts." 
      />

      {/* Header */}
      <section className="pt-16 pb-12 text-center px-4 max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
          Platform Suite
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground leading-tight">
          Everything You Need to Manage Your Firm
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          From tracking multi-stage audits to collecting outstanding fees, OOMS maps your offline office hierarchy into a robust, high-performance workspace.
        </p>
      </section>

      {/* Services detailed catalog list */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-3xl bg-surface border border-border shadow-lg flex flex-col justify-between transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 flex items-center justify-center shadow-sm transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                    <LucideIcon name={service.iconName} className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground dark:text-muted-foreground">
                    OOMS Module
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-xl text-foreground leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Short bullet features check */}
                <div className="space-y-2 bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-900">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6 flex items-center justify-between">
                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-800 transition-colors"
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
      <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Smart Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Connect With Your Daily Work Tools
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              OOMS integrates with communication channels, SMS routers, and payment networks to automate manual billing and verification chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface rounded-3xl border border-border shadow-md space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-100 dark:border-slate-900 shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-sm text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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
