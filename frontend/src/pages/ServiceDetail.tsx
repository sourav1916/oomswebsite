import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { LucideIcon } from '../components/LucideIcon';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteConfig.services.find((s) => s.id === slug);

  // Form states for the service-specific inquiry
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', firm: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 space-y-6">
        <HelpCircle className="w-16 h-16 text-muted-foreground dark:text-slate-600" />
        <div className="text-center space-y-2">
          <h2 className="font-heading font-extrabold text-2xl text-foreground">Module Not Found</h2>
          <p className="text-muted-foreground text-sm">The requested service module does not exist or has been renamed.</p>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold transition-all shadow-md shadow-primary-500/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </Link>
      </div>
    );
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', firm: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <>
      <SEO 
        title={service.title} 
        description={service.shortDesc} 
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: service.title, item: `/services/${service.id}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          to="/services"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-muted-foreground hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all modules</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Service Details Content */}
          <div className="lg:col-span-8 space-y-10 group">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/45 text-primary-600 dark:text-primary-400 flex items-center justify-center shadow-sm transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <LucideIcon name={service.iconName} className="w-6 h-6" />
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground leading-tight">
                {service.title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {service.longDesc}
              </p>
            </div>

            {/* Service Features checklist */}
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-lg text-foreground">
                Key Features Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-border bg-surface flex items-start space-x-3 hover:border-primary-500/20 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Benefits grid */}
            <div className="space-y-4 pt-4">
              <h3 className="font-heading font-extrabold text-lg text-foreground">
                Expected Business Outcomes
              </h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" />
                    <span className="font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Capture */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 bg-surface border border-border rounded-3xl shadow-xl space-y-6">
              <div className="space-y-2 text-center pb-4 border-b border-border">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400">
                  Firm Onboarding
                </span>
                <h3 className="font-heading font-bold text-base text-foreground">
                  Schedule Demo For This Module
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 text-center space-y-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                  <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-heading font-bold text-sm text-foreground">Request Received</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    We will email your firm at the provided address to configure your Sandbox credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3.5 py-2.5 text-xs text-foreground border border-border focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3.5 py-2.5 text-xs text-foreground border border-border focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3.5 py-2.5 text-xs text-foreground border border-border focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Practice/Firm Name</label>
                    <input
                      type="text"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3.5 py-2.5 text-xs text-foreground border border-border focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-primary-500/10 cursor-pointer"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
