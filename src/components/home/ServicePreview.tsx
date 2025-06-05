import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Sun, Star, Compass } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Tarot Reading',
    description: 'Unlock insights into your past, present, and future through the mystical power of tarot cards.',
    icon: <Sparkles className="h-10 w-10 text-cosmic-accent" />,
  },
  {
    id: 2,
    title: 'Astrology Charts',
    description: 'Discover how the celestial bodies influence your life path with detailed birth chart analysis.',
    icon: <Moon className="h-10 w-10 text-cosmic-accent" />,
  },
  {
    id: 3,
    title: 'Spiritual Guidance',
    description: 'Navigate life\'s challenges with personalized spiritual coaching and energy work.',
    icon: <Compass className="h-10 w-10 text-cosmic-accent" />,
  },
  {
    id: 4,
    title: 'Energy Healing',
    description: 'Restore balance to your energy centers and promote holistic wellbeing.',
    icon: <Sun className="h-10 w-10 text-cosmic-accent" />,
  },
];

const ServicePreview: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section id="services\" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Star className="h-8 w-8 text-cosmic-accent mx-auto mb-4" />
          <h2 className="section-title">Our Cosmic Services</h2>
          <p className="text-lg text-cosmic-light/80 max-w-3xl mx-auto">
            Explore our range of spiritual services designed to help you connect with the universal forces that shape your destiny.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card group h-full flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-cosmic-accent mb-3">{service.title}</h3>
                <p className="text-cosmic-light/70 mb-6 flex-grow">{service.description}</p>
                <button 
                  onClick={() => navigate('/services')}
                  className="text-cosmic-accent font-medium group-hover:underline self-start"
                >
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/services')}
            className="btn-secondary"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;