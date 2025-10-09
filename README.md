# Career Coaching Landing Page

A modern, responsive landing page for career coaching services built with Next.js, JavaScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design with Tailwind CSS
- 💸 Stripe payment integration
- 📅 Calendly booking integration
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🔍 SEO optimized
- 🎯 Conversion-focused layout

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Scheduling:** Calendly
- **Deployment:** Vercel

## Getting Started

1. **Clone and setup:**
   ```bash
   git clone <your-repository>
   cd career-coaching-landing
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - Stripe keys (test keys first)
   - Calendly URL
   - Analytics ID (optional)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── sections/      # Page sections
│   └── forms/         # Form components
├── lib/               # Utility functions and types
├── types/             # JSDoc type definitions
public/                # Static assets
```


## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly booking link
- `NEXT_PUBLIC_SITE_URL` - Your site URL (for production)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
