import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  ArrowRight, Shield, Zap, CheckCircle2, MessageSquare, Plus, Minus, Star
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { LucideIcon } from '../components/LucideIcon';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(siteConfig.industries[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Mock dashboard stats for the hero interactive illustration
  const mockTasks = [
    { title: 'GSTR-3B Filing', client: 'Alpha Corp Ltd', status: 'Completed', color: 'bg-emerald-500 text-emerald-500' },
    { title: 'ITR-6 Tax Audit', client: 'Sharma & Sons', status: 'Under Review', color: 'bg-indigo-500 text-indigo-500' },
    { title: 'TDS Quarter 1', client: 'Zeta Technologies', status: 'Pending Client', color: 'bg-amber-500 text-amber-500' },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const sectionIconWrapper =
    'w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 shadow-sm transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white';

  const trustIconWrapper =
    'w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white';

  const industryIconWrapper =
    'w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white';

  return (
    <>
      <SEO title="Home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {/* Glow dots decoration */}
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-primary-600/10 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs uppercase tracking-widest font-bold font-heading"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Version 4.0 Launch</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground"
            >
              Automate Your Practice.{' '}
              <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">
                Secure
              </span>{' '}
              Your Clients.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              India's most trusted cloud-based ERP & CRM system built exclusively for Chartered Accountants, corporate legal teams, and tax practitioners. Zero spreadsheets, zero deadline slips.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold shadow-lg shadow-primary-600/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Request Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-border font-heading font-bold transition-all duration-300"
              >
                Explore Modules
              </Link>
            </motion.div>

            {/* Key mini metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start space-x-6 border-t border-border/80 pt-6"
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-muted-foreground tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>7-Day Trial</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-muted-foreground tracking-wider">
                <Shield className="w-4 h-4 text-primary-500" />
                <span>ISO 27001 Secure</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Hero Dashboard Mockup (WOW Factor) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.25 }}
            className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl dark:shadow-slate-950/60 bg-white/70 dark:bg-dark-card/80 backdrop-blur-xl p-5 sm:p-6 select-none animate-float">
              
              {/* Header mockup control bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/50 dark:border-slate-800/60">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  OOMS Practice Dashboard
                </div>
              </div>

              {/* Stat boxes inside mock */}
              <div className="grid grid-cols-2 gap-4 py-5">
                <div className="p-4 rounded-2xl bg-primary-50/50 dark:bg-primary-950/20 border border-primary-500/10">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold block mb-1">Pending Returns</span>
                  <span className="text-2xl font-extrabold text-primary-600 dark:text-primary-400 font-heading">142</span>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/10">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold block mb-1">Completion Rate</span>
                  <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading">98.4%</span>
                </div>
              </div>

              {/* Mock Tasks lists */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Live Filing Pipelines</span>
                {mockTasks.map((task, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/60 dark:bg-slate-950/30 border border-border/80 hover:border-primary-500/30 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${task.color.split(' ')[0]}`} />
                      <div>
                        <h4 className="text-xs font-bold text-foreground leading-none mb-1">{task.title}</h4>
                        <span className="text-[10px] text-muted-foreground">{task.client}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${task.color.split(' ')[1]} bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive notification dialog overlay */}
              <div className="absolute bottom-4 -right-2 sm:-right-4 py-3.5 px-4.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/20 text-white flex items-center space-x-3 border border-emerald-400/20 max-w-[240px]">
                <MessageSquare className="w-5 h-5 animate-pulse" />
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wide">WhatsApp Dispatched</h4>
                  <p className="text-[10px] text-emerald-100 font-medium">Auto due-date alert sent to 45 clients</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-slate-100 dark:bg-slate-900/30 border-y border-border/50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="text-3xl sm:text-4xl font-extrabold font-heading bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent block mb-1">
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-foreground">
              Engineered Modules for Firm Automation
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Consolidate your client records, task tracking, staff timesheets, collections, and communication channels into one cohesive cloud workstation.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {siteConfig.services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative rounded-3xl p-6 bg-surface border border-border/80 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={sectionIconWrapper}>
                    <LucideIcon name={service.iconName} className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-foreground mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>
                <Link
                  to={service.path}
                  aria-label={`Learn more about ${service.title}`}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Tab Section (WOW UX factor) */}
      <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/20 border-y border-border/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Industries Served
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Tailored for Professional Verticals
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Explore how we customize workflows, templates, and rules to match the regulatory cycles of your specific profession.
            </p>
          </div>

          {/* Tabs menu */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {siteConfig.industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-5 py-3 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === ind.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                    : 'bg-surface text-muted-foreground border border-border hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {ind.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active Tab Panel with Motion animation */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {siteConfig.industries.map((ind) => {
                if (ind.id !== activeTab) return null;
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800 shadow-xl"
                  >
                    <div className="space-y-6">
                      <div className={industryIconWrapper}>
                        <LucideIcon name={ind.iconName} className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl text-foreground">
                        OOMS for {ind.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="space-y-3.5 bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-900">
                      <h4 className="text-xs font-heading font-bold text-slate-600 uppercase tracking-widest mb-1.5">
                        Key Features Included
                      </h4>
                      {ind.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2.5 text-slate-700 dark:text-slate-300 text-sm font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
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
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              How it Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Start Automating in 4 Steps
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Set up OOMS effortlessly and transform your firm into a digital, streamlined powerhouse in under a day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Schedule Live Demo', desc: 'Consult with our compliance specialists to structure your firm\'s active licenses.' },
              { step: '02', title: 'Import Client Registry', desc: 'Securely import your current PAN, GST, and email contact spreadsheets.' },
              { step: '03', title: 'Invite Partners & Staff', desc: 'Dispatch logins, define access rules (RBAC), and assign timesheets.' },
              { step: '04', title: 'Deploy Workflows', desc: 'Generate task cards, broadcast due dates, and monitor cash flow.' },
            ].map((p, idx) => (
              <div key={idx} className="relative space-y-4 bg-surface p-6 rounded-3xl border border-border/80">
                <span className="font-heading font-extrabold text-3xl text-primary-500/20 block">
                  {p.step}
                </span>
                <h3 className="font-heading font-bold text-base text-foreground">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Trust Indicators */}
      <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
                Operational Security
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
                Bank-Grade Information Controls
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Professional firms handle incredibly sensitive taxpayer information. OOMS is designed from the database-layer up with strict controls, isolation protocols, and automatic backups to safeguard document folders and business records.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Automatic data backups and high-availability nodes',
                  'Granular role-based user permissions settings',
                  'IP address logins restrictions & secure sessions',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Indicators cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteConfig.trustIndicators.map((ind, i) => (
                <div key={i} className="group p-6 bg-surface rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-900/5 dark:shadow-slate-950/20 flex items-start space-x-4 transition-all duration-300 hover:border-primary-500/60 hover:shadow-xl hover:shadow-primary-500/10">
                  <div className={trustIconWrapper}>
                    <LucideIcon name={ind.iconName} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-foreground mb-1">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
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
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Trusted by 15,000+ Partners
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Read feedback from senior Chartered Accountants, advocates, and firm directors about their journey of digitizing workflows with OOMS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.testimonials.map((t) => (
              <div key={t.id} className="p-6 sm:p-8 rounded-3xl bg-surface border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-6 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.name.split(' ').pop()?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground leading-none mb-1">
                      {t.name}
                    </h4>
                    <span className="text-[10px] text-muted-foreground font-medium">
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
      <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
              Support Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Find quick answers regarding onboarding, pricing models, database securities, and platform compatibilities.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-surface overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-sm sm:text-base text-foreground hover:bg-slate-50 dark:hover:bg-slate-950/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <Minus className="w-4 h-4 shrink-0 text-primary-500" /> : <Plus className="w-4 h-4 shrink-0 text-primary-500" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-muted-foreground text-xs sm:text-sm leading-relaxed border-t border-border">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative bg-gradient-to-tr from-primary-600 via-primary-700 to-indigo-700 p-8 sm:p-12 text-center text-white shadow-2xl shadow-primary-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
              Ready to Modernize Your Office Administration?
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Schedule a personalized walkthrough demo with our engineering team or begin a risk-free 7-day trial. Let us answer your team's specific questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-primary-700 font-heading font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Schedule Demo
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/20 text-white font-heading font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
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
