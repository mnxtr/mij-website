import { z } from 'zod';

export const recruitmentSchema = z.object({
  // Personal Information
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name must not exceed 100 characters' }),
  
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, { message: 'Please enter a valid phone number' })
    .min(10, { message: 'Phone number must be at least 10 digits' }),
  
  // Professional Information
  currentPosition: z
    .string()
    .min(2, { message: 'Current position must be at least 2 characters' })
    .max(100, { message: 'Current position must not exceed 100 characters' }),
  
  yearsOfExperience: z
    .number({ message: 'Years of experience is required' })
    .min(0, { message: 'Years of experience cannot be negative' })
    .max(50, { message: 'Please enter a valid number of years' }),
  
  desiredPosition: z
    .string()
    .min(2, { message: 'Desired position must be at least 2 characters' })
    .max(100, { message: 'Desired position must not exceed 100 characters' }),
  
  // Additional Information
  skills: z
    .string()
    .min(10, { message: 'Please provide at least a brief description of your skills' })
    .max(500, { message: 'Skills description must not exceed 500 characters' }),
  
  coverLetter: z
    .string()
    .min(50, { message: 'Cover letter must be at least 50 characters' })
    .max(2000, { message: 'Cover letter must not exceed 2000 characters' })
    .optional()
    .or(z.literal('')),
  
  linkedinUrl: z
    .string()
    .url({ message: 'Please enter a valid URL' })
    .optional()
    .or(z.literal('')),
  
  portfolioUrl: z
    .string()
    .url({ message: 'Please enter a valid URL' })
    .optional()
    .or(z.literal('')),
});

export type RecruitmentFormData = z.infer<typeof recruitmentSchema>;
