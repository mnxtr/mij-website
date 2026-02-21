export const API_ENDPOINTS = {
  // News
  news: {
    list: '/news',
    detail: (id: string) => `/news/${id}`,
  },
  // Clients
  clients: {
    list: '/clients',
    detail: (id: string) => `/clients/${id}`,
  },
  // Projects
  projects: {
    list: '/projects',
    detail: (id: string) => `/projects/${id}`,
  },
  // Contact
  contact: {
    submit: '/contact',
  },
  // Recruitment
  recruitment: {
    submit: '/recruitment/apply',
    jobs: '/recruitment/jobs',
  },
} as const;
