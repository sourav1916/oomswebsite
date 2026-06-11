import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useContactData } from "../hooks/useContactData";
import { LucideIcon } from "../components/LucideIcon";

export const Industries = () => {
  const contactData = useContactData();
  return (
    <>
      <SEO
        title="Industries Served"
        description="Learn how OOMS offers customized modules and task management features for CAs, Company Secretaries, advocates, and tax consulting practices."
      />

      {/* Header */}
      <section className="pt-20 pb-16 text-center px-4 max-w-4xl mx-auto space-y-5 bg-background">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 font-heading">
          Target Sectors
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-6xl text-foreground leading-[0.95] tracking-tighter">
          Tailor-Fit Workspaces for Your Profession
        </h1>
        <p className="text-text-sub text-lg leading-relaxed font-medium">
          Statutory timelines vary. OOMS adapts its automated calendars and
          reminders to match the exact compliance schedules required by your
          specific firm.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="space-y-12">
          {contactData.industries.map((ind, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={ind.id}
                className={`group flex flex-col lg:flex-row items-center gap-12 p-8 sm:p-12 rounded-[48px] bg-surface border border-border shadow-2xl shadow-foreground/5 transition-all duration-500 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Icon Column */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-8">
                  <div className="w-20 h-20 rounded-3xl bg-indigo-100 dark:bg-indigo-950/45 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 border border-indigo-200/50">
                    <LucideIcon name={ind.iconName} className="w-10 h-10" />
                  </div>
                  <div className="text-center lg:text-left space-y-3">
                    <h3 className="font-heading font-black text-3xl text-foreground leading-tight tracking-tight">
                      {ind.name}
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-sub/60">
                      OOMS Solutions
                    </span>
                  </div>
                </div>

                {/* Description Column */}
                <div className="w-full lg:w-2/3 space-y-8">
                  <p className="text-text-sub text-lg leading-relaxed font-medium">
                    {ind.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-muted/50 dark:bg-slate-950/40 rounded-[32px] p-8 border border-border dark:border-slate-900">
                    {ind.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3 text-foreground text-sm sm:text-base font-black leading-relaxed"
                      >
                        <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
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
      <section className="py-20 px-4 text-center max-w-3xl mx-auto space-y-8">
        <h2 className="font-heading font-black text-3xl text-foreground tracking-tight leading-tight">
          Don't See Your Specific Compliance Category?
        </h2>
        <p className="text-text-sub text-lg leading-relaxed font-medium">
          Our backend workflow system supports fully customizable checklists and
          event templates. We can map whatever corporate filing timelines your
          office requires.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center space-x-3 px-10 py-5 rounded-[20px] bg-primary-600 hover:bg-primary-700 text-white font-heading font-black transition-all shadow-2xl shadow-primary-600/20 hover:-translate-y-1 active:scale-95 text-lg"
        >
          <span>Consult With Engineers</span>
          <ArrowRight className="w-6 h-6" />
        </Link>
      </section>
    </>
  );
};

export default Industries;
