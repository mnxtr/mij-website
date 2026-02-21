# MIJ Website - Modern Tech Stack Implementation

A modern, multilingual corporate website built with React, TypeScript, and a comprehensive tech stack. This project connects Japanese and Bangladeshi markets through innovative business solutions.

**Design Reference:** [Figma Design](https://www.figma.com/design/HkckQzdr7yT5GMoq32GNad/MIJ-Website-Redesign-Prompt)

## Features

- 🌐 **Multi-language Support** - English, Japanese (日本語), Bengali (বাংলা)
- 🎨 **Modern UI** - Built with Radix UI components and Tailwind CSS
- 🚀 **Fast Navigation** - React Router with lazy loading and code splitting
- 📱 **Responsive Design** - Mobile-first approach with smooth animations
- ✅ **Form Validation** - Type-safe forms with Zod and React Hook Form
- 🔄 **State Management** - Zustand for global state, TanStack Query for server state
- 🎯 **TypeScript Strict Mode** - Full type safety throughout the application
- 🧪 **Testing Ready** - Configured for unit and E2E testing
- 📦 **Optimized Build** - Production-ready with Vite

## Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 6** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Routing & Navigation
- **React Router v6** - Client-side routing with URL support

### State Management
- **Zustand** - Lightweight global state management
- **TanStack Query v5** - Server state management and data fetching
- **React Context** - Component-level state

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Code Quality
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript Strict Mode** - Enhanced type checking

## Project Structure

```
src/
├── api/                    # API client and endpoints
│   ├── client.ts          # Axios instance with interceptors
│   └── endpoints.ts       # API endpoint definitions
├── components/
│   ├── figma/             # Figma-generated components
│   ├── pages/             # Page components (lazy loaded)
│   └── ui/                # Reusable UI components
├── contexts/              # React context providers
│   └── LanguageContext.tsx
├── hooks/                 # Custom React hooks
│   ├── useNews.ts        # News data fetching
│   ├── useClients.ts     # Client data fetching
│   └── useContact.ts     # Contact form submission
├── layouts/               # Layout components
│   └── RootLayout.tsx    # Main app layout
├── lib/                   # Library configurations
│   └── queryClient.ts    # TanStack Query config
├── router/                # Routing configuration
│   └── index.tsx         # Route definitions
├── schemas/               # Zod validation schemas
│   ├── contact.schema.ts
│   └── recruit.schema.ts
├── stores/                # Zustand stores
│   ├── uiStore.ts        # UI state (language, sidebar, etc.)
│   └── authStore.ts      # Authentication state
├── styles/                # Global styles
│   └── globals.css
├── translations/          # i18n translations
│   ├── en.ts             # English
│   ├── ja.ts             # Japanese
│   └── bn.ts             # Bengali
├── types/                 # TypeScript type definitions
│   └── api.ts            # API response types
├── App.tsx               # Root component
└── main.tsx              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm 10+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "MIJ Website Redesign Prompt (1)"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:3001/api
   VITE_API_TIMEOUT=10000
   VITE_ENV=development
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:3000`

## Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking
```

## Pages

The website includes 9 main pages:

1. **Home** (`/`) - Hero, services overview, stats, news
2. **About** (`/about`) - Company info, mission, vision, values
3. **Business** (`/business`) - Business divisions and offerings
4. **Services** (`/services`) - Detailed service descriptions
5. **News** (`/news`) - Company news and updates
6. **Clients** (`/clients`) - Client showcase and testimonials
7. **Partners** (`/partners`) - Partnership information
8. **Recruit** (`/recruit`) - Career opportunities
9. **Contact** (`/contact`) - Contact form and office locations

## Language Switching

The application supports three languages with persistent storage:

```typescript
import { useUIStore } from './stores/uiStore';

// Get current language
const language = useUIStore((state) => state.language);

// Change language
const setLanguage = useUIStore((state) => state.setLanguage);
setLanguage('ja'); // 'en' | 'ja' | 'bn'
```

## API Integration

The project is configured with mock data for development. To connect to a real API:

1. **Update environment variables**
   ```env
   VITE_API_BASE_URL=https://your-api.com/api
   ```

2. **Uncomment API calls in hooks**
   ```typescript
   // In src/hooks/useNews.ts
   const { data } = await apiClient.get<NewsArticle[]>(API_ENDPOINTS.news.list);
   return data;
   ```

3. **Add authentication token handling** in `src/api/client.ts`

## Form Validation Example

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from './schemas/contact.schema';

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});

const onSubmit = async (data: ContactFormData) => {
  // Form data is validated and type-safe
  await submitContact(data);
};
```

## Deployment

### GitHub Pages (Free & Easy) ⭐

**Automatic deployment on every push!**

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete step-by-step instructions.

**Quick Start:**

1. **Create a GitHub repository** and push your code
2. **Enable GitHub Pages** in repository Settings → Pages → Source: "GitHub Actions"
3. **Done!** Your site will be live at `https://username.github.io/repo-name/`

The deployment workflow (`.github/workflows/deploy.yml`) automatically:
- Builds the project on every push to `main`
- Deploys to GitHub Pages
- Handles client-side routing for React Router

### Vercel (Alternative)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Add environment variables in Vercel dashboard
   - Deploy!

### Manual Build

```bash
npm run build
# Files will be in the `build/` directory
# Deploy the `build/` directory to any static hosting
```

## Performance

Current build statistics:
- **Total bundle size**: ~475 KB (gzipped: ~146 KB)
- **Lazy-loaded routes**: All pages are code-split
- **Image optimization**: WebP format support
- **CSS**: Single optimized bundle (58 KB, gzipped: 9.92 KB)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "Add: your feature description"
   ```

3. Push and create a pull request
   ```bash
   git push origin feature/your-feature-name
   ```

## Known Issues

- Translation files have duplicate keys for `cta` (non-breaking, need cleanup)
- Mock data is used for API calls (replace with real endpoints)

## Future Enhancements

### Phase 5 (Testing)
- [ ] Vitest unit tests
- [ ] React Testing Library component tests
- [ ] Playwright E2E tests
- [ ] 80%+ test coverage

### Phase 6 (Optimization)
- [ ] Image optimization with WebP/AVIF
- [ ] Performance monitoring
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO optimization with react-helmet-async

### Phase 7 (Deployment)
- [ ] GitHub Actions CI/CD pipeline
- [ ] Automated testing on PR
- [ ] Preview deployments
- [ ] Production deployment to Vercel

## License

Proprietary - All rights reserved

## Support

For support, email: info@axshtech.com

---

**Built with ❤️ by the MIJ Team**