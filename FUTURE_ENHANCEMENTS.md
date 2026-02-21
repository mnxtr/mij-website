# Future Enhancements & Roadmap

## Overview
This document outlines potential enhancements and improvements for the MIJ Website Redesign project, organized by priority and category.

---

## 🎯 High Priority Enhancements

### 1. Complete Placeholder Content with Real Assets

#### 1.1 Contact Information
**Current State**: Phone numbers are placeholders (`+81 (0)3-XXXX-XXXX`, `+880 2-XXXX-XXXX`)

**Files to Update**:
- `src/components/pages/ContactPage.tsx` (lines 52, 61, 234-235)
- `src/components/Footer.tsx` (line 136)

**Action Items**:
```typescript
// Replace in ContactPage.tsx
{
  country: () => t.contact.offices.japan.country,
  flag: '🇯🇵',
  city: () => t.contact.offices.japan.city,
  address: '1-2-3 Shibuya, Shibuya-ku\nTokyo 150-0002, Japan',
  phone: '+81 3-1234-5678',  // ← Replace with actual phone
  email: 'japan@mijcompany.com',  // ← Update domain
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST',
},
{
  country: () => t.contact.offices.bangladesh.country,
  flag: '🇧🇩',
  city: () => t.contact.offices.bangladesh.city,
  address: 'House 45, Road 12, Banani\nDhaka 1213, Bangladesh',
  phone: '+880 2-9876543',  // ← Replace with actual phone
  email: 'bangladesh@mijcompany.com',  // ← Update domain
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM BST',
}
```

#### 1.2 Replace Unsplash Images with Brand Assets
**Current State**: News articles use Unsplash placeholder images

**Files to Update**:
- `src/hooks/useNews.ts` (lines 13, 23, 33)
- `src/hooks/useClients.ts` (client logos)

**Action Items**:
```typescript
// Option 1: Use existing Figma assets
import newsImage1 from '@/assets/d0b64312d47a4a667250b56920bfd5ebfc07b71b.png';
import newsImage2 from '@/assets/3d60b45b9f98358d9bf4a0cce020327d39812327.png';

// Option 2: Add new branded images to /src/assets/
// Then update mockNews array:
const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'MIJ Expands Operations in Bangladesh',
    excerpt: 'New office opening in Dhaka strengthens our commitment to the region',
    image: newsImage1,  // Use imported asset
    // ... rest of data
  },
];

// Option 3: Use a CDN or asset management service
image: 'https://cdn.mijcompany.com/news/article-1.jpg'
```

#### 1.3 Add Real Company Logo
**Current State**: No company logo in Header or Footer

**Action Items**:
1. Add logo file to `/src/assets/logo.svg` or `/src/assets/logo.png`
2. Update Header component:
```typescript
// src/components/Header.tsx
import logo from '@/assets/logo.svg';

<Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="MIJ Company" className="h-8 w-auto" />
  <span className="text-xl font-bold">MIJ</span>
</Link>
```

#### 1.4 Client & Partner Logos
**Current State**: Using placeholder data in `useClients.ts`

**Action Items**:
```typescript
// src/hooks/useClients.ts
import clientLogo1 from '@/assets/clients/company-1.png';
import clientLogo2 from '@/assets/clients/company-2.png';

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Toyota Corporation',
    logo: clientLogo1,  // Real logo
    industry: 'Automotive',
    partnership_since: '2020',
    description: 'Leading automotive manufacturer...',
  },
  // Add more clients
];
```

---

## 🔌 API Integration

### 2. Connect to Real Backend API

#### 2.1 Remove Mock Data
**Current State**: All hooks use mock data with setTimeout delays

**Files to Update**:
- `src/hooks/useNews.ts`
- `src/hooks/useClients.ts`
- `src/hooks/useContact.ts`

**Action Items**:
```typescript
// 1. Update .env file with real API URL
VITE_API_BASE_URL=https://api.mijcompany.com

// 2. Uncomment API calls in hooks
export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data } = await apiClient.get<NewsArticle[]>(API_ENDPOINTS.news.list);
      return data;
    },
  });
}

// 3. Remove mock data arrays
// Delete mockNews, mockClients, etc.

// 4. Update ContactPage to handle real API responses
const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await contactMutation.mutateAsync(data);
    reset();
    toast.success(response.message);  // Use toast instead of alert
  } catch (error) {
    toast.error('Failed to submit form. Please try again.');
  }
};
```

#### 2.2 Add API Authentication
**If API requires authentication**:

```typescript
// src/stores/authStore.ts - Already created, just needs implementation
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('auth_token'),
  isAuthenticated: !!localStorage.getItem('auth_token'),
  
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    const { token, user } = response.data;
    
    localStorage.setItem('auth_token', token);
    set({ token, user, isAuthenticated: true });
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));

// Update apiClient.ts to use token
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

## 🎨 UI/UX Enhancements

### 3. Toast Notifications
**Replace browser alerts with professional toast notifications**

```bash
npm install sonner
```

```typescript
// src/main.tsx
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </LanguageProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// Usage in components
import { toast } from 'sonner';

toast.success('Form submitted successfully!');
toast.error('An error occurred');
toast.loading('Submitting...');
```

### 4. Loading States & Skeletons
**Add skeleton loaders for better perceived performance**

```typescript
// src/components/ui/skeleton.tsx
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

// Usage in NewsPage
{isLoading ? (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <Card key={n}>
        <Skeleton className="h-48 w-full" />
        <CardContent className="p-6">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
      </Card>
    ))}
  </div>
) : (
  // Actual content
)}
```

### 5. Image Optimization

#### 5.1 Convert to Modern Formats
```bash
# Install image optimization tools
npm install -D @squoosh/lib sharp

# Or use online tools to convert:
# PNG → WebP (smaller, modern)
# PNG → AVIF (even smaller, cutting-edge)
```

#### 5.2 Implement Lazy Loading
```typescript
// src/components/ui/image.tsx
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className,
  fallback = '/placeholder.svg',
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={error ? fallback : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
}
```

### 6. Add SEO Optimization

```bash
npm install react-helmet-async
```

```typescript
// src/main.tsx
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {/* ... */}
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | MIJ Company</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

// Usage in pages
import { SEO } from '@/components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about MIJ Company, bridging Japanese and Bangladeshi markets"
        image="https://mijcompany.com/og-about.jpg"
      />
      {/* Page content */}
    </>
  );
}
```

---

## 🔧 Code Quality Enhancements

### 7. Add Pre-commit Hooks (Husky)

```bash
npm install -D husky lint-staged

# Initialize husky
npx husky init

# Add pre-commit hook
echo "npx lint-staged" > .husky/pre-commit
```

```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

### 8. Fix UI Component Ref Warnings
**Current Issue**: Input and Textarea components show forwardRef warnings in tests

```typescript
// src/components/ui/input.tsx
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(/* ... */)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

// Same for Textarea
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(/* ... */)}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
```

### 9. Improve Test Coverage

```bash
# Run coverage report
npm run test:coverage

# Aim for 80%+ coverage on:
# - All custom hooks
# - All form schemas
# - Critical user flows (E2E)
# - Key components (Header, Footer, ContactPage)
```

**Add tests for**:
- `src/hooks/useNews.ts`
- `src/hooks/useClients.ts`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/pages/HomePage.tsx`
- `src/schemas/recruit.schema.ts`

### 10. Fix Translation Duplicate Keys
**Issue**: Warning about duplicate `cta` keys in translation files

```typescript
// src/translations/en.ts (around lines 311-347)
// Find and rename duplicate keys:

export const en = {
  // ...
  business: {
    cta: 'Learn More About Our Business',
  },
  services: {
    ctaButton: 'Explore Our Services',  // ← Renamed from 'cta'
  },
  // Make all CTA keys unique per section
};
```

---

## 🚀 Performance Enhancements

### 11. Bundle Size Optimization

```typescript
// vite.config.ts - Add bundle analysis
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-form': ['react-hook-form', 'zod'],
        },
      },
    },
  },
});
```

### 12. Implement Progressive Web App (PWA)

```bash
npm install -D vite-plugin-pwa
```

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MIJ Company',
        short_name: 'MIJ',
        description: 'Bridging Japanese and Bangladeshi markets',
        theme_color: '#D4387F',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
```

---

## 🌐 Feature Additions

### 13. Add CMS Integration
**For easy content management**

Options:
- **Strapi**: Open-source headless CMS
- **Contentful**: Cloud-based CMS
- **Sanity**: Real-time collaboration CMS

```typescript
// Example with Sanity
npm install @sanity/client

// src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Fetch news from CMS
export async function fetchNews() {
  return sanity.fetch(`
    *[_type == "news"] | order(date desc) {
      _id,
      title,
      excerpt,
      "image": image.asset->url,
      date,
      category,
      author
    }
  `);
}
```

### 14. Add Analytics

```bash
npm install @vercel/analytics
# or
npm install react-ga4
```

```typescript
// src/main.tsx
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ... */}
    <Analytics />
  </React.StrictMode>
);

// Or with Google Analytics
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');

// Track page views
useEffect(() => {
  ReactGA.send({ hitType: 'pageview', page: location.pathname });
}, [location]);
```

### 15. Add Search Functionality

```typescript
// src/components/Search.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="pl-10 pr-4 py-2 border rounded-lg"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </form>
  );
}
```

### 16. Add Blog/News Detail Pages

```typescript
// src/router/index.tsx
{
  path: '/news/:id',
  lazy: async () => {
    const { default: Component } = await import('@/components/pages/NewsDetailPage');
    return { Component };
  },
}

// src/components/pages/NewsDetailPage.tsx
export default function NewsDetailPage() {
  const { id } = useParams();
  const { data: article, isLoading } = useNewsArticle(id!);

  if (isLoading) return <LoadingSkeleton />;
  if (!article) return <NotFound />;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-lg" />
      <h1 className="text-4xl font-bold mt-8">{article.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mt-4">
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.author}</span>
      </div>
      <div className="prose prose-lg mt-8">
        {article.content}
      </div>
    </article>
  );
}
```

---

## 📱 Accessibility Enhancements

### 17. Accessibility Audit & Fixes

```bash
# Install accessibility testing tools
npm install -D @axe-core/react
```

```typescript
// src/main.tsx (development only)
if (import.meta.env.DEV) {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}
```

**Action Items**:
- Add ARIA labels to all interactive elements
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add focus indicators for keyboard navigation
- Test with screen readers
- Ensure color contrast ratios meet WCAG AA standards

### 18. Keyboard Navigation Improvements

```typescript
// Add keyboard shortcuts
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
      e.preventDefault();
      searchInputRef.current?.focus();
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

---

## 🔒 Security Enhancements

### 19. Add Security Headers

```typescript
// vite.config.ts - For dev server
export default defineConfig({
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    },
  },
});

// For Vercel deployment, add vercel.json:
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### 20. Input Sanitization

```bash
npm install dompurify
npm install -D @types/dompurify
```

```typescript
// src/lib/sanitize.ts
import DOMPurify from 'dompurify';

export function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target'],
  });
}

// Usage in components that display user content
<div dangerouslySetInnerHTML={{ __html: sanitizeHTML(userContent) }} />
```

---

## 📊 Monitoring & Analytics

### 21. Error Tracking

```bash
npm install @sentry/react
```

```typescript
// src/main.tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://your-sentry-dsn@sentry.io/project-id',
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### 22. Performance Monitoring

```typescript
// src/lib/performance.ts
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
  
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'timing_complete', {
      name,
      value: Math.round(end - start),
    });
  }
}
```

---

## 📋 Implementation Priority Matrix

| Priority | Enhancement | Effort | Impact | Status |
|----------|-------------|--------|--------|--------|
| 🔴 HIGH | Replace placeholder phone numbers | Low | High | ⏳ Pending |
| 🔴 HIGH | Connect real API backend | Medium | High | ⏳ Pending |
| 🔴 HIGH | Add company logo | Low | High | ⏳ Pending |
| 🔴 HIGH | Replace Unsplash images with brand assets | Low | High | ⏳ Pending |
| 🟡 MEDIUM | Add toast notifications | Low | Medium | ⏳ Pending |
| 🟡 MEDIUM | Fix UI component ref warnings | Low | Medium | ⏳ Pending |
| 🟡 MEDIUM | Add SEO optimization | Medium | High | ⏳ Pending |
| 🟡 MEDIUM | Add Husky pre-commit hooks | Low | Medium | ⏳ Pending |
| 🟡 MEDIUM | Image optimization (WebP/AVIF) | Medium | Medium | ⏳ Pending |
| 🟢 LOW | Add analytics tracking | Low | Medium | ⏳ Pending |
| 🟢 LOW | Implement PWA | Medium | Low | ⏳ Pending |
| 🟢 LOW | Add CMS integration | High | Low | ⏳ Pending |
| 🟢 LOW | Add search functionality | Medium | Low | ⏳ Pending |

---

## 🎯 Quick Wins (Can be done in <1 hour each)

1. ✅ Replace placeholder phone numbers
2. ✅ Add company logo to Header/Footer
3. ✅ Fix translation duplicate keys
4. ✅ Add toast notifications (replace alerts)
5. ✅ Add loading skeletons
6. ✅ Install and configure Husky
7. ✅ Fix Input/Textarea forwardRef warnings
8. ✅ Add favicon and meta tags
9. ✅ Configure Vercel environment variables
10. ✅ Add README badges (build status, license)

---

## 📝 Next Steps

### Immediate (This Week)
1. Replace all placeholder content with real data
2. Connect to staging/production API
3. Add company branding (logo, colors, fonts)
4. Deploy to production on Vercel

### Short-term (This Month)
1. Implement toast notifications
2. Add SEO optimization
3. Set up analytics tracking
4. Fix remaining test failures
5. Add Husky pre-commit hooks

### Medium-term (This Quarter)
1. Implement CMS for content management
2. Add search functionality
3. Create blog/news detail pages
4. Optimize images and bundle size
5. Implement PWA features

### Long-term (Next 6 Months)
1. Add multi-currency support (if needed)
2. Implement user authentication portal
3. Add customer dashboard
4. Create admin panel
5. Expand to additional languages

---

## 📚 Resources

- [Figma Design](https://www.figma.com/design/HkckQzdr7yT5GMoq32GNad/MIJ-Website-Redesign-Prompt)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [TanStack Query Documentation](https://tanstack.com/query/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)

---

**Last Updated**: February 21, 2026
**Maintained By**: Development Team
