import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ServiceNow Developer Career Coaching',
  description:
    '1:1 coaching and mentorship for ServiceNow developers, architects, and aspiring professionals. Get guidance on career growth, platform mastery, certifications, interviews, and more.',
  keywords:
    'ServiceNow coaching, ServiceNow career mentor, ServiceNow architect help, ServiceNow developer interview prep, ServiceNow certification guidance, platform architect coaching, ServiceNow career advancement',
  authors: [{ name: 'Hunter Phillips' }],
  creator: 'Hunter Phillips',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'ServiceNow Developer Career Coaching',
    description:
      'Get personalized coaching and expert guidance to level up your ServiceNow career. Ideal for developers, admins, architects, and professionals navigating the platform.',
    siteName: 'SN Dev Coach',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive" suppressHydrationWarning>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
