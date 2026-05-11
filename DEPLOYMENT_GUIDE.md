# Deployment Guide — Ted Fugunt Heating & Air Website

## Quick Start (5 Minutes)

### Step 1: Clone the Repository

```bash
cd ~/your-projects-folder
git clone https://github.com/ScoopyChatt/tedfugunt-website.git
cd tedfugunt-website
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` — your website is now running locally!

### Step 4: Deploy to Vercel

**Option A: Automatic (Recommended)**

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste: `https://github.com/ScoopyChatt/tedfugunt-website.git`
5. Click "Import"
6. Configure project settings (defaults are fine)
7. Click "Deploy"
8. **Done!** Your site is live in ~2-3 minutes

Your live URL will be: `https://tedfugunt-website.vercel.app` (or custom domain)

**Option B: Manual via CLI**

```bash
npm i -g vercel
vercel login
vercel
```

Follow prompts and your site will deploy.

---

## Custom Domain Setup

### Connect Your Own Domain

1. In Vercel Dashboard → Select your project
2. Go to "Settings" → "Domains"
3. Add your domain (e.g., `www.tedfugunt.com`)
4. Follow DNS configuration steps
5. Takes ~15-30 minutes to propagate

### Update Domain in Code

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.tedfugunt.com'),  // ← Change this
  // ...
}
```

---

## Environment Variables

### Setup

1. Create `.env.local` file in project root:

```bash
cp .env.example .env.local
```

2. Add your configuration (if needed):

```
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_CRM_WEBHOOK_URL=https://webhook.zapier.com/...
```

3. Vercel automatically loads `.env.local` in development

### For Vercel Deployment

1. Vercel Dashboard → Select project
2. Go to "Settings" → "Environment Variables"
3. Add variables one by one
4. Re-deploy if variables changed

---

## First-Time Setup Checklist

- [ ] Update business info in `lib/siteData.ts`
  - [ ] Company name
  - [ ] Phone number
  - [ ] Email address
  - [ ] Address
  - [ ] Service areas
  - [ ] Add real testimonials
  - [ ] Update hours

- [ ] Customize design (optional)
  - [ ] Change colors in `tailwind.config.ts`
  - [ ] Update logo in components
  - [ ] Add company photos

- [ ] Configure leads integration
  - [ ] Setup API endpoint OR
  - [ ] Setup webhook (Zapier/Make/Jobber) OR
  - [ ] Setup email notifications

- [ ] Test everything
  - [ ] Visit homepage
  - [ ] Test lead form
  - [ ] Test chatbot
  - [ ] Test mobile view
  - [ ] Test all CTAs

- [ ] Monitor & Iterate
  - [ ] Check leads are coming in
  - [ ] Verify form submissions
  - [ ] Monitor website performance
  - [ ] Get feedback from team

---

## Lead Integration Setup

### Option 1: Email Notifications (Simple)

Set up email notifications when a lead comes in:

1. Update `app/api/leads/route.ts` (create this file):

```typescript
export async function POST(request: Request) {
  const leadData = await request.json()

  // Send email via SendGrid, Mailgun, or similar
  // For now, just log it
  console.log('New lead:', leadData)

  return Response.json({ success: true })
}
```

### Option 2: Webhook to Zapier/Make.com

1. Create Zapier workflow:
   - Trigger: "Webhooks by Zapier"
   - Action: Create Google Sheets row OR send Slack message, etc.

2. Get webhook URL from Zapier

3. Update `.env.local`:

```
NEXT_PUBLIC_CRM_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID
```

4. Update `components/LeadForm.tsx` (around line 85):

```typescript
// Replace localStorage with:
const response = await fetch(process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(leadData),
})
```

### Option 3: Connect to Jobber CRM

Jobber integration:

1. Get Jobber API key from their dashboard
2. Create API endpoint to forward leads
3. Update webhook in form/chatbot

---

## Monitoring & Analytics

### Setup Google Analytics

1. Create Google Analytics account
2. Get Measurement ID
3. Add to environment variables:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Create `app/GoogleAnalytics.tsx`:

```typescript
import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

5. Add to `app/layout.tsx`:

```typescript
import GoogleAnalytics from './GoogleAnalytics'

export default function RootLayout({ children }) {
  return (
    <html>
      {/* ... */}
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
```

### View Analytics

- Google Analytics: https://analytics.google.com
- Vercel Analytics: Dashboard → "Analytics" tab
- Form submissions: Check `localStorage` in browser DevTools

---

## Common Tasks

### Update Business Hours

Edit `lib/siteData.ts`:

```typescript
export const COMPANY_INFO = {
  // ...
  hours: {
    weekday: '8:00 AM - 4:00 PM',
    emergency: '24/7 Emergency Service',
  },
}
```

### Add a New Service

1. Update `lib/siteData.ts`:

```typescript
CORE_SERVICES.push({
  id: 'ductless-systems',
  title: 'Ductless Systems',
  description: '...',
  icon: '❄️',
})
```

2. Create page: `app/services/ductless-systems/page.tsx`

### Update Testimonials

Edit `lib/siteData.ts`:

```typescript
export const TESTIMONIALS = [
  {
    name: 'John Doe',
    quote: 'Great service!',
    rating: 5,
  },
  // Add more
]
```

### Add Team Photos

1. Upload images to `public/images/`
2. Import in components:

```typescript
import Image from 'next/image'

<Image
  src="/images/team.jpg"
  alt="Our HVAC team"
  width={800}
  height={600}
/>
```

---

## Troubleshooting

### Website Won't Build

```bash
npm run build
```

Check error messages. Usually:
- Missing file
- TypeScript error
- Syntax error

Fix and re-run build.

### Deployment Fails on Vercel

1. Check build logs: Dashboard → "Deployments" → Click deployment → "Build Logs"
2. Common issues:
   - Missing environment variables
   - Node version mismatch
   - Import errors

3. Rebuild: Dashboard → "Deployments" → "Redeploy"

### Forms Not Submitting

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try submitting form
4. Look for error messages
5. Check Network tab for failed requests

### Chatbot Not Working

1. Check browser console for errors
2. Verify JavaScript is enabled
3. Check localStorage is available
4. Test in different browser

---

## Performance Optimization

### Build Size

```bash
npm run build
```

Check `.next/static` folder size. Should be under 1MB for JS.

### Page Speed

Test on: https://pagespeed.web.dev

Paste your Vercel URL.

Optimization tips:
- Compress images
- Lazy load images
- Minimize JavaScript
- Cache aggressively

Vercel handles most of this automatically.

### Monitor Uptime

Vercel includes uptime monitoring. View in:
- Dashboard → "Monitoring" tab

---

## Going Live Checklist

Before showing to Ted Fugunt:

- [ ] Website loads fast (<2 seconds)
- [ ] All links work
- [ ] Forms submit without errors
- [ ] Chatbot functions correctly
- [ ] Mobile design looks good
- [ ] Lead data is being captured
- [ ] Phone number is correct
- [ ] Address is correct
- [ ] Testimonials are real
- [ ] Service areas are accurate
- [ ] No typos or grammar errors
- [ ] Images load properly
- [ ] All CTAs work

---

## Maintenance Tasks

### Weekly
- Check form submissions
- Review website analytics
- Verify lead notifications work

### Monthly
- Update testimonials if needed
- Review service area coverage
- Check for broken links
- Test lead form submission

### Quarterly
- Security audit
- Performance review
- Update service offerings if changed
- Add new team photos/testimonials

---

## Support Resources

**Documentation:**
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs

**Deployment:**
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub: https://github.com/ScoopyChatt/tedfugunt-website

**Questions?**
- Email: info@scoopychatt.com
- Check README.md for more info

---

**You've Got This!** 🚀

The website is fully functional and ready to generate leads. Just follow the steps above and you'll be live in minutes.

Good luck!
