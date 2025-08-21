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
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
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
      <body className={`${inter.className} antialiased`}>
        <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
                  name: 'SN Dev Coach',
                  url: process.env.NEXT_PUBLIC_SITE_URL,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/profile.jpg`,
                  },
                  founder: {
                    '@type': 'Person',
                    name: 'Hunter Phillips',
                  },
                  description:
                    '1:1 coaching and mentorship for ServiceNow developers, architects, and aspiring professionals.',
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#service`,
                  name: 'ServiceNow Developer Career Coaching',
                  provider: {
                    '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
                  },
                  serviceType: 'Career Coaching',
                  description:
                    'Expert guidance on ServiceNow career growth, platform mastery, certifications, interviews, and professional development.',
                  areaServed: 'Worldwide',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Coaching Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: '1:1 Career Coaching Session',
                          description:
                            'Personalized coaching session for ServiceNow developers and architects',
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
