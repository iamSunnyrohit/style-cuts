import { motion } from 'framer-motion';
import { Calendar, Clock, Shield, Scissors } from 'lucide-react';

export function LandingHero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Book Your Perfect Haircut
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Experience hassle-free scheduling with our modern booking platform. Choose your stylist, pick your time, and look your best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/checkout"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Calendar,
              title: 'Easy Scheduling',
              description: 'Book appointments 24/7 at your convenience'
            },
            {
              icon: Clock,
              title: 'Real-time Availability',
              description: 'See available slots instantly and choose what works for you'
            },
            {
              icon: Shield,
              title: 'Secure Booking',
              description: 'Your information is always protected with us'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-0 text-primary-600"
      >
        <Scissors className="h-64 w-64" />
      </motion.div>
    </section>
  );
}