export const navigationConfig = {
  brand: {
    name: '[sn dev coach]',
    href: '/',
    sectionId: 'hero',
  },
  logo: '/images/logo-bg-removed.png',
  sections: ['hero', 'services', 'testimonials', 'booking'],
  menuItems: [
    {
      id: 'services',
      label: 'Services',
      sectionId: 'services',
      type: 'scroll',
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      sectionId: 'testimonials',
      type: 'scroll',
    },
    {
      id: 'booking',
      label: 'Book a Session',
      sectionId: 'booking',
      type: 'scroll',
    },
    {
      id: 'about',
      label: 'About Me',
      sectionId: 'about',
      type: 'page',
      href: '/about',
    },
  ],
  styling: {
    sections: {
      hero: {
        nav: 'bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50',
        text: 'text-white',
        button:
          'text-white hover:text-blue-300 border-white hover:border-blue-300',
      },
      testimonials: {
        nav: 'bg-gray-50/95 backdrop-blur-sm border-b border-gray-200/50 text-gray-900',
        text: 'text-gray-900',
        button:
          'text-gray-900 hover:text-blue-600 border-gray-300 hover:border-blue-600',
      },
      default: {
        nav: 'bg-white/95 backdrop-blur-sm border-b border-gray-200/50 text-gray-900',
        text: 'text-gray-900',
        button:
          'text-gray-900 hover:text-blue-600 border-gray-300 hover:border-blue-600',
      },
    },
  },
};
