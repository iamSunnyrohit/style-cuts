import { motion } from 'framer-motion';
import { Users, Star, MessageSquare, Smartphone } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Users,
      title: 'Expert Stylists',
      description: 'Our team of professional stylists is here to make you look and feel your best.'
    },
    {
      icon: Star,
      title: 'Quality Service',
      description: 'Experience premium hair care with top-notch products and techniques.'
    },
    {
      icon: MessageSquare,
      title: 'Instant Confirmation',
      description: 'Receive immediate booking confirmations and reminders.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Book and manage appointments from any device, anywhere.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose StyleCuts?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine professional expertise with modern technology to provide you with the best possible experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}