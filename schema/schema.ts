import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 Characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 Characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
    ),
});

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 Characters"),
});

// Password reset schema
export const resetSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 Characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
    ),
});

// AddApplication schema
export const addApplicationSchema = z.object({
  jobTitle: z
    .string({
      required_error: "Job title is required",
    })
    .min(1, "Job title must be at least 1 character"),
  companyName: z
    .string({
      required_error: "Company name is required",
    })
    .min(1, "Company name must be at least 1 character"),
  salary: z
    .union([
      z.number().positive("Salary must be a positive number"),
      z.string().optional(),
    ])
    .optional(),
  location: z.string().optional(),
  country: z.string().optional(),
  jobLink: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Invalid URL",
    }),
  notes: z.string().optional(),
  recruiterName: z.string().optional(),
  contactEmail: z
    .string()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Invalid email address",
    }),
  contactPhone: z.string().optional(),
  address: z.string().optional(),
  linkedinProfile: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Invalid URL",
    }),
  portfolio: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Invalid URL",
    }),
  documentNotes: z.string().optional(),
});
