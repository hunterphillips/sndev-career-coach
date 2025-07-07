import Icon from '../ui/Icon';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
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
              <Icon type="platform" className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Fundamentals</h3>
            <p className="text-gray-600 mb-6">Master the core concepts of ServiceNow platform development, administration, and best practices.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon type="career" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Acceleration</h3>
            <p className="text-gray-600 mb-6">Strategic guidance for advancing your ServiceNow career, including certifications and role transitions.</p>

          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon type="interview" className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interview Prep</h3>
            <p className="text-gray-600 mb-6">Comprehensive interview preparation for ServiceNow roles, including technical assessments and scenarios.</p>
          </div>
        </div>
      </div>
    </section>
  )
}