'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { scheduleCoachingSession } from '@/lib/booking';
import { navigateTo } from '@/lib/utils';

// Success page displayed after successful Stripe payment
export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id'); // Extract session ID from URL
  const [sessionData, setSessionData] = useState(null); // Store payment session data
  const [loading, setLoading] = useState(true); // Loading state for payment data

  // Navigate back to homepage
  const handleReturnHome = () => {
    navigateTo('/');
  };

  // Fetch payment session data from Stripe when component mounts
  useEffect(() => {
    if (sessionId) {
      fetch(`/api/stripe-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSessionData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching session data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {/* Display personalized thank you message if customer name available */}
              {loading
                ? 'Thank you!'
                : sessionData?.customerName
                  ? `Thank you, ${sessionData.customerName}!`
                  : 'Thank you!'}
            </h1>
            <p className="text-xl text-gray-600">
              Your payment was successful.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-xl mr-2">✅</span>
              <h2 className="text-xl font-semibold text-gray-900">
                What&apos;s next:
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Schedule your coaching session below.
            </p>

            <button
              onClick={scheduleCoachingSession}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors cursor-pointer mb-4"
            >
              Book Your Session
            </button>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <span className="text-xl mr-2">🧾</span>
              <h3 className="text-lg font-semibold text-gray-900">
                Payment Details:
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Session:</span>
                <span className="text-gray-900">
                  ServiceNow Coaching Session
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="text-gray-900">
                  {/* Show loading state or dynamic amount from Stripe session */}
                  {loading
                    ? 'Loading...'
                    : sessionData
                      ? `$${sessionData.amount}`
                      : '$150.00'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment method:</span>
                <span className="text-gray-900">
                  {/* Display dynamic payment method (e.g., "Visa Card", "PayPal") */}
                  {loading
                    ? 'Loading...'
                    : sessionData?.paymentMethod || 'Credit Card'}
                </span>
              </div>
            </div>
          </div>

          {/* Return to Homepage */}
          <div className="text-center">
            <button
              onClick={handleReturnHome}
              className="text-blue-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
