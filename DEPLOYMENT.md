# 🚀 GitHub Pages Deployment Guide

Complete guide to deploy the MIJ Website to GitHub Pages.

---

## 📋 Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Git Installed**: Git must be installed on your machine
3. **Repository Access**: Write access to the repository

---

## 🎯 Quick Start (First Time Setup)

### Step 1: Initialize Git Repository (If not already done)

```bash
# Navigate to project directory
cd "MIJ Website Redesign Prompt (1)"

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: MIJ website ready for deployment"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in repository details:
   - **Repository name**: `mij-website` (or your preferred name)
   - **Description**: MIJ Company - Cross Border, Connect Dreams
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub

```bash
# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/mij-website.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select "GitHub Actions"
5. That's it! The workflow will automatically deploy your site

### Step 5: Configure Base Path (Important!)

The deployment workflow is configured to work with `username.github.io/repo-name/` URLs.

**If using a custom domain or username.github.io:**

Edit `.github/workflows/deploy.yml` line 43:
```yaml
# Change from:
VITE_BASE_PATH: '/${{ github.event.repository.name }}/'

# To:
VITE_BASE_PATH: '/'
```

---

## 🌐 Accessing Your Deployed Site

After the workflow completes (2-3 minutes), your site will be available at:

- **Standard URL**: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- **Example**: `https://johndoe.github.io/mij-website/`

### Setting Up a Custom Domain (Optional)

1. In repository **Settings → Pages**
2. Under **"Custom domain"**, enter your domain (e.g., `mijcompany.com`)
3. Add a **CNAME** record in your DNS settings pointing to `YOUR_USERNAME.github.io`
4. Wait for DNS propagation (can take up to 24 hours)
5. Enable **"Enforce HTTPS"** after domain is verified

---

## 🔄 Making Updates & Redeploying

Every time you push to the `main` branch, GitHub Pages will automatically rebuild and deploy your site.

```bash
# Make your changes to the code
# ...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update homepage hero section"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

### Manual Deployment Trigger

You can also manually trigger a deployment:

1. Go to repository on GitHub
2. Click **"Actions"** tab
3. Select **"Deploy to GitHub Pages"** workflow
4. Click **"Run workflow"** → **"Run workflow"**

---

## 📁 Project Structure

```
MIJ Website/
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI tests workflow
│       └── deploy.yml       # GitHub Pages deployment ✨
├── public/
│   ├── .nojekyll           # Tells GitHub Pages not to use Jekyll
│   └── 404.html            # Handles client-side routing
├── src/                    # Source code
├── build/                  # Build output (gitignored)
├── .gitignore             # Files to ignore
├── index.html             # Entry HTML (includes SPA routing script)
├── package.json           # Dependencies & scripts
└── vite.config.ts         # Vite configuration (includes base path)
```

---

## 🛠️ Deployment Scripts

### Available npm scripts:

```bash
# Development
npm run dev              # Start dev server on localhost:3000

# Build
npm run build           # Standard build
npm run build:gh-pages  # Build with base path '/' for custom domains

# Preview
npm run preview         # Preview production build locally

# Testing
npm run test           # Run tests in watch mode
npm run test:run       # Run tests once
npm run e2e            # Run end-to-end tests
```

---

## 🔧 Configuration Files

### 1. vite.config.ts

The base path is configured via environment variable:

```typescript
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  // ... rest of config
});
```

### 2. .github/workflows/deploy.yml

GitHub Actions workflow that:
1. Checks out code
2. Installs Node.js and dependencies
3. Builds the project with correct base path
4. Deploys to GitHub Pages

### 3. public/404.html

Special file that handles client-side routing on GitHub Pages by redirecting all 404s to index.html with the path preserved in the query string.

### 4. index.html

Contains a script that restores the proper URL from the query string, enabling React Router to work correctly on GitHub Pages.

---

## ✅ Deployment Checklist

Before deploying to production:

- [ ] All placeholder content replaced with real data
- [ ] Contact information updated (phone, email, addresses)
- [ ] Company logo added
- [ ] Images optimized and replaced
- [ ] API endpoints configured (if using production API)
- [ ] Environment variables set (if needed)
- [ ] All tests passing (`npm run test:run`)
- [ ] Build completes without errors (`npm run build`)
- [ ] Site works correctly in preview (`npm run preview`)
- [ ] 404 page works correctly
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Multi-language switching works
- [ ] Mobile responsive design verified
- [ ] Browser compatibility tested (Chrome, Firefox, Safari, Edge)

---

## 🚨 Troubleshooting

### Issue: Deployment fails

**Solution**: Check the Actions tab for error details. Common issues:
- Node.js version mismatch (we use Node 20)
- Missing dependencies
- Build errors

### Issue: Site shows 404 or blank page

**Solution**:
1. Verify base path in `vite.config.ts` matches your URL structure
2. Check that `.nojekyll` file exists in build output
3. Ensure `404.html` is present in build directory
4. Clear browser cache and try again

### Issue: Assets not loading (images, CSS, JS)

**Solution**:
1. Check that base path is correctly configured
2. Verify all asset paths are relative (not absolute)
3. Look at browser console for 404 errors on assets
4. Make sure `VITE_BASE_PATH` in workflow matches your URL

### Issue: React Router not working (direct URLs give 404)

**Solution**: This should be fixed by the `404.html` redirect script. Verify:
1. `404.html` exists in `public/` directory
2. `404.html` is being copied to build directory
3. `pathSegmentsToKeep` in `404.html` is set correctly (1 for `/repo-name/`, 0 for custom domain)

### Issue: "Vite manifest not found" error

**Solution**:
1. Delete `node_modules/` and `build/` directories
2. Run `npm install`
3. Run `npm run build`
4. Try deployment again

---

## 🔐 Security Notes

1. **Never commit sensitive data**:
   - API keys
   - Passwords
   - Private tokens
   - `.env` files with secrets

2. **Use GitHub Secrets** for sensitive environment variables:
   - Go to Settings → Secrets and variables → Actions
   - Add secrets there
   - Reference in workflow: `${{ secrets.SECRET_NAME }}`

3. **Public repository**: Everything in a public repo is visible. Use private repos for sensitive projects.

---

## 📊 Monitoring Your Deployment

### Check Deployment Status

1. Go to repository → **Actions** tab
2. View workflow runs and their status
3. Click on a run to see detailed logs

### View Site Analytics (Optional)

After deployment, you can add:
- **Google Analytics**: Add tracking code to index.html
- **Vercel Analytics**: If you deploy to Vercel instead
- **GitHub Insights**: Repository → Insights → Traffic

---

## 🎓 Advanced: Using Custom Domains

### Step-by-step:

1. **Buy a domain** (from Namecheap, Google Domains, etc.)

2. **Add CNAME file to public/** (create if using www):
   ```bash
   echo "www.mijcompany.com" > public/CNAME
   ```

3. **Configure DNS** at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   
   Type: A (for root domain)
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

4. **Enable in GitHub**:
   - Settings → Pages → Custom domain
   - Enter domain and save
   - Enable "Enforce HTTPS" after verification

5. **Update workflow** to use base path '/':
   ```yaml
   VITE_BASE_PATH: '/'
   ```

---

## 📞 Support & Resources

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy
- **React Router with GitHub Pages**: https://github.com/rafgraph/spa-github-pages

---

## 🎉 Success Criteria

Your deployment is successful when:

✅ Workflow completes without errors  
✅ Site loads at the GitHub Pages URL  
✅ All pages navigate correctly  
✅ Images and assets load properly  
✅ Forms work and submit  
✅ Language switching functions  
✅ Mobile responsive design works  
✅ No console errors in browser  

---

**Last Updated**: February 21, 2026  
**Version**: 1.0  
**Maintainer**: MIJ Development Team
