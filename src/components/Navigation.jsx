'use client';

import { useState, useEffect } from 'react';
import { scrollToElement } from '@/lib/utils';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  // Track current section based on scroll position for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'testimonials', 'booking'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === 'hero' ? 'hero' : section
        );
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    // Set initial section
    if (window.scrollY < 100) {
      setCurrentSection('hero');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'hero') {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = '/';
      }
    } else if (sectionId === 'about') {
      window.location.href = '/about';
    } else {
      if (window.location.pathname === '/') {
        scrollToElement(`#${sectionId}`);
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
    setIsMenuOpen(false);
  };

  const getNavStyles = () => {
    const baseStyles =
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300';

    switch (currentSection) {
      case 'hero':
        return `${baseStyles} bg-blue-900/90 backdrop-blur-sm border-b border-blue-800/50`;
      case 'testimonials':
        return `${baseStyles} bg-gray-50/95 backdrop-blur-sm border-b border-gray-200/50 text-gray-900`;
      default:
        return `${baseStyles} bg-white/95 backdrop-blur-sm border-b border-gray-200/50 text-gray-900`;
    }
  };

  const getTextStyles = () => {
    return currentSection === 'hero' ? 'text-white' : 'text-gray-900';
  };

  const getButtonStyles = () => {
    if (currentSection === 'hero') {
      return 'text-white hover:text-blue-300 border-white hover:border-blue-300';
    }
    return 'text-gray-900 hover:text-blue-600 border-gray-300 hover:border-blue-600';
  };

  return (
    <nav className={getNavStyles()}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('hero')}
              className={`text-lg font-mono opacity-40 font-bold ${getTextStyles()} hover:opacity-80 transition-opacity`}
            >
              [sn dev coach]
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 ">
              <button
                onClick={() => handleNavClick('services')}
                className={`${getButtonStyles()} hover:opacity-80 transition-opacity px-3 py-2 text-sm font-medium`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('booking')}
                className={`${getButtonStyles()} hover:opacity-80 transition-opacity px-3 py-2 text-sm font-medium`}
              >
                Book a Session
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`${getButtonStyles()} hover:opacity-80 transition-opacity px-3 py-2 text-sm font-medium`}
              >
                About me
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${getTextStyles()} hover:opacity-80 transition-opacity p-2`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200/20">
              <button
                onClick={() => handleNavClick('services')}
                className={`${getTextStyles()} hover:opacity-80 transition-opacity block px-3 py-2 text-base font-medium w-full text-left`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className={`${getTextStyles()} hover:opacity-80 transition-opacity block px-3 py-2 text-base font-medium w-full text-left`}
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick('booking')}
                className={`${getTextStyles()} hover:opacity-80 transition-opacity block px-3 py-2 text-base font-medium w-full text-left`}
              >
                Book a Session
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`${getTextStyles()} hover:opacity-80 transition-opacity block px-3 py-2 text-base font-medium w-full text-left`}
              >
                About Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
