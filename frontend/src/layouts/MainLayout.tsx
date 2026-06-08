import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTopButton } from '../components/BackToTopButton';
import { LiveChatWidget } from '../components/LiveChatWidget';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[var(--bg-gradient-from)] to-[var(--bg-gradient-to)] transition-colors duration-300">
      
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none z-0" />
      
      {/* Dynamic route-triggered scroll manager & Back-To-Top button */}
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </main>

      {/* Floating WhatsApp chat widget */}
      <LiveChatWidget />
      <BackToTopButton />
      <FloatingWhatsApp />

      {/* Corporate footer */}
      <Footer />
    </div>
  );
};
export default MainLayout;
