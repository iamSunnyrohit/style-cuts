import { motion } from 'framer-motion';
import type { ServiceCategory } from '../types';

interface ServiceCategoryTabsProps {
  selectedCategory: ServiceCategory | 'all';
  onSelectCategory: (category: ServiceCategory | 'all') => void;
}

const categories: { id: ServiceCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'haircut', label: 'Haircuts' },
  { id: 'styling', label: 'Styling' },
  { id: 'color', label: 'Color' },
  { id: 'treatment', label: 'Treatments' },
  { id: 'massage', label: 'Massage' },
  { id: 'spa', label: 'Spa Services' }
];

export function ServiceCategoryTabs({ selectedCategory, onSelectCategory }: ServiceCategoryTabsProps) {
  return (
    <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onSelectCategory(id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === id
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}