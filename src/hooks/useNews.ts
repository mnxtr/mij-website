import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import type { NewsArticle } from '../types/api';

// Mock data for development
const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'MIJ Expands Operations in Bangladesh',
    excerpt: 'New office opening in Dhaka strengthens our commitment to the region',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    date: '2024-01-15',
    category: 'Company News',
    author: 'MIJ Team',
  },
  {
    id: '2',
    title: 'Partnership Announcement with Leading Japanese Manufacturer',
    excerpt: 'Strategic partnership to bring Japanese quality products to Bangladesh',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    date: '2024-01-10',
    category: 'Partnerships',
    author: 'MIJ Team',
  },
  {
    id: '3',
    title: 'IT Services Expansion',
    excerpt: 'Launching new digital transformation services for enterprises',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    date: '2024-01-05',
    category: 'Services',
    author: 'MIJ Team',
  },
];

export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      // For development, return mock data
      // In production, uncomment the API call:
      // const { data } = await apiClient.get<NewsArticle[]>(API_ENDPOINTS.news.list);
      // return data;
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockNews;
    },
  });
}

export function useNewsArticle(id: string) {
  return useQuery({
    queryKey: ['news', id],
    queryFn: async () => {
      // For development, return mock data
      // const { data } = await apiClient.get<NewsArticle>(API_ENDPOINTS.news.detail(id));
      // return data;
      
      await new Promise((resolve) => setTimeout(resolve, 300));
      return mockNews.find((article) => article.id === id) || null;
    },
    enabled: !!id,
  });
}
