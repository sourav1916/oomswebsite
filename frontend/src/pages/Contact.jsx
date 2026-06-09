import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

export const Contact = () => {
  const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.slice(0, 4).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Contact Us & Book Demo"
        description="Contact OOMS to schedule a live demo, discuss implementation, or plan a secure migration for your professional services firm."
        canonicalUrl={`${siteConfig.websiteUrl}/contact`}
        schema={contactFaqSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="font-heading text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            Connect With Us
          </span>
          <h1 className="font-heading text-4xl font-black leading-[0.95] text-foreground sm:text-6xl tracking-tighter">
            Schedule a Live Platform Demonstration
          </h1>
          <p className="text-lg leading-relaxed text-text-sub sm:text-xl font-medium">
            Speak with a product specialist about workflows, data migration,
            access control, and the rollout plan for your team.
          </p>
        </section>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-5">
            <div className="space-y-8 rounded-[40px] border border-border bg-surface p-8 shadow-2xl shadow-foreground/5 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
              <h2 className="font-heading text-2xl font-black text-foreground tracking-tight">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <InfoIcon icon={<Phone className="h-6 w-6" />} />
                  <div>
                    <h3 className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-text-sub">
                      Call Us
                    </h3>
                    {siteConfig.phoneNumbers.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number.replace(/\s+/g, "")}`}
                        className="block text-base font-black text-foreground transition hover:text-primary-600"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <InfoIcon icon={<Mail className="h-6 w-6" />} />
                  <div>
                    <h3 className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-text-sub">
                      Email Inquiries
                    </h3>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="block text-base font-black text-foreground transition hover:text-primary-600"
                    >
                      Support: {siteConfig.supportEmail}
                    </a>
                    <a
                      href={`mailto:${siteConfig.salesEmail}`}
                      className="block text-base font-black text-foreground transition hover:text-primary-600"
                    >
                      Sales: {siteConfig.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <InfoIcon icon={<MapPin className="h-6 w-6" />} />
                  <div>
                    <h3 className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-text-sub">
                      Office Location
                    </h3>
                    <p className="text-base font-black leading-relaxed text-foreground">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 border-t border-border pt-8 dark:border-slate-800">
                  <InfoIcon
                    icon={<Clock className="h-6 w-6" />}
                    variant="indigo"
                  />
                  <div>
                    <h3 className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-text-sub">
                      Business Hours
                    </h3>
                    <p className="text-sm font-bold leading-relaxed text-foreground">
                      {siteConfig.businessHours.weekdays}
                      <br />
                      {siteConfig.businessHours.saturday}
                      <br />
                      {siteConfig.businessHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] border border-border bg-surface p-8 shadow-2xl shadow-foreground/5 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
              <h2 className="font-heading text-2xl font-black text-foreground tracking-tight">
                Common Questions
              </h2>
              <div className="mt-6 space-y-4">
                {siteConfig.faqs.slice(0, 3).map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[24px] border border-border bg-muted/50 p-5 transition-all duration-300 hover:border-primary-400"
                  >
                    <summary className="cursor-pointer text-sm font-black text-foreground">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-text-sub font-medium">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-7">
            <div className="rounded-[40px] border border-border bg-surface p-8 shadow-2xl shadow-foreground/5 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
              <ContactForm />
            </div>
          </section>
        </div>

        <section className="space-y-8">
          <h2 className="font-heading text-2xl font-black text-foreground tracking-tight">
            Find Our Tech Hub
          </h2>
          <div className="relative z-10 h-[500px] overflow-hidden rounded-[48px] border border-border shadow-2xl shadow-foreground/5">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              className="h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OOMS office location map"
            />
          </div>
        </section>
      </div>
    </>
  );
};

const InfoIcon = ({ icon, variant = "primary" }) => (
  <div
    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
      variant === "primary"
        ? "bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400"
        : "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400"
    }`}
  >
    {icon}
  </div>
);

export default Contact;
