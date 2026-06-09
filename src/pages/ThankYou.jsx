import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";

export const ThankYou = () => (
  <>
    <SEO
      title="Thank You"
      description="Thank you for contacting OOMS. Our team will review your request and respond with the next steps."
      breadcrumbs={[
        { name: "Home", item: "/" },
        { name: "Thank You", item: "/thank-you" },
      ]}
    />

    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <CheckCircle2 className="mb-6 h-16 w-16 text-emerald-500" />
      <h1 className="font-heading text-4xl font-extrabold text-foreground">
        Your request is in.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-muted-foreground">
        We will review your workflow needs and respond with a practical
        recommendation for demo, onboarding, or migration.
      </p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 font-heading text-sm font-bold text-white transition hover:bg-primary-700"
      >
        Explore services
        <ArrowRight className="h-4 w-4" />
      </Link>
    </main>
  </>
);

export default ThankYou;
