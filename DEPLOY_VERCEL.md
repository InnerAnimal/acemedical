# Deploying Ace Medical to Vercel

## Why Vercel?
- ✅ **FREE** tier with generous limits
- ✅ Built by the creators of Next.js
- ✅ Automatic optimizations
- ✅ Easy GitHub integration
- ✅ Instant deployments

## Quick Deployment Steps

### 1. Push to GitHub

```bash
# If you haven't created a GitHub repo yet
# Go to https://github.com/new and create a new repository called "acemedical"

# Then push your code
git remote add origin https://github.com/YOUR_USERNAME/acemedical.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Using Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (you can use your GitHub account)
3. Click **"New Project"**
4. Import your **acemedical** repository from GitHub
5. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
6. Click **"Deploy"**

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /path/to/acemedical
vercel

# Follow the prompts
```

### 3. Environment Variables (Optional)

If you need to add environment variables:
1. Go to your project settings on Vercel dashboard
2. Click **"Environment Variables"**
3. Add any variables from your `.env.example` file

### 4. Custom Domain (Optional)

To use your own domain:
1. Go to **"Domains"** in your project settings
2. Click **"Add"**
3. Enter your domain (e.g., acemedical.com)
4. Follow the DNS instructions

## ⚡ That's It!

Your site will be live at: `https://acemedical.vercel.app`

Every time you push to GitHub, Vercel will automatically rebuild and redeploy your site!

## Performance Features

Vercel automatically provides:
- Edge caching
- Image optimization
- Analytics
- Web vitals monitoring

## Troubleshooting

If build fails, check:
- All dependencies are installed
- No TypeScript errors
- Environment variables are set correctly

## Support

Need help? Check [Vercel Docs](https://vercel.com/docs)
