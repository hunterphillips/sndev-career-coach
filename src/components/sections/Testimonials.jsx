export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Don't take my word for it</h2>
          <p className="text-xl text-gray-600">
            I asked nice people I know to say nice things about me and this is what they said
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">ServiceNow Developer</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;The coaching helped me transition from a junior admin to a senior developer role. The technical guidance was invaluable.&rdquo;
            </p>
            <div className="flex text-yellow-400 mt-4">
              ★★★★★
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-gray-600">Solution Architect</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;Landed my dream role as a ServiceNow architect after just 3 coaching sessions. The interview prep was spot-on.&rdquo;
            </p>
            <div className="flex text-yellow-400 mt-4">
              ★★★★★
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Alex Rodriguez</div>
                <div className="text-gray-600">Platform Admin</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;From zero ServiceNow knowledge to certified admin in 6 months. The structured approach made all the difference.&rdquo;
            </p>
            <div className="flex text-yellow-400 mt-4">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}