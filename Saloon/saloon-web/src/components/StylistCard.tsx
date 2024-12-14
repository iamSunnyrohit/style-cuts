import React from 'react';
import type { Stylist } from '../types';
import { Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface StylistCardProps {
  stylist: Stylist;
  onSelect: (stylist: Stylist) => void;
}

export function StylistCard({ stylist, onSelect }: StylistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform"
    >
      <div className="relative">
        <img
          src={stylist.imageUrl}
          alt={stylist.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{stylist.name}</h3>
          <div className="flex items-center space-x-1 bg-primary-50 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-primary-600 fill-current" />
            <span className="text-sm text-primary-600">{stylist.rating} ({stylist.reviews})</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{stylist.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {stylist.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <Calendar className="h-4 w-4 text-primary-600" />
          <span className="text-sm">Available: {stylist.availability.join(', ')}</span>
        </div>
        <button
          onClick={() => onSelect(stylist)}
          className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Book with {stylist.name}
        </button>
      </div>
    </motion.div>
  );
}