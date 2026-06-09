import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SkeletonLoader } from "./components/SkeletonLoader";

// Lazy load pages for optimized bundle size & faster Lighthouse scores
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const Pricing = lazy(() => import("./pages/Pricing"));
const BusinessPolicy = lazy(() => import("./pages/BusinessPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const App = () => {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Suspense fallback={<SkeletonLoader type="hero" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/business-policy" element={<BusinessPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </ErrorBoundary>
  );
};

export default App;
