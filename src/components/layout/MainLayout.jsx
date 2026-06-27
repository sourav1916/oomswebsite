import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ScrollToTop } from "../ScrollToTop";
import { BackToTopButton } from "../BackToTopButton";
import { FloatingWhatsApp } from "../FloatingWhatsApp";
import { TawkChat } from "../TawkChat";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
      <FloatingWhatsApp />
      <TawkChat />
    </div>
  );
};

export default MainLayout;
