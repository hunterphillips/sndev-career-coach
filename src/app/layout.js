import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Career Coaching - Transform Your Professional Journey',
  description: 'Professional career coaching services to help you advance your career, land your dream job, and achieve your professional goals.',
  keywords: 'career coaching, professional development, job search, career advancement, resume help',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Career Coaching - Transform Your Professional Journey',
    description: 'Professional career coaching services to help you advance your career, land your dream job, and achieve your professional goals.',
    siteName: 'Career Coaching',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Coaching - Transform Your Professional Journey',
    description: 'Professional career coaching services to help you advance your career, land your dream job, and achieve your professional goals.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}