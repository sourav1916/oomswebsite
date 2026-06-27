import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2,
  MessageSquare,
  Plus,
  Minus,
  Star,
} from "lucide-react";
import { useContactData } from "../hooks/useContactData";
import { SEO } from "../components/SEO";
import { LucideIcon } from "../components/LucideIcon";
import { AnimatedCounter } from "../components/AnimatedCounter";

export const Home = () => {
  const contactData = useContactData();
  const [activeTab, setActiveTab] = useState(contactData.industries[0].id);
  const [openFaq, setOpenFaq] = useState(null);

  const loginUrl = import.meta.env.REACT_APP_OOMS_LOGIN_URL || "https://ooms.in/login";
  const registerUrl = import.meta.env.REACT_APP_OOMS_REGISTER_URL || "https://ooms.in/register";

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Mock dashboard stats for the hero interactive illustration
  const mockTasks = [
    {
      title: "GSTR-3B Filing",
      client: "Alpha Corp Ltd",
      status: "Completed",
      color: "bg-emerald-500 text-emerald-500",
    },
    {
      title: "ITR-6 Tax Audit",
      client: "Sharma & Sons",
      status: "Under Review",
      color: "bg-indigo-500 text-indigo-500",
    },
    {
      title: "TDS Quarter 1",
      client: "Zeta Technologies",
      status: "Pending Client",
      color: "bg-amber-500 text-amber-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const sectionIconWrapper =
    "w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 border border-primary-200/50";

  const trustIconWrapper =
    "w-10 h-10 rounded-xl bg-success/10 dark:bg-emerald-950/40 text-success dark:text-emerald-400 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-success group-hover:text-white group-hover:scale-110 border border-success/20";

  const industryIconWrapper =
    "w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 border border-indigo-200/50";

  return (
    <>
      <SEO title="Home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-background">
        {/* Glow dots decoration - Refined for light mode */}
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-primary-500/5 dark:bg-primary-600/10 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-50 text-primary-700 dark:text-primary-400 text-xs uppercase tracking-widest font-black font-heading shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Version 4.0 Launch</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tighter leading-[0.95] text-foreground"
            >
              Automate Your Practice.{" "}
              <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">
                Secure
              </span>{" "}
              Your Clients.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-sub max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              India's most trusted cloud-based ERP & CRM system built
              exclusively for Chartered Accountants, corporate legal teams, and
              tax practitioners. Zero spreadsheets, zero deadline slips.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 sm:gap-5"
            >
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-black shadow-xl shadow-primary-600/30 transition-all duration-300 hover:-translate-y-1 active:scale-95 min-h-[56px]"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-2xl bg-muted hover:bg-surface-hover text-foreground border border-border font-heading font-black transition-all duration-300 hover:-translate-y-1 active:scale-95 min-h-[56px]"
              >
                Login Now
              </a>
            </motion.div>

            {/* Key mini metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start space-x-6 border-t border-border pt-8"
            >
              <div className="flex items-center space-x-2 text-[10px] font-black text-text-sub uppercase tracking-[0.15em]">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>7-Day Trial</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-black text-text-sub uppercase tracking-[0.15em]">
                <Shield className="w-4 h-4 text-primary-600" />
                <span>ISO 27001 Secure</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Hero Dashboard Mockup (WOW Factor) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.25,
            }}
            className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-border shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/60 bg-white/85 dark:bg-slate-950/80 backdrop-blur-2xl p-5 sm:p-8 select-none animate-float">
              {/* Header mockup control bar */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-border dark:border-slate-800/60">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 sm:px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] uppercase font-black tracking-[0.2em] text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60">
                  OOMS Practice Dashboard
                </div>
              </div>

              {/* Stat boxes inside mock */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 py-5 sm:py-6">
                <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/25 dark:to-slate-950 border border-primary-500/10 shadow-sm">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-primary-700/70 dark:text-primary-300/80 font-black block mb-1.5">
                    Pending Returns
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-primary-700 dark:text-primary-300 font-heading tracking-tight">
                    142
                  </span>
                </div>
                <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-950 border border-success/10 shadow-sm">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-success/70 dark:text-emerald-300/80 font-black block mb-1.5">
                    Completion Rate
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-success dark:text-emerald-300 font-heading tracking-tight">
                    98.4%
                  </span>
                </div>
              </div>

              {/* Mock Tasks lists */}
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] block mb-1">
                  Live Filing Pipelines
                </span>
                {mockTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-slate-950/35 border border-border/80 dark:border-slate-800 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-2.5 h-2.5 rounded-full shadow-sm ${task.color.split(" ")[0]}`}
                      />
                      <div>
                        <h4 className="text-xs font-black text-foreground leading-none mb-1.5">
                          {task.title}
                        </h4>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">
                          {task.client}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${task.color.split(" ")[1]} bg-slate-100 dark:bg-slate-800/60 border border-border dark:border-slate-700`}
                    >
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive notification dialog overlay */}
              <div className="absolute bottom-4 right-3 sm:bottom-6 sm:-right-4 py-3 sm:py-4 px-4 sm:px-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 shadow-2xl shadow-emerald-600/30 text-white flex items-center space-x-3 sm:space-x-4 border border-white/10 max-w-[240px] sm:max-w-[260px]">
                <div className="p-2 rounded-xl bg-white/20 shrink-0">
                  <MessageSquare className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">
                    WhatsApp Sent
                  </h4>
                  <p className="text-[10px] text-emerald-50 font-medium">
                    Auto alerts sent to 45 clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-muted border-y border-border px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {contactData.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent block mb-2 tracking-tighter">
                <AnimatedCounter
                  value={stat.numericValue}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-text-sub uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Platform Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
              Engineered Modules for Firm Automation
            </h2>
            <p className="text-text-sub text-lg leading-relaxed font-medium">
              Consolidate your client records, task tracking, staff timesheets,
              collections, and communication channels into one cohesive cloud
              workstation.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contactData.services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative rounded-[32px] p-8 bg-surface border border-border hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className={sectionIconWrapper}>
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed mb-8 font-medium">
                    {service.shortDesc}
                  </p>
                </div>
                <Link
                  to={service.path}
                  aria-label={`Learn more about ${service.title}`}
                  className="inline-flex items-center space-x-2 text-sm font-black text-primary-600 dark:text-primary-400 group-hover:translate-x-2 transition-transform uppercase tracking-wider"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Tab Section (WOW UX factor) */}
      <section className="py-20 lg:py-32 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-y border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Industries Served
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
              Tailored for Professional Verticals
            </h2>
            <p className="text-text-sub text-lg font-medium">
              Explore how we customize workflows, templates, and rules to match
              the regulatory cycles of your specific profession.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
            {contactData.industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-7 py-4 rounded-2xl font-heading font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer hover:-translate-y-1 active:scale-95 ${activeTab === ind.id
                    ? "bg-primary-600 text-white shadow-2xl shadow-primary-600/30"
                    : "bg-surface text-text-sub border border-border hover:border-primary-400 hover:text-primary-600"
                  }`}
              >
                {ind.name.split(" (")[0]}
              </button>
            ))}
          </div>

          {/* Active Tab Panel with Motion animation */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {contactData.industries.map((ind) => {
                if (ind.id !== activeTab) return null;
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-surface rounded-[40px] p-8 sm:p-12 border border-border shadow-2xl shadow-foreground/5 dark:border-slate-800"
                  >
                    <div className="space-y-8">
                      <div className={industryIconWrapper}>
                        <LucideIcon name={ind.iconName} className="w-7 h-7" />
                      </div>
                      <h3 className="font-heading font-black text-3xl text-foreground leading-tight tracking-tight">
                        OOMS for {ind.name}
                      </h3>
                      <p className="text-text-sub text-lg leading-relaxed font-medium">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="space-y-4 bg-muted/50 dark:bg-slate-950/50 rounded-3xl p-8 border border-border dark:border-slate-900">
                      <h4 className="text-[10px] font-black text-text-sub uppercase tracking-[0.2em] mb-4">
                        Key Features Included
                      </h4>
                      {ind.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-4 text-foreground font-black text-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Business Workflow / Process Steps */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              How it Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
              Start Automating in 4 Steps
            </h2>
            <p className="text-text-sub text-lg font-medium">
              Set up OOMS effortlessly and transform your firm into a digital,
              streamlined powerhouse in under a day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Schedule Live Demo",
                desc: "Consult with our compliance specialists to structure your firm's active licenses.",
              },
              {
                step: "02",
                title: "Import Client Registry",
                desc: "Securely import your current PAN, GST, and email contact spreadsheets.",
              },
              {
                step: "03",
                title: "Invite Partners & Staff",
                desc: "Dispatch logins, define access rules (RBAC), and assign timesheets.",
              },
              {
                step: "04",
                title: "Deploy Workflows",
                desc: "Generate task cards, broadcast due dates, and monitor cash flow.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="group relative space-y-5 bg-surface p-8 rounded-[32px] border border-border hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-500"
              >
                <span className="font-heading font-black text-5xl text-primary-600/10 group-hover:text-primary-600/20 transition-colors block">
                  {p.step}
                </span>
                <h3 className="font-heading font-black text-lg text-foreground leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-text-sub leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Trust Indicators */}
      <section className="py-20 lg:py-32 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-t border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
                Operational Security
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
                Bank-Grade Information Controls
              </h2>
              <p className="text-text-sub text-lg leading-relaxed font-medium">
                Professional firms handle incredibly sensitive taxpayer
                information. OOMS is designed from the database-layer up with
                strict controls, isolation protocols, and automatic backups to
                safeguard document folders and business records.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  "Automatic data backups and high-availability nodes",
                  "Granular role-based user permissions settings",
                  "IP address logins restrictions & secure sessions",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 text-base font-black text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Indicators cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactData.trustIndicators.map((ind, i) => (
                <div
                  key={i}
                  className="group p-8 bg-surface rounded-[32px] border border-border shadow-xl shadow-foreground/5 dark:border-slate-800 dark:shadow-slate-950/20 flex items-start space-x-5 transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1"
                >
                  <div className={trustIconWrapper}>
                    <LucideIcon name={ind.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-base text-foreground mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-text-sub leading-relaxed font-medium">
                      {ind.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Client Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
              Trusted by 15,000+ Partners
            </h2>
            <p className="text-text-sub text-lg font-medium">
              Read feedback from senior Chartered Accountants, advocates, and
              firm directors about their journey of digitizing workflows with
              OOMS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactData.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 sm:p-10 rounded-[40px] bg-surface border border-border flex flex-col justify-between relative overflow-hidden shadow-xl shadow-foreground/5 transition-all duration-500 hover:shadow-2xl hover:border-primary-400"
              >
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex items-center space-x-1.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-foreground font-bold text-lg leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-8 border-t border-border mt-8 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white text-base font-black shadow-lg shadow-primary-600/20">
                    {t.name.split(" ").pop()?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-foreground leading-none mb-1.5 uppercase tracking-wide">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-text-sub font-black uppercase tracking-wider">
                      {t.role}, {t.firm}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 lg:py-32 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-t border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
              Support Center
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
              Frequently Asked Questions
            </h2>
            <p className="text-text-sub text-lg font-medium">
              Find quick answers regarding onboarding, pricing models, database
              securities, and platform compatibilities.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {contactData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[24px] border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-primary-400"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-heading font-black text-base sm:text-lg text-foreground hover:bg-surface-hover cursor-pointer group"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? "bg-primary-600 text-white" : "bg-muted text-primary-600"}`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 shrink-0" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-7 pb-8 pt-2 text-text-sub text-base leading-relaxed border-t border-border font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto rounded-[48px] overflow-hidden relative bg-gradient-to-tr from-primary-600 via-primary-700 to-indigo-700 p-10 sm:p-16 lg:p-20 text-center text-white shadow-2xl shadow-primary-600/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95]">
              Ready to Modernize Your Office Administration?
            </h2>
            <p className="text-primary-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Schedule a personalized walkthrough demo with our engineering team
              or begin a risk-free 7-day trial. Let us answer your team's
              specific questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-[20px] bg-white hover:bg-primary-50 text-primary-700 font-heading font-black shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 text-lg"
              >
                Schedule Demo
              </Link>
              <a
                href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-[20px] bg-slate-900/30 hover:bg-slate-900/50 border border-white/30 text-white font-heading font-black transition-all duration-300 hover:-translate-y-1 active:scale-95 text-lg"
              >
                <LucideIcon name="MessageSquare" className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
