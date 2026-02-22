import { useMutation } from '@tanstack/react-query';
// import { apiClient } from '../api/client';
// import { API_ENDPOINTS } from '../api/endpoints';
import type { ContactFormData } from '../types/api';

export function useContactForm() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // In production:
      // const response = await apiClient.post(API_ENDPOINTS.contact.submit, data);
      // return response.data;
      
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', data);
      return { success: true, message: 'Thank you for contacting us!' };
    },
  });
}
