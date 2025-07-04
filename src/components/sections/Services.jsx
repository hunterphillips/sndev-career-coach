export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ServiceNow Coaching Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored coaching programs designed to accelerate your ServiceNow career journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Fundamentals</h3>
            <p className="text-gray-600 mb-6">Master the core concepts of ServiceNow platform development, administration, and best practices.</p>
            <div className="text-3xl font-bold text-blue-600 mb-2">$199</div>
            <div className="text-gray-500">per session</div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl text-center border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Acceleration</h3>
            <p className="text-gray-600 mb-6">Strategic guidance for advancing your ServiceNow career, including certifications and role transitions.</p>
            <div className="text-3xl font-bold text-blue-600 mb-2">$299</div>
            <div className="text-gray-500">per session</div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interview Prep</h3>
            <p className="text-gray-600 mb-6">Comprehensive interview preparation for ServiceNow roles, including technical assessments and scenarios.</p>
            <div className="text-3xl font-bold text-blue-600 mb-2">$249</div>
            <div className="text-gray-500">per session</div>
          </div>
        </div>
      </div>
    </section>
  )
}