import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
        {service.title}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        {service.price && (
          <div className="mb-4">
            <span className="text-blue-600 font-semibold">{service.price}</span>
          </div>
        )}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;