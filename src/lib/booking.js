// Calendly endpoint paths for different booking types
export const BOOKING_TYPES = {
  INTRO_CALL: '/intro-call',
  COACHING_SESSION: '/servicenow-coaching-session',
};

/*  Opens Calendly booking page in a new tab
    @param {string} endpoint - path (optional)
*/
export function openCalendly(endpoint = '') {
  const calendlyURL = process.env.NEXT_PUBLIC_CALENDLY_URL + endpoint;
  window.open(calendlyURL, '_blank');
}

export const scheduleIntroCall = () => openCalendly(BOOKING_TYPES.INTRO_CALL);

export const scheduleCoachingSession = () =>
  openCalendly(BOOKING_TYPES.COACHING_SESSION);

/* Initiates Stripe checkout process for coaching session payment
   Creates a checkout session and redirects user to Stripe payment page
*/
export async function openStripeCheckout() {
  try {
    // Create checkout session via API
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: process.env.NEXT_PUBLIC_STRIPE_SINGLE_SESSION_PRICE_ID,
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/booking`,
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe checkout
    if (window.Stripe) {
      const stripe = window.Stripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );
      await stripe.redirectToCheckout({ sessionId });
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('Payment failed. Please try again.');
  }
}
