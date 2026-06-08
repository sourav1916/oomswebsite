import React from 'react';
import { ShieldAlert, ShieldCheck, Heart, Target, Eye, Key, Database, Server, RefreshCw } from 'lucide-react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/siteConfig';
import { TeamSection } from '../components/sections/TeamSection';

export const About: React.FC = () => {
  const values = [
    { title: 'Security First', desc: 'Financial data requires extreme security. We utilize bank-grade encryption at rest and in transit.', icon: <Key className="w-5 h-5" /> },
    { title: 'Operational Speed', desc: 'No heavy scripts or local databases. OOMS runs lightweight in the cloud for instantaneous search.', icon: <RefreshCw className="w-5 h-5" /> },
    { title: 'User Simplicity', desc: 'Complex compliance schedules shouldn\'t mean complex software. Our UI is intuitive for article clerks.', icon: <Target className="w-5 h-5" /> },
    { title: 'Client Integrity', desc: 'We never sell, share, or analyze your clients\' proprietary tax records. Your data remains yours.', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const milestones = [
    { year: '2021', title: 'The Genesis', desc: 'OneSaaS was founded by CAs and cloud engineers frustrated by scattered excel-based task sheets.' },
    { year: '2022', title: 'OOMS v1.0 Launch', desc: 'Launched the primary task checklist system, adopted by 500 CA offices across Bangalore.' },
    { year: '2023', title: 'Timesheets & Vault', desc: 'Integrated attendance tracking and the encrypted Cloud Document Vault for files safety.' },
    { year: '2024', title: 'WhatsApp Broadcasts', desc: 'Introduced direct WhatsApp due-date notices, scaling OOMS past 6,000 active offices.' },
    { year: '2025', title: 'ISO & Scaling', desc: 'Secured ISO 27001 data center compliances, scaling to support 15,000+ firms nationwide.' },
  ];

  const securityMeasures = [
    { title: '256-Bit SSL Encryption', desc: 'All sessions and data packages passing between your browser and OOMS are encrypted.', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: 'Database Isolation', desc: 'Strict database segregation rules ensure client folders cannot be accessed by outside scopes.', icon: <Database className="w-5 h-5" /> },
    { title: 'ISO Certified Servers', desc: 'Our cloud servers are hosted in high-tier centers adhering to ISO 27001 compliance standards.', icon: <Server className="w-5 h-5" /> },
    { title: 'Audit Trail Logs', desc: 'Monitor exactly which junior employee edited, downloaded, or deleted any document in the vault.', icon: <ShieldAlert className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about the origin of OOMS OneSaaS, our customer focus, core values, and strict security and compliance standards." 
      />

      {/* Header */}
      <section className="pt-16 pb-12 text-center px-4 max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
          Our Company
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground leading-tight">
          Simplifying Office Administration for Practitioners
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          OOMS is built by OneSaaS Technologies to bridge the gap between complex statutory Indian tax structures and daily office management workflows.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-8 rounded-3xl bg-surface border border-border shadow-xl flex items-start space-x-5 transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-xl text-foreground">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become the standardized digital administrative operating system for every accounting, auditing, legal representation, and corporate governance firm in India.
              </p>
            </div>
          </div>

          <div className="group p-8 rounded-3xl bg-surface border border-border shadow-xl flex items-start space-x-5 transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-xl text-foreground">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To eliminate manual administrative friction, deadline anxieties, and collection delays, allowing tax professionals to focus entirely on advising clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Our Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              The Principles Guarding Our Code
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Every feature we ship, database query we compile, and security logic we deploy is anchored on these core values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-3xl bg-surface border border-slate-200/60 dark:border-slate-800 flex flex-col items-start space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-heading font-extrabold text-base text-foreground leading-snug">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Security Architecture Section (Important for CAs) */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Data Security Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
              A Secure Safehouse For Client Documentation
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Practitioners handle corporate returns, salary slips, and PAN registries. We recognize our responsibility and maintain multiple isolation steps to defend files.
            </p>
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-500/10 text-xs text-amber-700 dark:text-amber-300 leading-relaxed flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
              <span>We do not store plain-text login passwords. All logins use salted cryptographic hashes. Database servers are completely isolated behind secure firewall loops.</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityMeasures.map((measure, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-surface border border-border shadow-md flex flex-col justify-between">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  {measure.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1">
                    {measure.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {measure.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Milestone Section */}
      <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              The Evolution of OneSaaS OOMS
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A historical look at how a localized tool transformed into a nationwide corporate office management platform.
            </p>
          </div>

          {/* Timeline steps */}
          <div className="relative pl-6 sm:pl-8 border-l border-border space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Milestone dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-surface border-4 border-primary-500 group-hover:scale-125 transition-transform" />
                <div className="space-y-2">
                  <span className="font-heading font-extrabold text-sm text-primary-600 dark:text-primary-400">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {m.desc}
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

export default About;
