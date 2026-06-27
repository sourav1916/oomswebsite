import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SEO } from "../components/SEO";
import { useContactData } from "../hooks/useContactData";

export const Contact = () => {
  const contactData = useContactData();
  const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactData.faqs.slice(0, 4).map((faq) => ({
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
        canonicalUrl={`${contactData.websiteUrl}/contact`}
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
          <h1 className="font-heading text-4xl font-black leading-[0.95] text-foreground sm:text-5xl tracking-tighter">
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
                    {contactData.phone.map((item, index) => (
                      <a
                        key={`${item.type}-${index}`}
                        href={`tel:${item.phone.replace(/\s+/g, "")}`}
                        className="block text-base font-black text-foreground transition hover:text-primary-600"
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}:{" "}
                        {item.phone}
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
                    {contactData.email.map((item, index) => (
                      <a
                        key={`${item.type}-${index}`}
                        href={`mailto:${item.email}`}
                        className="block text-base font-black text-foreground transition hover:text-primary-600"
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}:{" "}
                        {item.email}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <InfoIcon icon={<MapPin className="h-6 w-6" />} />
                  <div>
                    <h3 className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-text-sub">
                      Office Location
                    </h3>
                    {contactData.address.map((item, index) => (
                      <p
                        key={`${item.type}-${index}`}
                        className="text-base font-black leading-relaxed text-foreground"
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}:{" "}
                        {item.address}
                      </p>
                    ))}
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
                      {contactData.businessHours.weekdays}
                      <br />
                      {contactData.businessHours.saturday}
                      <br />
                      {contactData.businessHours.sunday}
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
                {contactData.faqs.slice(0, 3).map((faq) => (
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

          <section className="lg:col-span-7 space-y-8">
            <div className="rounded-[40px] border border-border bg-surface p-8 shadow-2xl shadow-foreground/5 dark:border-slate-800 dark:bg-slate-900 sm:p-10 space-y-6">
              <h2 className="font-heading text-2xl font-black text-foreground tracking-tight">
                How to Reach Us
              </h2>
              <p className="text-sm leading-relaxed text-text-sub font-medium">
                Use the contact details on the left to call, email, or visit our
                office. For product help, please include your company name,
                preferred module, and a short description of your request.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${contactData.supportEmail}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 px-5 py-3 font-heading text-sm font-bold text-white transition hover:bg-primary-700"
                >
                  <Mail className="h-4 w-4" />
                  Email Support
                </a>
                <a
                  href={`tel:${contactData.phone?.[0]?.phone?.replace(/\s+/g, "") || ""}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-background px-5 py-3 font-heading text-sm font-bold text-foreground transition hover:bg-surface-hover"
                >
                  <Phone className="h-4 w-4" />
                  Call Sales
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="space-y-8">
          <h2 className="font-heading text-2xl font-black text-foreground tracking-tight">
            Find Our Tech Hub
          </h2>
          <div className="relative z-10 h-[500px] overflow-hidden rounded-[48px] border border-border shadow-2xl shadow-foreground/5">
            <iframe
              src={contactData.googleMapsEmbedUrl}
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
