import { z } from 'zod';

// Stripe price ID validation (must start with 'price_')
export const checkoutSchema = z.object({
  priceId: z
    .string()
    .min(1, 'Price ID is required')
    .regex(/^price_[a-zA-Z0-9_]+$/, 'Invalid price ID format'),
  successUrl: z
    .string()
    .url('Invalid success URL')
    .refine(
      (url) => {
        const parsed = new URL(url);
        // Only allow same origin or localhost for security
        return parsed.origin === process.env.NEXT_PUBLIC_SITE_URL || 
               parsed.hostname === 'localhost';
      },
      'Success URL must be from the same origin'
    ),
  cancelUrl: z
    .string()
    .url('Invalid cancel URL')
    .refine(
      (url) => {
        const parsed = new URL(url);
        // Only allow same origin or localhost for security
        return parsed.origin === process.env.NEXT_PUBLIC_SITE_URL || 
               parsed.hostname === 'localhost';
      },
      'Cancel URL must be from the same origin'
    ),
});

// Flexible session ID validation - just ensure it's a non-empty alphanumeric string
export const sessionIdSchema = z
  .string()
  .min(1, 'Session ID is required')
  .max(255, 'Session ID too long')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Session ID contains invalid characters');

// Request size validation
export const MAX_REQUEST_SIZE = 1024; // 1KB max

export function validateRequestSize(request) {
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength) > MAX_REQUEST_SIZE) {
    return {
      success: false,
      error: 'Request payload too large'
    };
  }
  return { success: true };
}

// Helper function to safely parse and validate JSON
export async function validateJSON(request, schema) {
  try {
    // Check request size first
    const sizeCheck = validateRequestSize(request);
    if (!sizeCheck.success) {
      return { success: false, error: sizeCheck.error };
    }

    const body = await request.json();
    const validated = schema.parse(body);
    return { success: true, data: validated };
  } catch (error) {
    if (error.name === 'ZodError') {
      return {
        success: false,
        error: 'Validation failed',
        details: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
      };
    }
    return {
      success: false,
      error: 'Invalid JSON or request format'
    };
  }
}