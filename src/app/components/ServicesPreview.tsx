import Link from 'next/link';
import { services } from '@/data/mockData';

const ServicesPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of technology services to help your business thrive in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {service.title}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.price && <p className="text-blue-600 font-semibold mb-4">{service.price}</p>}
                <button className="text-blue-600 font-semibold hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;