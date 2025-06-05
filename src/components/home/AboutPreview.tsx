import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Spiritual guide" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-cosmic-accent flex items-center justify-center">
                <Sparkle className="h-10 w-10 text-cosmic-dark" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Connecting You with Cosmic Forces</h2>
            <p className="text-cosmic-light/80 mb-6">
              At Las Fuerzas del Universo, we believe that the universe speaks to us through cosmic energies, celestial alignments, and ancient wisdom. Our mission is to help you tune into these universal forces and harness their power to transform your life.
            </p>
            <p className="text-cosmic-light/80 mb-8">
              With over 15 years of experience in spiritual practices, our guides combine traditional wisdom with modern understanding to provide personalized insights that resonate with your unique spiritual journey.
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="btn-primary"
            >
              Discover Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;