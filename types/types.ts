import {
  addApplicationSchema,
  loginSchema,
  newPasswordSchema,
  registerSchema,
  resetSchema,
} from "@/schema/schema";
import { z } from "zod";

// register schema
export type TRegisterSchema = z.infer<typeof registerSchema>;

// login schema
export type TLoginSchema = z.infer<typeof loginSchema>;

// Password reset type
export type TResetSchema = z.infer<typeof resetSchema>;

// New password Type
export type TNewPasswordSchema = z.infer<typeof newPasswordSchema>;

// New Application Type
export type TAddApplicationSchema = z.infer<typeof addApplicationSchema>;

// New Application type
export type JobApplication = {
  userId: string;
  jobTitle: string;
  companyName: string;
  salary?: string;
  jobStatus: string;
  dateApplied: Date;
  jobType?: string;
  location?: string;
  country?: string;
  jobLink?: string;
  followUpDate?: Date;
  notes?: string;
  recruiterName?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  linkedinProfile?: string;
  portfolio?: string;
  resume?: string;
  coverLetter?: string;
  otherFiles: string[];
  documentNotes?: string;
};
