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
  // STEALTH MODE: Comment out to re-enable SEO
  // robots: {
  //   index: true,
  //   follow: true,
  // },
  robots: {
    index: false,
    follow: false,
    noindex: true,
    nofollow: true,
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
        {/* STEALTH MODE: Uncomment to re-enable Google Analytics */}
        {/* <Script
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
        </Script> */}
        {/* STEALTH MODE: Uncomment to re-enable structured data */}
        {/* <Script
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
                {
                  '@type': 'Review',
                  '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#review1`,
                  reviewBody: "Hunter's mentorship was a game-changer in my ServiceNow career. His guidance was key in helping me make the jump from technical consultant to principal consultant.",
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                    worstRating: 1
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Aaron W.'
                  },
                  itemReviewed: {
                    '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#service`
                  }
                },
                {
                  '@type': 'Review',
                  '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#review2`,
                  reviewBody: 'Hunter is a flexible, reliable, and highly skilled resource who always delivers. His depth of knowledge is apparent every time a question arises about the platform.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                    worstRating: 1
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Michael C.'
                  },
                  itemReviewed: {
                    '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#service`
                  }
                },
                {
                  '@type': 'Review',
                  '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#review3`,
                  reviewBody: 'I was frustrated trying to get my foot in the door for months in a tough market. Got my first offer after 4 weeks of coaching.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                    worstRating: 1
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Alex R.'
                  },
                  itemReviewed: {
                    '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#service`
                  }
                },
                {
                  '@type': 'FAQPage',
                  '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#faq`,
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What ServiceNow certifications should I pursue first?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Start with ServiceNow Certified System Administrator (CSA) as the foundation, then pursue Certified Application Developer (CAD) for development roles or Certified Implementation Specialist (CIS) for specific modules like ITSM, ITOM, or HR.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: 'How can I transition from ServiceNow admin to developer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Focus on learning JavaScript fundamentals, GlideRecord API, Flow Designer, and Service Portal development. Build a portfolio with custom applications and workflows to demonstrate your development skills to potential employers.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: 'What salary can I expect as a ServiceNow professional?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'ServiceNow salaries range from $60K for administrators to $200K+ for architects. Developers typically earn $90K-$130K, Senior Developers $130K-$170K, and Lead Developers $170K+, depending on experience and location.'
                      }
                    }
                  ]
                }
              ],
            }),
          }}
        /> */}
        {children}
      </body>
    </html>
  );
}
