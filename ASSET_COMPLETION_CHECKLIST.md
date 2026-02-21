# Asset Completion Checklist

This checklist provides step-by-step instructions for replacing all placeholder content with real assets.

---

## 📞 Contact Information

### ✅ Task 1: Update Phone Numbers

**Files to modify:**
- [ ] `src/components/pages/ContactPage.tsx`
- [ ] `src/components/Footer.tsx`

**Current placeholders:**
```typescript
// ContactPage.tsx - Line 52
phone: '+81 (0)3-XXXX-XXXX',

// ContactPage.tsx - Line 61  
phone: '+880 2-XXXX-XXXX',

// ContactPage.tsx - Lines 234-235
<p className="text-sm text-gray-600">+81 (0)3-XXXX-XXXX</p>
<p className="text-sm text-gray-600">+880 2-XXXX-XXXX</p>

// Footer.tsx - Line 136
<span className="text-sm text-muted-foreground">+81 (0)3-XXXX-XXXX</span>
```

**Action:** Replace `XXXX-XXXX` with actual phone numbers

---

## 🖼️ Images & Visual Assets

### ✅ Task 2: Add Company Logo

**Current state:** No logo in Header or Footer

**Steps:**
1. [ ] Obtain company logo file (preferably SVG for scalability)
2. [ ] Place logo in `/src/assets/` directory as:
   - `logo.svg` (preferred) or
   - `logo.png` (fallback)
3. [ ] Update `src/components/Header.tsx`:

```typescript
import logo from '@/assets/logo.svg';

// Find the Link component (around line 50) and update:
<Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="MIJ Company" className="h-8 w-auto" />
  <span className="text-xl font-bold">MIJ</span>
</Link>
```

4. [ ] Update `src/components/Footer.tsx` (similar approach)

---

### ✅ Task 3: Replace News Images

**Current state:** Using Unsplash placeholder images

**Files to modify:**
- [ ] `src/hooks/useNews.ts`

**Current placeholders (Lines 13, 23, 33):**
```typescript
image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
```

**Option A: Use Existing Figma Assets**
```typescript
// Import existing assets
import newsImage1 from '@/assets/d0b64312d47a4a667250b56920bfd5ebfc07b71b.png';
import newsImage2 from '@/assets/3d60b45b9f98358d9bf4a0cce020327d39812327.png';
import newsImage3 from '@/assets/2af45e4bf1e0936020bb934a75bdfdef991523cb.png';

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'MIJ Expands Operations in Bangladesh',
    image: newsImage1,
    // ...
  },
  {
    id: '2',
    title: 'Partnership Announcement with Leading Japanese Manufacturer',
    image: newsImage2,
    // ...
  },
  {
    id: '3',
    title: 'IT Services Expansion',
    image: newsImage3,
    // ...
  },
];
```

**Option B: Add New Branded Images**
1. [ ] Create/obtain news article images (recommended size: 800x600px)
2. [ ] Place in `/src/assets/news/` directory:
   - `article-1.jpg`
   - `article-2.jpg`
   - `article-3.jpg`
3. [ ] Import and use in `useNews.ts`

**Option C: Use CDN/External URLs**
```typescript
image: 'https://cdn.mijcompany.com/news/article-1.jpg',
```

---

### ✅ Task 4: Add Client & Partner Logos

**Files to modify:**
- [ ] `src/hooks/useClients.ts`

**Current state:** Generic placeholder logos

**Steps:**
1. [ ] Collect client/partner logo files
2. [ ] Create directory: `/src/assets/clients/`
3. [ ] Place logo files as:
   - `client-1.png`
   - `client-2.png`
   - etc.
4. [ ] Update `useClients.ts`:

```typescript
import client1Logo from '@/assets/clients/client-1.png';
import client2Logo from '@/assets/clients/client-2.png';
import client3Logo from '@/assets/clients/client-3.png';

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Toyota Corporation',
    logo: client1Logo,
    industry: 'Automotive',
    partnership_since: '2020',
    description: 'Leading automotive manufacturer partnering with MIJ...',
  },
  {
    id: '2',
    name: 'Sony Electronics',
    logo: client2Logo,
    industry: 'Electronics',
    partnership_since: '2019',
    description: 'Global electronics leader working with MIJ...',
  },
  // Add more clients
];
```

---

## 📧 Email Addresses

### ✅ Task 5: Update Email Addresses

**Files to modify:**
- [ ] `src/components/pages/ContactPage.tsx`
- [ ] `src/components/Footer.tsx`

**Current placeholders:**
```typescript
// ContactPage.tsx - Lines 53, 62
email: 'japan@axshtech.com',
email: 'bangladesh@axshtech.com',

// Footer.tsx
// Check for any email references
```

**Action:** Replace with actual company email addresses:
```typescript
email: 'japan@mijcompany.com',
email: 'bangladesh@mijcompany.com',
// or
email: 'contact@mijcompany.com',
```

---

## 🏢 Office Addresses

### ✅ Task 6: Verify Office Addresses

**Files to check:**
- [ ] `src/components/pages/ContactPage.tsx` (Lines 51, 60)

**Current addresses:**
```typescript
{
  address: '1-2-3 Shibuya, Shibuya-ku\nTokyo 150-0002, Japan',
},
{
  address: 'House 45, Road 12, Banani\nDhaka 1213, Bangladesh',
}
```

**Action:** Verify these are correct addresses or update with actual office locations

---

## 🌐 API Endpoints

### ✅ Task 7: Configure Production API

**Files to modify:**
- [ ] `.env.example`
- [ ] Create `.env.production` (not in git)

**Current:**
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

**Action:** Update with production API URL
```env
VITE_API_BASE_URL=https://api.mijcompany.com
# or
VITE_API_BASE_URL=https://api.mijcompany.com/v1
```

---

### ✅ Task 8: Remove Mock Data

**Files to modify:**
- [ ] `src/hooks/useNews.ts`
- [ ] `src/hooks/useClients.ts`
- [ ] `src/hooks/useContact.ts`

**Steps:**
1. [ ] Ensure API endpoints are configured
2. [ ] Test API connectivity
3. [ ] In each hook file, uncomment the API calls:

```typescript
// BEFORE (mock data):
export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockNews;
    },
  });
}

// AFTER (real API):
export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data } = await apiClient.get<NewsArticle[]>(API_ENDPOINTS.news.list);
      return data;
    },
  });
}
```

4. [ ] Remove or comment out mock data arrays
5. [ ] Test thoroughly

---

## 🎨 Branding Assets

### ✅ Task 9: Add Favicon

**Steps:**
1. [ ] Create favicon files:
   - `favicon.ico` (16x16, 32x32)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
   - `apple-touch-icon.png` (180x180)
2. [ ] Place in `/public/` directory
3. [ ] Update `index.html`:

```html
<head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
```

---

### ✅ Task 10: Update Meta Tags

**File to modify:**
- [ ] `index.html`

**Current:**
```html
<title>MIJ Website Redesign Prompt</title>
```

**Update to:**
```html
<title>MIJ Company | Bridging Japan and Bangladesh</title>
<meta name="description" content="MIJ Company connects Japanese and Bangladeshi markets through import/export, IT services, and business consulting.">
<meta property="og:title" content="MIJ Company">
<meta property="og:description" content="Bridging Japanese and Bangladeshi markets">
<meta property="og:image" content="https://mijcompany.com/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

---

## 📝 Content Updates

### ✅ Task 11: Review Translation Content

**Files to check:**
- [ ] `src/translations/en.ts`
- [ ] `src/translations/ja.ts`
- [ ] `src/translations/bn.ts`

**Actions:**
1. [ ] Fix duplicate `cta` keys (see warning in build)
2. [ ] Verify all translations are accurate
3. [ ] Add any missing translations
4. [ ] Update company-specific terminology

---

### ✅ Task 12: Update Footer Copyright

**File to modify:**
- [ ] `src/components/Footer.tsx`

**Find copyright text and update year/company name as needed**

---

## 🔍 Testing Checklist

After completing all asset replacements:

- [ ] Run build: `npm run build`
- [ ] Check for warnings/errors
- [ ] Test all pages locally: `npm run preview`
- [ ] Verify all images load correctly
- [ ] Test contact form submission
- [ ] Check responsive design on mobile
- [ ] Test language switching
- [ ] Verify all links work
- [ ] Test navigation between pages
- [ ] Check console for errors

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] All placeholders replaced ✅
- [ ] Real API connected and tested ✅
- [ ] Environment variables configured in Vercel ✅
- [ ] Domain configured (if custom domain) ✅
- [ ] SSL certificate active ✅
- [ ] Analytics configured ✅
- [ ] Error tracking configured ✅

---

## 📊 Existing Assets Inventory

**Current assets in `/src/assets/`:**
1. `d0b64312d47a4a667250b56920bfd5ebfc07b71b.png`
2. `3d60b45b9f98358d9bf4a0cce020327d39812327.png`
3. `2af45e4bf1e0936020bb934a75bdfdef991523cb.png`
4. `0fcc3f28daffd4c8a9dc7ec084222c8c4169541a.png`
5. `0b6f008db8209dab55941ae5a8e36a79c90ac176.png`
6. `0621cc2c5bacc13d7baf5bc7b518107640d33480.png`

**These are Figma-generated assets. Review each one and:**
- [ ] Identify what each image represents
- [ ] Decide if they should be used in production
- [ ] Rename with descriptive names if keeping (e.g., `hero-image.png`, `about-team.png`)
- [ ] Delete if not needed

---

## 🎯 Quick Reference: File Locations

```
├── src/
│   ├── assets/
│   │   ├── logo.svg              ← ADD: Company logo
│   │   ├── news/                 ← ADD: News article images
│   │   │   ├── article-1.jpg
│   │   │   ├── article-2.jpg
│   │   │   └── article-3.jpg
│   │   └── clients/              ← ADD: Client logos
│   │       ├── client-1.png
│   │       ├── client-2.png
│   │       └── client-3.png
│   ├── components/
│   │   ├── Header.tsx            ← UPDATE: Add logo
│   │   ├── Footer.tsx            ← UPDATE: Phone, email, logo
│   │   └── pages/
│   │       └── ContactPage.tsx   ← UPDATE: Phone, email
│   ├── hooks/
│   │   ├── useNews.ts            ← UPDATE: Replace Unsplash images
│   │   └── useClients.ts         ← UPDATE: Add client logos
│   └── translations/
│       ├── en.ts                 ← REVIEW: Fix duplicate keys
│       ├── ja.ts                 ← REVIEW: Fix duplicate keys
│       └── bn.ts                 ← REVIEW: Fix duplicate keys
├── public/
│   ├── favicon.ico               ← ADD: Favicon
│   ├── icon-192.png              ← ADD: PWA icon
│   ├── icon-512.png              ← ADD: PWA icon
│   └── apple-touch-icon.png      ← ADD: iOS icon
├── index.html                     ← UPDATE: Title, meta tags
├── .env.production               ← CREATE: Production config
└── vercel.json                   ← CREATE: Vercel configuration
```

---

## 💡 Tips

1. **Image Optimization**: Before adding images, optimize them:
   - Use WebP format for web images
   - Compress images (use tools like TinyPNG, Squoosh)
   - Recommended sizes:
     - Logo: SVG (vector) or PNG at 2x resolution
     - News images: 1600x900px (16:9 ratio)
     - Client logos: 400x400px (square)

2. **Asset Naming**: Use descriptive names:
   - ❌ `image1.png`, `logo_final_v3.svg`
   - ✅ `company-logo.svg`, `news-expansion-2024.jpg`

3. **Version Control**: Don't commit large binary files
   - Consider using Git LFS for large assets
   - Or host images on CDN/cloud storage

4. **Testing**: Test on multiple devices and browsers
   - Chrome, Firefox, Safari, Edge
   - Desktop, tablet, mobile
   - Different screen sizes

---

**Progress Tracker**: □□□□□□□□□□ 0/12 tasks completed

Update this checklist as you complete each task!
