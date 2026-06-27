import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Layers, Menu, MoonStar, SunMedium, X, ArrowRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { siteConfig } from "../config/siteConfig";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();

  const loginUrl = process.env.REACT_APP_OOMS_LOGIN_URL || siteConfig.loginUrl;
  const registerUrl = process.env.REACT_APP_OOMS_REGISTER_URL || siteConfig.registerUrl;

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
    <div className="relative">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 py-3 shadow-lg shadow-foreground/5 ring-1 ring-border backdrop-blur-xl dark:bg-slate-950/85 dark:shadow-slate-950/25 dark:ring-slate-800"
          : "bg-background/90 py-4 shadow-sm shadow-foreground/5 ring-1 ring-border/70 backdrop-blur-xl dark:bg-slate-950/75 dark:ring-slate-800/80"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-2.5 group shrink-0">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 shadow-lg shadow-primary-600/20 text-white ring-1 ring-white/20 transform group-hover:scale-105 transition-all duration-300">
              <Layers className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="font-heading font-black text-lg sm:text-2xl leading-none tracking-tight text-foreground group-hover:text-primary-600 transition-colors truncate max-w-[110px] sm:max-w-none">
                OOMS
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground mt-0.5 truncate max-w-[110px] sm:max-w-none">
                OneSaaS Cloud
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 min-w-0 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 xl:px-4 py-2 rounded-xl font-heading text-[13px] xl:text-sm font-bold tracking-wide transition-all duration-300 text-center leading-tight ${isActive(link.path)
                  ? "text-primary-600 bg-primary-50/50 dark:bg-primary-950/30"
                  : "text-text-sub dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-hover dark:hover:bg-slate-900/60 whitespace-nowrap"
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
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-background text-text-sub hover:text-primary-600 hover:border-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-primary-400 transition-all duration-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <SunMedium className="w-5 h-5" />
              ) : (
                <MoonStar className="w-5 h-5" />
              )}
            </button>
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl font-heading text-sm font-bold text-text-sub border border-border hover:border-primary-400 hover:text-primary-600 transition-all duration-300 cursor-pointer"
            >
              <span>Login</span>
            </a>
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl font-heading text-sm font-bold bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0 ml-auto">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-border bg-background text-text-sub shadow-sm hover:bg-surface-hover hover:text-primary-600 hover:border-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400 active:scale-95 cursor-pointer transition-all duration-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <SunMedium className="w-5 h-5" />
              ) : (
                <MoonStar className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-border bg-background text-text-sub shadow-sm hover:bg-surface-hover hover:text-primary-600 hover:border-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400 active:scale-95 cursor-pointer transition-all duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
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
          style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-indigo-500 to-emerald-400 origin-left will-change-transform"
          transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.2 }}
        />
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden absolute left-0 right-0 top-full z-[60] border-b border-border bg-background/98 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/98"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              <div className="rounded-3xl border border-border bg-surface/90 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-heading text-sm font-bold transition-all duration-200 ${isActive(link.path)
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/15"
                      : "text-foreground dark:text-slate-200 hover:bg-surface-hover dark:hover:bg-slate-800"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`h-4 w-4 ${isActive(link.path) ? "opacity-90" : "opacity-50"}`} />
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-5 py-3.5 font-heading text-sm font-bold text-foreground transition hover:bg-surface-hover active:scale-[0.99]"
                >
                  Login
                </a>
                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 px-5 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-primary-600/15 transition hover:bg-primary-700 active:scale-[0.99]"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
