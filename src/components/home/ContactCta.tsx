import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactCta: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cosmic-blue opacity-70"></div>
        <img 
          src="https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Starry night sky" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cosmic-purple bg-opacity-50 backdrop-blur-md rounded-lg p-12 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cosmic-accent/20 mb-6">
            <Mail className="h-8 w-8 text-cosmic-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-cosmic-light mb-6">
            Begin Your Cosmic Journey Today
          </h2>
          <p className="text-lg text-cosmic-light/80 mb-8 max-w-2xl mx-auto">
            Whether you seek answers, guidance, or deeper spiritual connection, our expert guides are ready to illuminate your path.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="btn-primary"
          >
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCta;