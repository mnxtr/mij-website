# MIJ Website - Architecture Documentation

## Overview

This document describes the technical architecture, design decisions, and best practices for the MIJ Website project.

## Architecture Principles

### 1. Component-Based Architecture
- Modular, reusable components
- Single Responsibility Principle
- Composition over inheritance
- Prop drilling avoided using Context/Zustand

### 2. Type Safety
- TypeScript strict mode enabled
- Zod for runtime validation
- Type inference from schemas
- Minimal use of `any` types

### 3. Performance First
- Code splitting with React.lazy()
- Route-based lazy loading
- Optimized bundle sizes
- Image lazy loading
- Memoization where appropriate

### 4. Developer Experience
- ESLint + Prettier for consistency
- Hot module replacement with Vite
- TypeScript IntelliSense
- Clear folder structure
- Comprehensive documentation

## Layer Architecture

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│    (Components, Pages, Layouts)     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         Application Layer           │
│   (Hooks, Stores, Router, i18n)     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          Domain Layer               │
│   (Schemas, Types, Validation)      │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       Infrastructure Layer          │
│      (API Client, Services)         │
└─────────────────────────────────────┘
```

## State Management Strategy

### Global UI State (Zustand)
```typescript
// src/stores/uiStore.ts
- Language preference (persisted)
- Sidebar state
- Theme (if added)
- Global UI flags
```

### Server State (TanStack Query)
```typescript
// src/hooks/*.ts
- News articles
- Client data
- Project listings
- Form submissions (mutations)
```

### Local Component State (useState)
```typescript
// Within components
- Form inputs (managed by react-hook-form)
- UI interactions (hover, touch states)
- Temporary visual states
```

### When to use what?

| State Type | Tool | Persistence | Example |
|------------|------|-------------|---------|
| User preferences | Zustand | localStorage | Language, theme |
| Server data | TanStack Query | Cache (5-10min) | News, clients |
| Form data | React Hook Form | None | Contact form |
| UI interactions | useState | None | Modal open/close |

## Routing Architecture

### Route Structure
```typescript
/ (RootLayout)
├── / (HomePage) - lazy loaded
├── /about (AboutPage) - lazy loaded
├── /business (BusinessPage) - lazy loaded
├── /news (NewsPage) - lazy loaded
├── /services (ServicesPage) - lazy loaded
├── /clients (ClientsPage) - lazy loaded
├── /partners (PartnersPage) - lazy loaded
├── /recruit (RecruitPage) - lazy loaded
├── /contact (ContactPage) - lazy loaded
└── * (404 - redirects to /)
```

### Code Splitting Benefits
- Initial bundle: ~146 KB (gzipped)
- Each page: 2-30 KB (gzipped)
- Loaded on demand
- Faster initial page load

## Data Flow

### Fetching Data
```typescript
// 1. Define API types
interface NewsArticle { ... }

// 2. Create custom hook
export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
}

// 3. Use in component
const { data, isLoading, error } = useNews();
```

### Submitting Data
```typescript
// 1. Define schema
const contactSchema = z.object({ ... });

// 2. Create mutation hook
export function useContactForm() {
  return useMutation({
    mutationFn: submitContact,
  });
}

// 3. Use with form
const mutation = useContactForm();
const onSubmit = (data) => mutation.mutate(data);
```

## Form Validation Flow

```
User Input
    ↓
React Hook Form (register)
    ↓
Zod Schema Validation (zodResolver)
    ↓
[Invalid] → Display Errors
[Valid]   → Submit Handler
    ↓
TanStack Query Mutation
    ↓
[Success] → Reset form, Show success
[Error]   → Display error message
```

## API Integration Patterns

### Development (Mock Data)
```typescript
// Mock data returned immediately
await new Promise(resolve => setTimeout(resolve, 500));
return mockData;
```

### Production (Real API)
```typescript
// Uncomment in hooks
const { data } = await apiClient.get(endpoint);
return data;
```

### Error Handling
```typescript
// Automatic retry (1 time)
// 401 → Redirect to login
// Other errors → Display to user
```

## Performance Optimizations

### Current Optimizations
1. **Route-based code splitting** - Each page loads independently
2. **Component lazy loading** - Suspense boundaries
3. **Image optimization** - Fallback handling
4. **CSS optimization** - Single bundled file
5. **Query caching** - 5-10 minute stale time

### Future Optimizations
1. **Image formats** - WebP/AVIF with fallbacks
2. **React.memo** - Expensive components
3. **Virtual scrolling** - Long lists
4. **Service Worker** - Offline support
5. **Bundle analysis** - Identify large dependencies

## Security Considerations

### Current Security
- Input validation with Zod
- XSS protection (React default)
- HTTPS in production
- No sensitive data in localStorage
- API token in headers only

### Recommended Additions
- Content Security Policy (CSP)
- Rate limiting on API
- CSRF protection
- Helmet.js for headers
- Regular dependency updates

## Internationalization (i18n)

### Structure
```typescript
// src/translations/en.ts
export const en = {
  nav: { home: 'Home', ... },
  common: { learnMore: 'Learn More', ... },
  home: { hero: { ... }, ... },
  // ... more translations
};
```

### Usage
```typescript
const { language } = useLanguage();
const t = getTranslation(language);

<h1>{t.home.hero.title}</h1>
```

### Adding New Language
1. Create `src/translations/[lang].ts`
2. Copy structure from `en.ts`
3. Translate all strings
4. Export from `src/translations/index.ts`
5. Add to `Language` type

## Testing Strategy (When Implemented)

### Unit Tests (Vitest)
```typescript
// Test utilities, helpers, schemas
describe('contactSchema', () => {
  it('validates email correctly', () => {
    // ...
  });
});
```

### Component Tests (React Testing Library)
```typescript
// Test user interactions, rendering
describe('ContactForm', () => {
  it('shows error on invalid email', async () => {
    // ...
  });
});
```

### E2E Tests (Playwright)
```typescript
// Test complete user flows
test('user can submit contact form', async () => {
  // ...
});
```

## Deployment Architecture

```
GitHub Repository
       ↓
   Git Push
       ↓
GitHub Actions CI
       ↓
   Build & Test
       ↓
    Vercel
       ↓
Edge Network (CDN)
       ↓
  End Users
```

### Environment Variables
- Development: `.env.local`
- Production: Vercel dashboard
- Never commit secrets!

## Monitoring & Analytics (Future)

### Recommended Tools
- **Vercel Analytics** - Performance metrics
- **Sentry** - Error tracking
- **Google Analytics** - User behavior
- **LogRocket** - Session replay

## Best Practices

### Component Guidelines
```typescript
// ✅ Good
export default function MyComponent({ title }: Props) {
  // Single responsibility
  // Clear prop types
  // Handles loading/error states
}

// ❌ Avoid
function Component({ data }: any) {
  // Multiple responsibilities
  // Any types
  // No error handling
}
```

### Hook Guidelines
```typescript
// ✅ Good
export function useFeature() {
  // Single concern
  // Returns clear interface
  // Handles edge cases
}

// ❌ Avoid
export function useEverything() {
  // Does too much
  // Unclear return value
  // No error handling
}
```

### State Guidelines
```typescript
// ✅ Good
const [isOpen, setIsOpen] = useState(false);

// ❌ Avoid
const [state, setState] = useState({ 
  isOpen: false,
  data: null,
  error: null,
  loading: false,
  // Too much in one state
});
```

## Migration Guide (For Future Updates)

### Adding a New Page
1. Create component in `src/components/pages/`
2. Add route to `src/router/index.tsx`
3. Add translations to all language files
4. Update navigation in Header/Footer

### Adding a New Feature
1. Define types in `src/types/`
2. Create API endpoint in `src/api/endpoints.ts`
3. Create hook in `src/hooks/`
4. Use hook in components

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update safely
npm update

# Major updates (test thoroughly)
npm install package@latest
```

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules build .vite
npm install
npm run build
```

### Type Errors
```bash
# Run type check
npm run type-check

# Check tsconfig
# Enable/disable strict flags as needed
```

### Runtime Errors
- Check browser console
- Verify API responses
- Check network tab
- Review TanStack Query Devtools

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)

---

Last Updated: 2024
