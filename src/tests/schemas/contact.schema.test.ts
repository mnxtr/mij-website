import { describe, it, expect } from 'vitest';
import { contactSchema, type ContactFormData } from '@/schemas/contact.schema';

describe('contactSchema', () => {
  describe('name field', () => {
    it('should accept valid names', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject names shorter than 2 characters', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Name must be at least 2 characters'
        );
      }
    });

    it('should reject names longer than 100 characters', () => {
      const invalidData = {
        name: 'a'.repeat(101),
        email: 'john@example.com',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Name must not exceed 100 characters'
        );
      }
    });
  });

  describe('email field', () => {
    it('should accept valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@company.co.jp',
        'contact+label@domain.com',
      ];

      validEmails.forEach((email) => {
        const data = {
          name: 'John Doe',
          email,
          message: 'This is a valid message with enough characters.',
        };

        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid email addresses', () => {
      const invalidEmails = [
        'not-an-email',
        'missing@domain',
        '@no-local-part.com',
        'no-at-sign.com',
      ];

      invalidEmails.forEach((email) => {
        const data = {
          name: 'John Doe',
          email,
          message: 'This is a valid message with enough characters.',
        };

        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe(
            'Please enter a valid email address'
          );
        }
      });
    });
  });

  describe('phone field', () => {
    it('should accept valid phone numbers', () => {
      const validPhones = [
        '1234567890',
        '+1 (234) 567-8900',
        '03-1234-5678',
        '+81 90 1234 5678',
      ];

      validPhones.forEach((phone) => {
        const data = {
          name: 'John Doe',
          email: 'john@example.com',
          phone,
          message: 'This is a valid message with enough characters.',
        };

        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(true);
      });
    });

    it('should accept empty phone (optional field)', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should reject invalid phone formats', () => {
      const invalidPhones = ['abc', 'phone123abc', '12345'];

      invalidPhones.forEach((phone) => {
        const data = {
          name: 'John Doe',
          email: 'john@example.com',
          phone,
          message: 'This is a valid message with enough characters.',
        };

        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(false);
      });
    });
  });

  describe('company field', () => {
    it('should accept valid company names', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corporation',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should accept empty company (optional field)', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        company: '',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should reject company names longer than 100 characters', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'a'.repeat(101),
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Company name must not exceed 100 characters'
        );
      }
    });
  });

  describe('message field', () => {
    it('should accept valid messages', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message with enough characters.',
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should reject messages shorter than 10 characters', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short',
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Message must be at least 10 characters'
        );
      }
    });

    it('should reject messages longer than 1000 characters', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'a'.repeat(1001),
      };

      const result = contactSchema.safeParse(data);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          'Message must not exceed 1000 characters'
        );
      }
    });
  });

  describe('complete form validation', () => {
    it('should validate a complete valid form', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 (234) 567-8900',
        company: 'Acme Corporation',
        message: 'I would like to inquire about your services.',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate with only required fields', () => {
      const minimalData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Minimal message here.',
      };

      const result = contactSchema.safeParse(minimalData);
      expect(result.success).toBe(true);
    });

    it('should collect multiple validation errors', () => {
      const invalidData = {
        name: 'J',
        email: 'not-an-email',
        phone: 'abc',
        message: 'Short',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThan(1);
      }
    });
  });
});
