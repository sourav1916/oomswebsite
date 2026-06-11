import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { useContactData } from "../hooks/useContactData";
import { SEO } from "@/components/SEO";
import { LucideIcon } from "../components/LucideIcon";

export const ServiceDetail = () => {
  const contactData = useContactData();
  const { slug } = useParams();
  const service = contactData.services.find((s) => s.id === slug);

  // Form states for the service-specific inquiry
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 space-y-6">
        <HelpCircle className="w-16 h-16 text-muted-foreground dark:text-slate-600" />
        <div className="text-center space-y-2">
          <h2 className="font-heading font-extrabold text-2xl text-foreground">
            Module Not Found
          </h2>
          <p className="text-muted-foreground text-sm">
            The requested service module does not exist or has been renamed.
          </p>
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

  const handleInquiry = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", firm: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDesc}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.title, item: `/services/${service.id}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-xs font-black text-text-sub hover:text-primary-600 transition-colors mb-10 uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all modules</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Service Details Content */}
          <div className="lg:col-span-8 space-y-12 group">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-950/45 text-primary-700 dark:text-primary-400 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white border border-primary-200/50">
                <LucideIcon name={service.iconName} className="w-8 h-8" />
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl text-foreground leading-[0.95] tracking-tighter">
                {service.title}
              </h1>
              <p className="text-text-sub text-lg sm:text-xl leading-relaxed font-medium">
                {service.longDesc}
              </p>
            </div>

            {/* Service Features checklist */}
            <div className="space-y-6">
              <h3 className="font-heading font-black text-2xl text-foreground tracking-tight">
                Key Features Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-[32px] border border-border bg-surface flex items-start space-x-4 shadow-xl shadow-foreground/5 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base font-black leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Benefits grid */}
            <div className="space-y-6 pt-6">
              <h3 className="font-heading font-black text-2xl text-foreground tracking-tight">
                Expected Business Outcomes
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 text-text-sub text-base sm:text-lg leading-relaxed font-medium"
                  >
                    <div className="mt-2.5 w-2 h-2 rounded-full bg-primary-600 shrink-0 shadow-lg shadow-primary-600/20" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Capture */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-8 bg-surface border border-border rounded-[40px] shadow-2xl shadow-foreground/5 space-y-8">
              <div className="space-y-3 text-center pb-6 border-b border-border">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
                  Firm Onboarding
                </span>
                <h3 className="font-heading font-black text-xl text-foreground tracking-tight leading-tight">
                  Schedule Demo For This Module
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-5 bg-success/5 border border-success/10 rounded-[32px]">
                  <ShieldCheck className="w-16 h-16 text-success mx-auto" />
                  <h4 className="font-heading font-black text-lg text-foreground">
                    Request Received
                  </h4>
                  <p className="text-text-sub text-sm leading-relaxed font-medium">
                    We will email your firm at the provided address to configure
                    your Sandbox credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-sub uppercase tracking-widest ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-muted/50 dark:bg-slate-950/60 rounded-2xl px-4 py-3 text-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-sub uppercase tracking-widest ml-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-muted/50 dark:bg-slate-950/60 rounded-2xl px-4 py-3 text-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-sub uppercase tracking-widest ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-muted/50 dark:bg-slate-950/60 rounded-2xl px-4 py-3 text-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-text-sub uppercase tracking-widest ml-1">
                      Practice/Firm Name
                    </label>
                    <input
                      type="text"
                      value={formData.firm}
                      onChange={(e) =>
                        setFormData({ ...formData, firm: e.target.value })
                      }
                      className="w-full bg-muted/50 dark:bg-slate-950/60 rounded-2xl px-4 py-3 text-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4.5 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-primary-600/25 cursor-pointer active:scale-95 hover:-translate-y-0.5"
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
