import { z } from "zod";

export const enquirySourceSchema = z.enum(["contact", "consultation", "quick-enquiry"]);

export const submitEnquirySchema = z.object({
  source: enquirySourceSchema,
  name: z.string().trim().min(1, "Name is required").max(200),
  phone: z.string().trim().min(7, "Phone number is required").max(40),
  email: z
    .string()
    .trim()
    .max(200)
    .refine((value) => value === "" || z.string().email().safeParse(value).success, {
      message: "Enter a valid email",
    })
    .optional(),
  message: z.string().trim().max(5000).optional(),
  service: z.string().trim().max(120).optional(),
  qualification: z.string().trim().max(120).optional(),
  country: z.string().trim().max(120).optional(),
  goal: z.enum(["migrate", "study", "family"]).optional(),
  migrateCountry: z.string().trim().max(80).optional(),
  studyCountry: z.string().trim().max(80).optional(),
  visaType: z.string().trim().max(120).optional(),
});

export type SubmitEnquiryInput = z.infer<typeof submitEnquirySchema>;

export type SubmitEnquiryResult = { success: true } | { success: false; error: string };
