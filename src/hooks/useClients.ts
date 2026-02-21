import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import type { Client } from '../types/api';

// Mock data for development
const mockClients: Client[] = [
  {
    id: '1',
    name: 'Pathao',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200',
    industry: 'Logistics & Delivery',
    description: 'Leading on-demand logistics and delivery platform in Bangladesh',
    website: 'https://pathao.com',
  },
  {
    id: '2',
    name: 'SHAMS Group',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200',
    industry: 'Manufacturing',
    description: 'One of the largest industrial conglomerates in Bangladesh',
    website: 'https://shamsgroup.com',
  },
  {
    id: '3',
    name: 'TechCorp Japan',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200',
    industry: 'Technology',
    description: 'Japanese technology solutions provider',
  },
];

export function useClients() {
  return useQuery({
    queryKey: ['clients'],
    queryFn: async () => {
      // For development, return mock data
      // In production:
      // const { data } = await apiClient.get<Client[]>(API_ENDPOINTS.clients.list);
      // return data;
      
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockClients;
    },
  });
}

export function useClient(id: string) {
  return useQuery({
    queryKey: ['clients', id],
    queryFn: async () => {
      // const { data } = await apiClient.get<Client>(API_ENDPOINTS.clients.detail(id));
      // return data;
      
      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockClients.find((client) => client.id === id) || null;
    },
    enabled: !!id,
  });
}
