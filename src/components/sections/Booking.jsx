export default function Booking() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the coaching option that fits your needs and schedule
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Consultation</h3>
            <p className="text-gray-600 mb-6">
              30-minute discovery call to discuss your goals and create a personalized roadmap
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Book Free Call
            </button>
          </div>
          
          <div className="border-2 border-blue-500 rounded-xl p-8 bg-blue-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1-on-1 Coaching</h3>
            <p className="text-gray-600 mb-6">
              Personalized coaching sessions tailored to your specific ServiceNow career goals
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Schedule Session
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Group Workshop</h3>
          <p className="text-gray-600 mb-6">
            Join our monthly ServiceNow career workshops with other professionals
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Join Next Workshop
          </button>
        </div>
      </div>
    </section>
  )
}