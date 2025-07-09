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
