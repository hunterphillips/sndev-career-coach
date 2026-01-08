'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [credentialsOpen, setCredentialsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCredentialsOpen(false);
      } else {
        setCredentialsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const credentials = [
    'Certified Technical Architect',
    '50+ implementations',
    '20+ scoped applications',
    '6 mainline certifications',
    '8 YoE in ServiceNow',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col sm:flex-row sm:gap-6 md:flex-col md:gap-0 flex-shrink-0">
                <Image
                  src="/images/profile-memphis.jpg"
                  alt="Hunter Phillips - ServiceNow Technical Architect and Career Coach"
                  width={1536}
                  height={2048}
                  className="w-60 h-80 rounded-lg object-cover"
                />

                <div className="mt-6 sm:mt-2 md:mt-6">
                  <button
                    onClick={() => setCredentialsOpen(!credentialsOpen)}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-3"
                  >
                    <span className="text-sm font-medium mr-2">
                      Credentials
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        credentialsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {credentialsOpen && (
                    <div className="space-y-2">
                      {credentials.map((credential, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <span className="text-xs ml-1 mb-1">
                            {credential}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Hi, I'm Hunter
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    If you want to know the magic secrets to a lucrative career
                    in tech and ServiceNow, please book a session once you've
                    found them so you can share them with me 🙏.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    I can't promise you a shortcut to success, but I can share
                    with you exactly what I wish someone had told me years ago,
                    and everything I've learned starting as an entry-level QA
                    tester making $10/hr (landed a $0.50 promotion after 2
                    months 🚀), to earning over 6 figures in under 3 years.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you're new to ServiceNow or ready to level up into
                    senior and architect roles, I'm here to help get you there.
                  </p>

                  <div className="mt-8 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      I offer individual coaching and mentorship for ServiceNow
                      professionals. This is not a consulting service for
                      businesses or enterprise implementations. I do not share
                      or disclose any confidential information from past or
                      current employers or clients. All guidance is based on
                      public knowledge, best practices, and personal experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
