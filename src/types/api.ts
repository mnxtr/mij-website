// News Types
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author?: string;
}

// Client Types
export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website?: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  image: string;
  category: string;
  date: string;
  status: 'completed' | 'ongoing' | 'planned';
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

// Recruitment Types
export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface JobApplication {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  resume: File;
  coverLetter?: string;
}
