export interface Appointment {
  id: string;
  date: string;
  time: string;
  service: Service;
  stylistId: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  category: ServiceCategory;
  image?: string;
}

export type ServiceCategory = 'haircut' | 'styling' | 'color' | 'treatment' | 'massage' | 'spa';

export interface Stylist {
  id: string;
  name: string;
  specialties: string[];
  imageUrl: string;
  bio: string;
  availability: string[];
  rating: number;
  reviews: number;
  services: ServiceCategory[];
}