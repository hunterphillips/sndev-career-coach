// Type definitions as JSDoc comments for better IDE support

/**
 * @typedef {Object} ContactFormData
 * @property {string} name
 * @property {string} email
 * @property {string} message
 */

/**
 * @typedef {Object} ServicePackage
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} stripePriceId
 * @property {string[]} features
 * @property {boolean} [popular]
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} company
 * @property {string} content
 * @property {number} rating
 * @property {string} [image]
 */

/**
 * @typedef {Object} FAQ
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

/**
 * @typedef {Object} SiteConfig
 * @property {string} name
 * @property {string} description
 * @property {string} url
 * @property {string} calendlyUrl
 * @property {string} stripePublicKey
 */

// Export empty object to make this a module
export {}