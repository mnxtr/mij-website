import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, { message: 'Please enter a valid phone number' })
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .optional()
    .or(z.literal('')),
  
  company: z
    .string()
    .max(100, { message: 'Company name must not exceed 100 characters' })
    .optional()
    .or(z.literal('')),
  
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must not exceed 1000 characters' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
