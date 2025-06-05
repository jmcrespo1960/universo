import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    text: 'The tarot reading was incredibly accurate and provided the guidance I needed during a difficult transition. Highly recommend!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    name: 'James Wilson',
    text: 'My astrology chart reading was eye-opening. It explained patterns I\'ve been experiencing for years and helped me understand my life purpose.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    text: 'The spiritual guidance sessions have transformed my approach to life\'s challenges. I feel more centered and connected to my higher self.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-cosmic-indigo bg-opacity-30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Quote className="h-8 w-8 text-cosmic-accent mx-auto mb-4" />
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-cosmic-light/80 max-w-3xl mx-auto">
            Read about the transformative experiences of those who have connected with the universal forces through our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <h3 className="text-lg font-medium text-cosmic-light">{testimonial.name}</h3>
                </div>
                <p className="text-cosmic-light/70 italic flex-grow">{testimonial.text}</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cosmic-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;