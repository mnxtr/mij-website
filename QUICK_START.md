# 🚀 Quick Start: Deploy to GitHub Pages in 5 Minutes

The fastest way to get your MIJ website live on the internet for **FREE**!

---

## ✅ What You'll Need

- [ ] A GitHub account (create one at [github.com](https://github.com))
- [ ] Git installed on your computer
- [ ] This project folder

---

## 📝 Step-by-Step Instructions

### Step 1: Open Terminal/Command Prompt

Navigate to your project folder:

```bash
cd "path/to/MIJ Website Redesign Prompt (1)"
```

### Step 2: Initialize Git (First time only)

```bash
git init
git add .
git commit -m "Initial commit: MIJ website ready for deployment"
```

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `mij-website` (or anything you want)
3. Keep it **Public** (required for free GitHub Pages)
4. **DO NOT** check any boxes (README, .gitignore, license)
5. Click **"Create repository"**

### Step 4: Connect & Push to GitHub

Copy these commands from GitHub (they'll show on screen after creating repo):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values!

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Build and deployment"**:
   - Source: Select **"GitHub Actions"**
5. Done! 🎉

### Step 6: Wait for Deployment (2-3 minutes)

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running (yellow circle)
3. Wait for it to turn green (checkmark) ✅
4. Your site is now live!

---

## 🌐 Your Website URL

Your website will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:** If your username is `johndoe` and repo is `mij-website`:
```
https://johndoe.github.io/mij-website/
```

---

## 🔄 Making Updates

Every time you want to update your website:

```bash
# 1. Make your changes in the code
# 2. Save all files
# 3. Run these commands:

git add .
git commit -m "Describe what you changed"
git push origin main

# 4. Wait 2-3 minutes - your site will auto-update!
```

---

## ❓ Troubleshooting

### "Permission denied" when pushing to GitHub

**Solution:** Set up authentication:
- Use GitHub's personal access token
- Or set up SSH keys
- See: https://docs.github.com/en/authentication

### Site shows 404 or blank page

**Solution:**
1. Check that GitHub Actions workflow completed successfully (green checkmark)
2. Wait a few more minutes (sometimes takes up to 10 minutes)
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check that Settings → Pages shows "Your site is live at..."

### Images or pages not loading

**Solution:** The workflow is configured for `/repo-name/` URLs. If using a custom domain, see DEPLOYMENT.md for configuration changes.

---

## 📚 Need More Help?

- **Full Documentation**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **GitHub Pages Docs**: https://docs.github.com/pages
- **GitHub Support**: https://support.github.com

---

## 🎓 What Happens Behind the Scenes?

When you push to GitHub:

1. ✅ GitHub Actions workflow starts (`.github/workflows/deploy.yml`)
2. ✅ Installs Node.js and dependencies
3. ✅ Builds your React app (`npm run build`)
4. ✅ Deploys the `build/` folder to GitHub Pages
5. ✅ Your site goes live!

All automatic - no extra steps needed! 🚀

---

## 🎉 Success Checklist

You're done when:

- [x] Repository created on GitHub
- [x] Code pushed to GitHub (`git push`)
- [x] GitHub Pages enabled in Settings
- [x] Workflow completed (Actions tab shows green ✅)
- [x] Website loads at `https://username.github.io/repo-name/`
- [x] All pages navigate correctly
- [x] Images load properly

---

**Congratulations!** 🎊 Your MIJ website is now live on the internet!

Share your URL with the world! 🌍
