import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";
import { useContactData } from "../hooks/useContactData";
import { SEO } from "../components/SEO";
import { LucideIcon } from "../components/LucideIcon";

export const ServiceDetail = () => {
  const contactData = useContactData();
  const { slug } = useParams();
  const service = contactData.services.find((s) => s.id === slug);

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

        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
