import csrf from 'csrf';
import { NextResponse } from 'next/server';

// Create CSRF instance with secure configuration
const tokens = new csrf({
  saltLength: 32,
  secretLength: 64,
});

// Generate a secret for CSRF tokens (in production, store this securely)
const CSRF_SECRET = process.env.CSRF_SECRET || 'default-dev-secret-change-in-production';

// Generate a CSRF token
export function generateCSRFToken() {
  return tokens.create(CSRF_SECRET);
}

// Verify a CSRF token
export function verifyCSRFToken(token) {
  if (!token) return false;
  return tokens.verify(CSRF_SECRET, token);
}

// Middleware function to check CSRF token in requests
export function validateCSRF(request) {
  // Get token from header
  const tokenFromHeader = request.headers.get('x-csrf-token');
  
  // In production, CSRF token is mandatory
  if (!tokenFromHeader && process.env.NODE_ENV === 'production') {
    return {
      success: false,
      error: 'Missing CSRF token',
    };
  }
  
  // For development, allow requests from localhost
  if (process.env.NODE_ENV === 'development') {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    
    if (origin?.includes('localhost') || referer?.includes('localhost')) {
      return { success: true };
    }
  }
  
  // Check if request is from same origin (additional protection)
  const origin = request.headers.get('origin');
  const expectedOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (origin && expectedOrigin && origin !== expectedOrigin) {
    return {
      success: false,
      error: 'Invalid origin'
    };
  }
  
  // Verify CSRF token if provided
  if (tokenFromHeader) {
    const isValid = verifyCSRFToken(tokenFromHeader);
    if (!isValid) {
      return {
        success: false,
        error: 'Invalid CSRF token'
      };
    }
  }
  
  return { success: true };
}

// Helper function to create CSRF error response
export function createCSRFErrorResponse() {
  return NextResponse.json(
    { 
      error: 'CSRF validation failed',
      message: 'This request appears to be from an unauthorized source'
    },
    { status: 403 }
  );
}