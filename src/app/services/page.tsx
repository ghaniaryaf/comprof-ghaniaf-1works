import { services, testimonials } from '@/data/mockData';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of technology services designed to help your business thrive in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">&#39;{testimonial.company}&#39;</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;