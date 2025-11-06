# Deploying Ace Medical to Cloudflare Pages

## Why Cloudflare Pages?
- ✅ **100% FREE** for unlimited sites
- ✅ Unlimited bandwidth
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Easy GitHub integration

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

### 2. Deploy to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Log in or create a free account
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Select your **acemedical** repository
6. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Root directory:** (leave empty)

7. Click **"Save and Deploy"**

### 3. Environment Variables (Optional)

If you need to add environment variables:
1. Go to your project settings
2. Click **"Environment variables"**
3. Add any variables from your `.env.example` file

### 4. Custom Domain (Optional)

To use your own domain:
1. Go to **"Custom domains"** in your project
2. Click **"Set up a custom domain"**
3. Enter your domain (e.g., acemedical.com)
4. Follow the DNS instructions

## ⚡ That's It!

Your site will be live at: `https://acemedical.pages.dev`

Every time you push to GitHub, Cloudflare Pages will automatically rebuild and redeploy your site!

## Troubleshooting

If build fails, check:
- Node.js version (should be 18+)
- All dependencies are in package.json
- No syntax errors in your code

## Support

Need help? Check [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
