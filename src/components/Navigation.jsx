'use client';

import { useState, useEffect } from 'react';
import { scrollToElement } from '@/lib/utils';
import { navigationConfig } from '@/data/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  // Track current section based on scroll position for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of navigationConfig.sections) {
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

  const handleNavClick = (menuItem) => {
    if (menuItem.type === 'page') {
      window.location.href = menuItem.href;
    } else if (menuItem.sectionId === 'hero') {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = '/';
      }
    } else {
      if (window.location.pathname === '/') {
        scrollToElement(`#${menuItem.sectionId}`);
      } else {
        window.location.href = `/#${menuItem.sectionId}`;
      }
    }
    setIsMenuOpen(false);
  };

  const getNavStyles = () => {
    const baseStyles =
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
    const sectionStyles =
      navigationConfig.styling.sections[currentSection] ||
      navigationConfig.styling.sections.default;
    return `${baseStyles} ${sectionStyles.nav}`;
  };

  const getTextStyles = () => {
    const sectionStyles =
      navigationConfig.styling.sections[currentSection] ||
      navigationConfig.styling.sections.default;
    return sectionStyles.text;
  };

  const getButtonStyles = () => {
    const sectionStyles =
      navigationConfig.styling.sections[currentSection] ||
      navigationConfig.styling.sections.default;
    return sectionStyles.button;
  };

  return (
    <nav className={getNavStyles()}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick(navigationConfig.brand)}
              className={`text-lg font-mono opacity-40 font-bold ${getTextStyles()} hover:opacity-80 transition-opacity`}
            >
              {navigationConfig.brand.name}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 ">
              {navigationConfig.menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`${getButtonStyles()} hover:opacity-80 transition-opacity px-3 py-2 text-sm font-medium`}
                >
                  {item.label}
                </button>
              ))}
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
              {navigationConfig.menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`${getTextStyles()} hover:opacity-80 transition-opacity block px-3 py-2 text-base font-medium w-full text-left`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
