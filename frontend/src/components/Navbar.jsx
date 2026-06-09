import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Layers, Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "Business Policy", path: "/business-policy" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 py-3 shadow-lg shadow-foreground/5 ring-1 ring-border backdrop-blur-xl dark:bg-slate-950/85 dark:shadow-slate-950/25 dark:ring-slate-800"
            : "bg-background/90 py-4 shadow-sm shadow-foreground/5 ring-1 ring-border/70 backdrop-blur-xl dark:bg-slate-950/75 dark:ring-slate-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 shadow-lg shadow-primary-600/20 text-white ring-1 ring-white/20 transform group-hover:scale-105 transition-all duration-300">
              <Layers className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl leading-none tracking-tighter text-foreground group-hover:text-primary-600 transition-colors">
                OOMS
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                OneSaaS Cloud
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl font-heading text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-primary-600 bg-primary-50/50 dark:bg-primary-950/30"
                    : "text-text-sub dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-hover dark:hover:bg-slate-900/60"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://ooms.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-heading text-sm font-bold text-text-sub border border-border hover:border-primary-400 hover:text-primary-600 transition-all duration-300 cursor-pointer"
            >
              <span>Login</span>
            </a>
            <a
              href="https://ooms.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-heading text-sm font-bold bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-border bg-background text-text-sub shadow-sm hover:bg-surface-hover hover:text-primary-600 hover:border-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400 active:scale-95 cursor-pointer transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-indigo-500 to-emerald-400 origin-left"
        />
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[65px] left-0 right-0 z-40 border-b border-border bg-background/95 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl font-heading text-base font-bold transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-950/40"
                      : "text-foreground dark:text-slate-200 hover:text-primary-800 dark:hover:text-primary-300 hover:bg-surface-hover dark:hover:bg-slate-900/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="https://ooms.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-heading font-bold border border-border text-foreground hover:bg-surface-hover active:scale-98 cursor-pointer transition-all duration-200"
                >
                  <span>Login</span>
                </a>
                <a
                  href="https://ooms.in/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-heading font-bold bg-primary-600 text-white shadow-lg shadow-primary-600/10 active:scale-98 cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
