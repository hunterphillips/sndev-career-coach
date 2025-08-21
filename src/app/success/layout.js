export const metadata = {
  title: 'Payment Successful - ServiceNow Career Coaching',
  description: 'Thank you for your payment! Your ServiceNow career coaching session has been confirmed. Schedule your session now.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessLayout({ children }) {
  return children;
}