import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { contactSchema, type ContactFormValues } from '../schemas/contactSchema';
import { submitContactInquiry } from '../services/contactService';
import { siteConfig } from '../config/siteConfig';

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceInterestedIn: siteConfig.services[0]?.title ?? 'Platform consultation',
      website: '',
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactInquiry,
    onSuccess: () => reset(),
  });

  const fieldClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white';
  const labelClass = 'text-xs font-bold uppercase tracking-wide text-muted-foreground';

  if (mutation.isSuccess) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-md dark:bg-emerald-950/35">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-extrabold text-foreground">
          Consultation Request Received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Our team will review your workflow requirements and respond with the next best implementation step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit((values) => mutation.mutate(values))} className="space-y-6" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('website')} />

      <h3 className="border-b border-slate-100 pb-3 font-heading text-lg font-extrabold text-slate-900 dark:border-slate-800 dark:text-white">
        Submit Demo Request
      </h3>

      {mutation.isError && (
        <div className="flex items-center gap-2.5 rounded-xl border border-rose-500/10 bg-rose-50 p-4 text-xs font-bold text-rose-600 dark:bg-rose-950/20 dark:text-rose-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>We could not send the request. Please retry or contact sales directly.</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className={labelClass}>Name</span>
          <input className={fieldClass} placeholder="Your full name" {...register('name')} />
          {errors.name && <span className="text-xs text-rose-500">{errors.name.message}</span>}
        </label>
        <label className="space-y-1.5">
          <span className={labelClass}>Company Name</span>
          <input className={fieldClass} placeholder="Firm or organization" {...register('companyName')} />
          {errors.companyName && <span className="text-xs text-rose-500">{errors.companyName.message}</span>}
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className={labelClass}>Email</span>
          <input className={fieldClass} type="email" placeholder="name@company.com" {...register('email')} />
          {errors.email && <span className="text-xs text-rose-500">{errors.email.message}</span>}
        </label>
        <label className="space-y-1.5">
          <span className={labelClass}>Phone</span>
          <input className={fieldClass} type="tel" placeholder="+91 98765 43210" {...register('phone')} />
          {errors.phone && <span className="text-xs text-rose-500">{errors.phone.message}</span>}
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className={labelClass}>Service Interested In</span>
        <select className={fieldClass} {...register('serviceInterestedIn')}>
          {siteConfig.services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.serviceInterestedIn && <span className="text-xs text-rose-500">{errors.serviceInterestedIn.message}</span>}
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Message</span>
        <textarea
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your team size, current workflow, and timeline."
          {...register('message')}
        />
        {errors.message && <span className="text-xs text-rose-500">{errors.message.message}</span>}
      </label>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-4 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary-500/10 transition hover:bg-primary-700 disabled:bg-primary-400"
      >
        {mutation.isPending ? (
          <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Demo Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
};
