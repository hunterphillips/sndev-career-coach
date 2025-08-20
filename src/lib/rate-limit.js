import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Use Redis for production, or create a mock for development
const redis = process.env.UPSTASH_REDIS_REST_URL
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : {
      // Simple in-memory mock for development
      storage: new Map(),
      async get(key) { return this.storage.get(key) || null; },
      async set(key, value, opts) { 
        this.storage.set(key, value);
        if (opts?.ex) {
          setTimeout(() => this.storage.delete(key), opts.ex * 1000);
        }
        return 'OK';
      },
      async eval() { return null; },
      async evalsha() { return null; },
    };

// Rate limiter for payment creation (more restrictive)
export const paymentRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'), // 5 requests per minute
  analytics: true,
});

// Rate limiter for session retrieval (less restrictive)
export const sessionRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '60 s'), // 10 requests per minute
  analytics: true,
});

export function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // Fallback for development
  return '127.0.0.1';
}