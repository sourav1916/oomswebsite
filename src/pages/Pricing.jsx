import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PricingSection } from "../components/sections/PricingSection";

const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the right subscription plan for your firm. Unlimited users, secure cloud storage, and automated workflows for tax professionals."
      />

      {/* Hero Section for Pricing Page */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-muted">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-5%] w-[30%] h-[50%] bg-indigo-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400 font-heading bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20">
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]"
          >
            Simple, Scalable Subscriptions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-sub max-w-2xl mx-auto font-medium"
          >
            Empower your practice with OOMS. No setup fees, no per-user costs.
            Just one flat rate to automate your entire office.
          </motion.p>
        </div>
      </section>

      {/* Main Pricing Component */}
      <PricingSection />

      {/* Comparison/FAQ Link */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground tracking-tight">
            Still have questions?
          </h2>
          <p className="text-text-sub text-lg font-medium">
            Whether you are a solo practitioner or a multi-branch firm, we have
            the expertise to help you transition to the cloud safely.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-[20px] bg-primary-600 text-white font-heading font-black shadow-2xl shadow-primary-600/30 hover:bg-primary-700 transition-all hover:-translate-y-1 active:scale-95"
            >
              Contact Sales
            </Link>
            <Link
              to="/#faq"
              className="w-full sm:w-auto px-10 py-5 rounded-[20px] bg-background border border-border text-foreground font-heading font-black hover:bg-surface-hover transition-all hover:-translate-y-1 active:scale-95"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
