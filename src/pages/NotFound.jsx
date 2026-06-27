import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileQuestion, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";

export const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" />

      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        {/* Animated icon container */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-950/20 text-rose-500 mb-8"
        >
          <FileQuestion className="w-10 h-10" />
        </motion.div>

        {/* Text Details */}
        <div className="max-w-md space-y-4 mb-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            The page you are looking for does not exist, has been removed, or is
            temporarily unavailable. Let us guide you back to active links.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold transition-all shadow-lg shadow-primary-500/10 cursor-pointer"
          >
            <span>Back to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-heading font-bold border border-border transition-all cursor-pointer"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
