import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
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