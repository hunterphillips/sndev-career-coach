'use client';

import { scheduleIntroCall, scheduleCoachingSession } from '@/lib/booking';

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the coaching option that fits your needs and schedule
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-gray-200 rounded-xl p-8 hover:bg-blue-50 hover:border-blue-500 transition-ease">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Free Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Discovery call to discuss your goals and create a personalized
              roadmap
            </p>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              onClick={scheduleIntroCall}
            >
              Book Free Call
            </button>
          </div>

          <div className="border-2 rounded-xl p-8 hover:bg-blue-50 hover:border-blue-500 transition-ease">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1-on-1 Coaching
            </h3>
            <p className="text-gray-600 mb-6">
              Personalized coaching sessions tailored to your specific
              ServiceNow career goals
            </p>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              onClick={scheduleCoachingSession}
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
