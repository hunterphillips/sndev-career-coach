'use client';

import { scrollToElement } from '@/lib/utils';
import CareerTimeline from './CareerTimeline';

export default function Hero() {
  const scrollToServices = () => {
    scrollToElement('#services');
  };

  const scrollToBooking = () => {
    scrollToElement('#booking');
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-1xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Accelerate Your
          <span className="block text-blue-300">ServiceNow Career</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
          Expert coaching to help you master ServiceNow, land your dream role,
          and advance your career in the platform ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold transition-colors cursor-pointer"
            onClick={scrollToBooking}
          >
            Free intro call
          </button>
          <button
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold transition-colors cursor-pointer"
            onClick={scrollToServices}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Salary timeline */}
      <div className="absolute bottom-4 sm:bottom-20 w-full">
        <CareerTimeline />
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-blue-300 transition-colors"
        onClick={scrollToServices}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
