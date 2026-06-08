import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const contactFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faqs.slice(0, 4).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
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
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' },
        ]}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400">
            Connect With Us
          </span>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Schedule a Live Platform Demonstration
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Speak with a product specialist about workflows, data migration, access control, and the rollout plan for your team.
          </p>
        </section>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-5">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <h2 className="font-heading text-lg font-extrabold text-foreground">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <InfoIcon icon={<Phone className="h-5 w-5" />} />
                  <div>
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Call Us</h3>
                    {siteConfig.phoneNumbers.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number.replace(/\s+/g, '')}`}
                        className="block text-sm font-semibold text-slate-700 transition hover:text-primary-600 dark:text-slate-300"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <InfoIcon icon={<Mail className="h-5 w-5" />} />
                  <div>
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Email Inquiries</h3>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="block text-sm font-semibold text-slate-700 transition hover:text-primary-600 dark:text-slate-300"
                    >
                      Support: {siteConfig.supportEmail}
                    </a>
                    <a
                      href={`mailto:${siteConfig.salesEmail}`}
                      className="block text-sm font-semibold text-slate-700 transition hover:text-primary-600 dark:text-slate-300"
                    >
                      Sales: {siteConfig.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <InfoIcon icon={<MapPin className="h-5 w-5" />} />
                  <div>
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Office Location</h3>
                    <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <InfoIcon icon={<Clock className="h-5 w-5" />} variant="indigo" />
                  <div>
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Business Hours</h3>
                    <p className="text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-300">
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

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-heading text-lg font-extrabold text-foreground">Common Questions</h2>
              <div className="mt-4 space-y-4">
                {siteConfig.faqs.slice(0, 3).map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-slate-100 p-4 dark:border-slate-800"
                  >
                    <summary className="cursor-pointer text-sm font-bold text-slate-800 dark:text-white">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <ContactForm />
            </div>
          </section>
        </div>

        <section className="space-y-4">
          <h2 className="font-heading text-lg font-extrabold text-foreground">Find Our Tech Hub</h2>
          <div className="relative z-10 h-96 overflow-hidden rounded-[32px] border border-slate-200 shadow-xl dark:border-slate-800">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              className="h-full w-full border-0"
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

const InfoIcon: React.FC<{ icon: React.ReactNode; variant?: 'primary' | 'indigo' }> = ({
  icon,
  variant = 'primary',
}) => (
  <div
    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
      variant === 'primary'
        ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400'
        : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400'
    }`}
  >
    {icon}
  </div>
);

export default Contact;
