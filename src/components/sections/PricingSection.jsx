import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";

export const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-bg-gradient-to/50 dark:bg-slate-900/20 border-y border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 font-heading"
          >
            Flexible Subscriptions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-foreground"
          >
            Plans for Every Firm Size
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-sub text-sm sm:text-base max-w-2xl mx-auto"
          >
            All plans include unlimited users and branches. Choose the duration
            that fits your firm's growth strategy.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {siteConfig.pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`group relative flex flex-col p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? "bg-surface border-primary-500 shadow-2xl shadow-primary-500/20 scale-105 z-10 border-2"
                  : "surface-card hover:border-primary-400 hover:shadow-xl hover:shadow-primary-500/10"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary-600 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-primary-600/30">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-xl text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-text-sub leading-relaxed font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground font-heading">
                    {plan.currency}
                    {plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-semibold text-text-sub">
                    / {plan.durationLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                        feature.included
                          ? "bg-success/10 text-success dark:bg-emerald-950/40 dark:text-emerald-400"
                          : "bg-muted text-text-sub/50"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className={`text-xs font-bold ${
                        feature.included
                          ? "text-foreground/80 dark:text-slate-300"
                          : "text-text-sub/40 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to={plan.ctaLink}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-heading font-bold text-sm transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25"
                    : "bg-muted hover:bg-surface-hover text-foreground border border-border"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Prop Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-[32px] bg-primary-50/50 dark:bg-indigo-950/20 border border-primary-200/50 dark:border-indigo-800/50 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/20">
              <Zap className="w-7 h-7 fill-current" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-lg text-foreground mb-1">
                Zero Hidden Charges
              </h4>
              <p className="text-sm text-text-sub font-medium">
                Flat pricing regardless of staff count or client volume. Scaling
                has never been this affordable.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 hover:underline"
          >
            <span>Ask for custom enterprise quotes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
