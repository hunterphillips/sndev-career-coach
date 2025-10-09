// STEALTH MODE: Uncomment to re-enable SEO
// export const metadata = {
//   title: 'About Hunter Phillips - ServiceNow Career Coach',
//   description: 'Learn about Hunter Phillips, Certified Technical Architect with 8+ years ServiceNow experience, 50+ implementations, and 6 mainline certifications.',
//   alternates: {
//     canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
//   },
// };

export const metadata = {
  title: 'About Hunter Phillips - ServiceNow Career Coach',
  description: 'Learn about Hunter Phillips, Certified Technical Architect with 8+ years ServiceNow experience, 50+ implementations, and 6 mainline certifications.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
  robots: {
    index: false,
    follow: false,
    noindex: true,
    nofollow: true,
  },
};

export default function AboutLayout({ children }) {
  return children;
}