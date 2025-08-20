import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sessionRateLimit, getClientIP } from '@/lib/rate-limit';
import { sessionIdSchema } from '@/lib/validation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  // Apply rate limiting
  const ip = getClientIP(request);
  const { success, limit, reset, remaining } = await sessionRateLimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { 
        error: 'Too many requests. Please try again later.',
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

  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
  }

  // Validate session ID format
  try {
    sessionIdSchema.parse(sessionId);
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Invalid session ID format',
        details: error.errors?.map(e => e.message) 
      },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent.payment_method']
    });
    
    const paymentMethod = session.payment_intent.payment_method;
    const type = paymentMethod.type;
    const brand = paymentMethod.card?.brand;
    
    // Format payment method display text
    let paymentMethodText = 'Credit Card';
    if (brand) {
      paymentMethodText = `${brand.charAt(0).toUpperCase() + brand.slice(1)} Card`;
    } else if (type === 'paypal') {
      paymentMethodText = 'PayPal';
    } else if (type === 'klarna') {
      paymentMethodText = 'Klarna';
    }
    
    return NextResponse.json({ 
      paymentMethod: paymentMethodText,
      amount: session.amount_total / 100, // Convert from cents
      currency: session.currency.toUpperCase(),
      customerName: session.customer_details?.name || null
    });
  } catch (error) {
    console.error('Stripe session fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch session data' }, { status: 500 });
  }
}