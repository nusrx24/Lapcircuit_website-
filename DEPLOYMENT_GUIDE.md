# LapCircuit Website - Vercel Deployment Guide

## ✅ Completed Tasks
- ✅ Mobile responsiveness fixes (all pages optimized)
- ✅ SEO meta tags added to all pages
- ✅ 404 error page created
- ✅ Build passes successfully (no errors)
- ✅ Changes committed and pushed to GitHub
- ✅ Local testing completed (mobile view verified)

## 🚀 Deploy to Vercel - Step by Step

### Step 1: Go to Vercel
1. Visit https://vercel.com
2. Click "Log in" or "Sign up"
3. Connect your GitHub account if you haven't already

### Step 2: Import Project
1. Click "New Project"
2. Select "Import Git Repository"
3. Find `nusrx24/Lapcircuit_website-` in your GitHub repositories
4. Click "Import"

### Step 3: Configure Project Settings
1. **Project Name:** `lapcircuit` (or your preferred name)
2. **Framework Preset:** Next.js (should auto-detect)
3. **Root Directory:** `./` (default)
4. Click "Continue"

### Step 4: Set Environment Variables
⚠️ IMPORTANT: Add these in the "Environment Variables" section:

```
NEXT_PUBLIC_SUPABASE_URL=https://mndntxmglgrzecskcegs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR_ANON_KEY_HERE]
```

**To get your ANON_KEY:**
1. Go to Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Go to Settings → API
4. Copy the "anon" key (starts with `eyJ...`)
5. Paste it in the NEXT_PUBLIC_SUPABASE_ANON_KEY field

### Step 5: Deploy
1. Click "Deploy"
2. Wait for deployment to complete (usually 1-2 minutes)
3. You'll see a "Congratulations! Your project has been successfully deployed"
4. Click the preview link to view your live site

## 📋 Post-Deployment Checklist

### 1. Add Blog Posts to Supabase
Your blog functionality is ready, but the database is empty. To add blog posts:

1. Go to Supabase Dashboard
2. Navigate to SQL Editor
3. Copy the entire content from `supabase_schema.sql`
4. Create a new query and paste all the INSERT statements
5. Run the query (this will add 22 blog posts to your database)

### 2. Verify Everything Works
- [ ] Visit your live URL (vercel will give you the domain)
- [ ] Test home page on desktop and mobile
- [ ] Test blog page - should show your 22 posts
- [ ] Test contact form - should send emails via Web3Forms
- [ ] Test blog search and filters
- [ ] Click around all pages on mobile to verify responsiveness

### 3. Set Custom Domain (Optional)
1. In Vercel, go to Project Settings → Domains
2. Add your custom domain (if you have one)
3. Update DNS settings as instructed by Vercel

### 4. Configure Email Notifications
The contact form uses Web3Forms to send emails:
- Access Key: `585a8120-191b-4bb0-b1d3-482cb6ce114e`
- To change recipient email, update in `src/app/contact/page.tsx` line ~35

## 🔧 Environment Variables Reference

| Variable | Value | Required |
|----------|-------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Yes |

## 📞 Support

If you encounter issues:

1. **Build errors?** Check the Vercel dashboard logs
2. **Blog posts not showing?** Verify SQL was executed in Supabase
3. **Contact form not working?** Check Web3Forms configuration
4. **Mobile view issues?** Clear browser cache and reload

## 🎯 What's Deployed

Your website includes:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ 9 main pages + 22 dynamic blog posts
- ✅ Contact form with email notifications
- ✅ Newsletter subscription system
- ✅ Search and category filters for blog
- ✅ Testimonials section with database
- ✅ Pricing plans for different industries
- ✅ SEO meta tags for search visibility
- ✅ 404 error page
- ✅ WhatsApp integration
- ✅ Lifetime support message throughout

## 🎉 You're All Set!

Your LapCircuit website is ready for the world. The deployment is automatic - every time you push to GitHub's `main` branch, Vercel will automatically redeploy your site.

Good luck! 🚀
