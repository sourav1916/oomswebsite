import {
  ShieldAlert,
  ShieldCheck,
  Heart,
  Target,
  Eye,
  Key,
  Database,
  Server,
  RefreshCw,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { TeamSection } from "../components/sections/TeamSection";

export const About = () => {
  const values = [
    {
      title: "Security First",
      desc: "Financial data requires extreme security. We utilize bank-grade encryption at rest and in transit.",
      icon: <Key className="w-5 h-5" />,
    },
    {
      title: "Operational Speed",
      desc: "No heavy scripts or local databases. OOMS runs lightweight in the cloud for instantaneous search.",
      icon: <RefreshCw className="w-5 h-5" />,
    },
    {
      title: "User Simplicity",
      desc: "Complex compliance schedules shouldn't mean complex software. Our UI is intuitive for article clerks.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Client Integrity",
      desc: "We never sell, share, or analyze your clients' proprietary tax records. Your data remains yours.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "The Genesis",
      desc: "OneSaaS was founded by CAs and cloud engineers frustrated by scattered excel-based task sheets.",
    },
    {
      year: "2022",
      title: "OOMS v1.0 Launch",
      desc: "Launched the primary task checklist system, adopted by 500 CA offices across Bangalore.",
    },
    {
      year: "2023",
      title: "Timesheets & Vault",
      desc: "Integrated attendance tracking and the encrypted Cloud Document Vault for files safety.",
    },
    {
      year: "2024",
      title: "WhatsApp Broadcasts",
      desc: "Introduced direct WhatsApp due-date notices, scaling OOMS past 6,000 active offices.",
    },
    {
      year: "2025",
      title: "ISO & Scaling",
      desc: "Secured ISO 27001 data center compliances, scaling to support 15,000+ firms nationwide.",
    },
  ];

  const securityMeasures = [
    {
      title: "256-Bit SSL Encryption",
      desc: "All sessions and data packages passing between your browser and OOMS are encrypted.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Database Isolation",
      desc: "Strict database segregation rules ensure client folders cannot be accessed by outside scopes.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "ISO Certified Servers",
      desc: "Our cloud servers are hosted in high-tier centers adhering to ISO 27001 compliance standards.",
      icon: <Server className="w-5 h-5" />,
    },
    {
      title: "Audit Trail Logs",
      desc: "Monitor exactly which junior employee edited, downloaded, or deleted any document in the vault.",
      icon: <ShieldAlert className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the origin of OOMS OneSaaS, our customer focus, core values, and strict security and compliance standards."
      />

      {/* Header */}
      <section className="pt-20 pb-16 text-center px-4 max-w-4xl mx-auto space-y-5 bg-background">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
          Our Company
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-6xl text-foreground leading-[0.95] tracking-tighter">
          Simplifying Office Administration for Practitioners
        </h1>
        <p className="text-text-sub text-lg leading-relaxed font-medium">
          OOMS is built by OneSaaS Technologies to bridge the gap between
          complex statutory Indian tax structures and daily office management
          workflows.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div className="group p-8 sm:p-10 rounded-[40px] bg-surface border border-border shadow-2xl shadow-foreground/5 flex items-start space-x-6 transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 border border-primary-200/50">
              <Eye className="w-7 h-7" />
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-black text-2xl text-foreground leading-tight tracking-tight">
                Our Vision
              </h3>
              <p className="text-text-sub text-base leading-relaxed font-medium">
                To become the standardized digital administrative operating
                system for every accounting, auditing, legal representation, and
                corporate governance firm in India.
              </p>
            </div>
          </div>

          <div className="group p-8 sm:p-10 rounded-[40px] bg-surface border border-border shadow-2xl shadow-foreground/5 flex items-start space-x-6 transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 border border-indigo-200/50">
              <Heart className="w-7 h-7" />
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-black text-2xl text-foreground leading-tight tracking-tight">
                Our Mission
              </h3>
              <p className="text-text-sub text-base leading-relaxed font-medium">
                To eliminate manual administrative friction, deadline anxieties,
                and collection delays, allowing tax professionals to focus
                entirely on advising clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 lg:py-32 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-y border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Our Foundations
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground tracking-tighter leading-[0.95]">
              The Principles Guarding Our Code
            </h2>
            <p className="text-text-sub text-lg font-medium">
              Every feature we ship, database query we compile, and security
              logic we deploy is anchored on these core values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-8 rounded-[32px] bg-surface border border-border flex flex-col items-start space-y-6 transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 shadow-xl shadow-foreground/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-950/30 text-primary-700 dark:text-primary-400 flex items-center justify-center transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 border border-primary-200/50">
                  {v.icon}
                </div>
                <h3 className="font-heading font-black text-lg text-foreground leading-tight">
                  {v.title}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed font-medium">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Data Security Standards
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground tracking-tighter leading-[0.95]">
              A Secure Safehouse For Client Documentation
            </h2>
            <p className="text-text-sub text-lg leading-relaxed font-medium">
              Practitioners handle corporate returns, salary slips, and PAN
              registries. We recognize our responsibility and maintain multiple
              isolation steps to defend files.
            </p>
            <div className="p-6 rounded-[24px] bg-amber-50 dark:bg-amber-950/20 border border-amber-500/20 text-sm text-amber-800 dark:text-amber-300 leading-relaxed flex items-start space-x-4 font-bold shadow-sm">
              <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5" />
              <span>
                We do not store plain-text login passwords. All logins use
                salted cryptographic hashes. Database servers are completely
                isolated behind secure firewall loops.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityMeasures.map((measure, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-[32px] bg-surface border border-border shadow-xl shadow-foreground/5 flex flex-col justify-between transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-success/10 dark:bg-emerald-950/30 text-success dark:text-emerald-400 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-success group-hover:text-white group-hover:scale-110 border border-success/20">
                  {measure.icon}
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-foreground mb-2">
                    {measure.title}
                  </h3>
                  <p className="text-sm text-text-sub leading-relaxed font-medium">
                    {measure.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestone Section */}
      <section className="py-20 lg:py-32 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-t border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground tracking-tighter leading-[0.95]">
              The Evolution of OneSaaS OOMS
            </h2>
            <p className="text-text-sub text-lg font-medium">
              A historical look at how a localized tool transformed into a
              nationwide corporate office management platform.
            </p>
          </div>

          {/* Timeline steps */}
          <div className="relative pl-8 sm:pl-12 border-l-4 border-muted dark:border-slate-800 space-y-16">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Milestone dot */}
                <div className="absolute -left-[42px] sm:-left-[58px] w-6 h-6 rounded-full bg-background dark:bg-slate-900 border-4 border-primary-600 group-hover:scale-125 group-hover:bg-primary-600 transition-all duration-300 shadow-lg" />
                <div className="space-y-3">
                  <span className="font-heading font-black text-base text-primary-600 dark:text-primary-400 tracking-wider">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-foreground tracking-tight">
                    {m.title}
                  </h3>
                  <p className="text-base text-text-sub leading-relaxed max-w-2xl font-medium">
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
