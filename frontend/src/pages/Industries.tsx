import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/siteConfig';
import { LucideIcon } from '../components/LucideIcon';

export const Industries: React.FC = () => {
  return (
    <>
      <SEO 
        title="Industries Served" 
        description="Learn how OOMS offers customized modules and task management features for CAs, Company Secretaries, advocates, and tax consulting practices." 
      />

      {/* Header */}
      <section className="pt-16 pb-12 text-center px-4 max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
          Target Sectors
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground leading-tight">
          Tailor-Fit Workspaces for Your Profession
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Statutory timelines vary. OOMS adapts its automated calendars and reminders to match the exact compliance schedules required by your specific firm.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="space-y-12">
          {siteConfig.industries.map((ind, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={ind.id}
                className={`group flex flex-col lg:flex-row items-center gap-12 p-8 sm:p-10 rounded-[32px] bg-surface border border-slate-200/80 dark:border-slate-800 shadow-xl transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Icon Column */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/45 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-md transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    <LucideIcon name={ind.iconName} className="w-8 h-8" />
                  </div>
                  <div className="text-center lg:text-left space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl text-foreground leading-snug">
                      {ind.name}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      OOMS Solutions
                    </span>
                  </div>
                </div>

                {/* Description Column */}
                <div className="w-full lg:w-2/3 space-y-6">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-900">
                    {ind.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust banner redirect */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto space-y-6">
        <h2 className="font-heading font-extrabold text-2xl text-foreground">
          Don't See Your Specific Compliance Category?
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Our backend workflow system supports fully customizable checklists and event templates. We can map whatever corporate filing timelines your office requires.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold transition-all shadow-lg shadow-primary-600/10 hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Consult With Engineers</span>
          <ArrowRight className="w-4.5 h-4.5" />
        </Link>
      </section>
    </>
  );
};

export default Industries;
