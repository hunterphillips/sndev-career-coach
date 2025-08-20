import Icon from '../ui/Icon';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ServiceNow Coaching Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Coaching and mentorship to help you rapidly advance your ServiceNow
            career journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-xl text-center"
            >
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <Icon
                  type={service.icon}
                  className={`w-8 h-8 ${service.iconColor}`}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
