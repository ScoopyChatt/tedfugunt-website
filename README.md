# Ted Fugunt Heating & Air - Lead Generation Website

A premium, modern HVAC website built with Next.js, TypeScript, and Tailwind CSS. Designed to generate high-quality leads for Ted Fugunt Heating & Air in Chattanooga, Tennessee.

## Features

- ✅ **Modern, Premium Design** — Clean, professional HVAC website that builds trust
- ✅ **Lead Capture** — Multiple lead collection methods (forms, chatbot, phone CTAs)
- ✅ **AI-Style Chatbot** — Intelligent lead qualification assistant
- ✅ **Mobile-First** — Fully responsive design optimized for mobile
- ✅ **SEO Optimized** — Local HVAC search optimization
- ✅ **Fast Performance** — Optimized Next.js for fast load times
- ✅ **Service Pages** — Dynamic service pages for AC repair, heating, installation, etc.
- ✅ **Trust Signals** — Carrier dealer, financing, emergency service, testimonials
- ✅ **24/7 Sticky CTAs** — Mobile call button, sticky scheduling CTA
- ✅ **Financing Integration** — Info about flexible financing options
- ✅ **Service Area** — Geographic service boundaries and coverage map placeholder
- ✅ **Accessibility** — WCAG compliant HTML and semantic structure

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```
tedfugunt-website/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── services/
│   │   ├── page.tsx             # Services overview
│   │   └── [slug]/page.tsx      # Dynamic service pages
│   ├── financing/page.tsx        # Financing info
│   ├── service-area/page.tsx     # Service area
│   └── contact/page.tsx          # Contact page
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Homepage hero section
│   ├── LeadForm.tsx             # Lead capture form
│   ├── ChatbotWidget.tsx        # AI chatbot assistant
│   ├── ServiceCards.tsx         # Service display cards
│   ├── TrustBar.tsx             # Trust signals bar
│   ├── Testimonials.tsx         # Customer testimonials
│   ├── FinancingCTA.tsx         # Financing call-to-action
│   ├── MaintenanceCTA.tsx       # Maintenance plans CTA
│   ├── ServiceAreaSection.tsx   # Service area display
│   ├── StickyMobileCTA.tsx      # Mobile sticky buttons
│   └── Footer.tsx               # Footer navigation
├── lib/
│   ├── leadTypes.ts             # TypeScript interfaces
│   ├── siteData.ts              # Business info, services, etc.
│   └── utils.ts                 # Utility functions
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js               # Next.js configuration
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ScoopyChatt/tedfugunt-website.git
cd tedfugunt-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel dashboard at https://vercel.com
3. Select the repository and click "Deploy"
4. Vercel automatically deploys on every push to main

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and select your project configuration

## Building

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Lead Management

### How Leads Are Captured

Leads can come from two sources:

1. **Web Forms** — Lead form on homepage and service pages
2. **Chatbot** — AI-style chat widget for immediate qualification

### Storing Leads

Currently, leads are stored in **browser localStorage** for demonstration. 

**TODO: Production Integration Needed:**

To connect to a real system, update these files:

- **LeadForm.tsx** (line ~85) — Replace localStorage with API call
- **ChatbotWidget.tsx** (line ~170) — Replace localStorage with API call

Example API integration pattern:

```typescript
// Replace localStorage with API call
const response = await fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(leadData),
})

if (!response.ok) {
  throw new Error('Failed to submit lead')
}
```

### Webhook / CRM Integration

To send leads to Zapier, Make.com, Jobber, or another CRM:

1. Create an API route: `app/api/leads/route.ts`
2. Configure webhook endpoint in environment variables
3. Update form/chatbot to call the API route
4. The API route forwards to your CRM webhook

Example webhook structure in `lib/leadTypes.ts`:

```typescript
{
  name: "John Smith",
  phone: "(423) 555-1234",
  email: "john@example.com",
  addressOrZip: "37421",
  serviceNeeded: "ac-repair",
  urgency: "emergency",
  message: "AC isn't cooling",
  preferredContact: "call",
  source: "website_chatbot",
  createdAt: "2024-01-15T10:30:00Z"
}
```

## Customization

### Update Business Information

Edit `lib/siteData.ts`:

```typescript
export const COMPANY_INFO = {
  name: 'Ted Fugunt Heating & Air',
  phone: '(423) 894-3723',
  email: 'contact@tedfugunt.com',
  // ... more fields
}
```

### Update Colors

Edit `tailwind.config.ts` to change primary/accent colors:

```typescript
colors: {
  primary: {
    500: '#0052cc',  // Bright blue
    600: '#0052cc',
    700: '#003d99',  // Deep navy
  },
  accent: {
    orange: '#ff6b35',
    red: '#ff5722',
  },
}
```

### Update Services

Edit `lib/siteData.ts` → `CORE_SERVICES` array

### Add Testimonials

Edit `lib/siteData.ts` → `TESTIMONIALS` array

### Update Service Areas

Edit `lib/siteData.ts` → `SERVICE_AREAS` array

## SEO

Each page has SEO metadata configured:

- **Homepage:** Target "HVAC repair Chattanooga TN"
- **Service pages:** Target specific services ("AC repair Chattanooga")
- **Service area page:** Local Chattanooga coverage
- **Financing page:** "HVAC financing" keywords
- **Contact page:** Contact information and FAQ

To improve SEO:

1. Add schema.org JSON-LD in layout.tsx
2. Improve Open Graph meta tags
3. Add canonical URLs
4. Optimize image alt text
5. Build backlinks from local directories

## Performance Optimization

- ✅ Image optimization (next/image)
- ✅ Code splitting (automatic with Next.js)
- ✅ CSS minification (Tailwind)
- ✅ JavaScript minification
- ✅ Caching headers configured
- ✅ CDN ready (Vercel Edge Network)

Run Lighthouse audit: Open DevTools → Lighthouse → Run audit

## TODO Items for Production

### High Priority
- [ ] **Phone Number** — Replace TODO phone number with actual number
- [ ] **Lead API Integration** — Connect form/chatbot to real API
- [ ] **CRM/Webhook** — Connect to Zapier, Make, Jobber, or custom API
- [ ] **Images** — Replace placeholder images with actual HVAC photos
- [ ] **Google Maps** — Add interactive map on service area page
- [ ] **Email Notifications** — Send admin email when lead received
- [ ] **Analytics** — Add Google Analytics tracking

### Medium Priority
- [ ] **Business Hours** — Confirm and update hours in lib/siteData.ts
- [ ] **Service List** — Verify all services match current offerings
- [ ] **Testimonials** — Replace with real customer reviews
- [ ] **FAQs** — Expand FAQ section with more questions
- [ ] **Favicon** — Add custom favicon (replace public/favicon.ico)

### Lower Priority
- [ ] **Blog** — Add HVAC tips and educational content
- [ ] **Before/After** — Add before/after photos of installations
- [ ] **Video** — Add promotional video or technician intro
- [ ] **Live Chat** — Upgrade chatbot to real LLM (Claude, OpenAI, etc.)
- [ ] **Multi-language** — Spanish language version
- [ ] **Dark Mode** — Support system dark mode preference

## Testing

### Manual Testing Checklist

- [ ] Homepage loads and displays correctly
- [ ] All service pages render properly
- [ ] Lead form submits without errors
- [ ] Chatbot flows work correctly
- [ ] Mobile menu opens/closes
- [ ] Sticky mobile CTA buttons work
- [ ] All CTA buttons scroll to correct sections
- [ ] Phone links work (tel: protocol)
- [ ] Links to external pages work
- [ ] Images load without errors
- [ ] Page load time is acceptable (<2s)

### Browser Testing

- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Edge

## Support & Maintenance

### Regular Maintenance Tasks

- Monitor lead submissions (daily)
- Check website uptime (weekly)
- Review analytics (weekly)
- Update testimonials (monthly)
- Verify all links work (monthly)
- Check email notifications deliver (ongoing)

### Common Issues

**Chatbot not submitting leads:**
- Check browser console for errors
- Verify localStorage is enabled
- Check API endpoint if connected

**Forms not working:**
- Verify email validation logic
- Check for JavaScript errors in console
- Test form submission manually

**Deployment issues:**
- Check Vercel build logs
- Verify environment variables
- Confirm Node.js version compatibility

## Security

- ✅ No sensitive data in code
- ✅ No API keys exposed
- ✅ Environment variables for secrets
- ✅ Input validation on forms
- ✅ HTTPS enforced (via Vercel)
- ✅ Security headers configured

## License

This website was created for Ted Fugunt Heating & Air by Sol Invictus AI.

## Contact

For questions about the website:
- Email: info@scoopychatt.com
- Website: https://tedfugunt-website.vercel.app

---

**Last Updated:** January 2024
**Maintainer:** Brandon @ Sol Invictus AI
