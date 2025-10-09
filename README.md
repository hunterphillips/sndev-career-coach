![Site Home Page](public/images/homepage.png)

# Career Coaching Site

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
