import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { paymentRateLimit, getClientIP } from '@/lib/rate-limit';
import { validateJSON, checkoutSchema } from '@/lib/validation';
import { validateCSRF, createCSRFErrorResponse } from '@/lib/csrf';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  // CSRF protection
  const csrfCheck = validateCSRF(request);
  if (!csrfCheck.success) {
    return createCSRFErrorResponse();
  }

  // Apply rate limiting
  const ip = getClientIP(request);
  const { success, limit, reset, remaining } = await paymentRateLimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { 
        error: 'Too many payment requests. Please try again later.',
        retryAfter: Math.round((reset - Date.now()) / 1000)
      },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': new Date(reset).toISOString(),
        }
      }
    );
  }

  // Validate input
  const validation = await validateJSON(request, checkoutSchema);
  if (!validation.success) {
    return NextResponse.json(
      { 
        error: validation.error,
        details: validation.details 
      },
      { status: 400 }
    );
  }

  try {
    const { priceId, successUrl, cancelUrl } = validation.data;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}