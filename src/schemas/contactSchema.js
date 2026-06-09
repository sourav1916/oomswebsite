import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80),
  companyName: z
    .string()
    .trim()
    .min(2, "Enter your firm or company name.")
    .max(120),
  email: z.string().trim().email("Enter a valid business email."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{10,18}$/, "Enter a valid phone number."),
  serviceInterestedIn: z.string().trim().min(2, "Select a service."),
  message: z
    .string()
    .trim()
    .min(12, "Add a short note about your requirement.")
    .max(1200),
  website: z
    .string()
    .max(0, "Spam protection triggered.")
    .optional()
    .or(z.literal("")),
});
