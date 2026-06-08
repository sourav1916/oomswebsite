import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Layers, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 py-3 shadow-lg shadow-slate-900/8 ring-1 ring-slate-200/80 backdrop-blur-xl dark:bg-slate-950/85 dark:shadow-slate-950/25 dark:ring-slate-800'
            : 'bg-white/90 py-4 shadow-sm shadow-slate-900/5 ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-950/75 dark:ring-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-700 via-primary-600 to-indigo-600 shadow-md shadow-primary-600/30 text-white ring-1 ring-primary-300/40">
              <Layers className="w-5.5 h-5.5 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl leading-none tracking-tight text-foreground">
                OOMS
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary-700 dark:text-primary-300 mt-0.5">
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
                className={`relative px-4 py-2 rounded-lg font-heading text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary-800 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-950/35'
                    : 'text-slate-800 dark:text-slate-200 hover:text-primary-800 dark:hover:text-primary-300 hover:bg-slate-100 dark:hover:bg-slate-900/70'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-indigo-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl font-heading text-sm font-bold bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-white shadow-lg shadow-primary-700/25 hover:shadow-primary-700/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 active:scale-95 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[65px] left-0 right-0 z-40 border-b border-slate-200 bg-white/95 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl font-heading text-base font-bold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-950/40'
                      : 'text-slate-800 dark:text-slate-200 hover:text-primary-800 dark:hover:text-primary-300 hover:bg-slate-100 dark:hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-heading font-bold bg-primary-600 text-white shadow-lg shadow-primary-600/10 active:scale-98 cursor-pointer"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
