import type { Service } from '../types';
import { Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform"
    >
      {service.image && (
        <div className="relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-primary-600">
            <Clock className="h-4 w-4" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-600">
            <DollarSign className="h-4 w-4" />
            <span>${service.price}</span>
          </div>
        </div>
        <button
          onClick={() => onSelect(service)}
          className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Select Service
        </button>
      </div>
    </motion.div>
  );
}