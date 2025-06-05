import React from 'react';
import { motion } from 'framer-motion';
import { Star, User, Heart, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cosmic-dark opacity-70"></div>
          <img 
            src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Cosmic background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Star className="h-10 w-10 text-cosmic-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-cosmic-light mb-6">
              Our <span className="text-cosmic-accent">Story</span>
            </h1>
            <p className="text-xl text-cosmic-light/90">
              Discover the journey that led us to share the wisdom of universal forces with seekers like you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Mission & Philosophy</h2>
              <p className="text-cosmic-light/80 mb-6">
                At Las Fuerzas del Universo, we believe that the cosmic forces surrounding us hold ancient wisdom that can guide and transform our lives. Our mission is to help individuals connect with these universal energies, understand their personal cosmic blueprint, and harness these forces to create meaningful change.
              </p>
              <p className="text-cosmic-light/80 mb-6">
                We view the universe as an intricate tapestry of energies, with each person playing a unique role in its grand design. By understanding your place within this cosmic web, you can align with your higher purpose and manifest your true potential.
              </p>
              <p className="text-cosmic-light/80">
                Our approach combines ancient wisdom with modern understanding, creating a bridge between traditional spiritual practices and contemporary needs. We honor all spiritual paths and beliefs, recognizing that universal truths transcend cultural and religious boundaries.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Spiritual practice" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 bg-cosmic-indigo bg-opacity-30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <User className="h-8 w-8 text-cosmic-accent mx-auto mb-4" />
            <h2 className="section-title">Our Spiritual Guides</h2>
            <p className="text-lg text-cosmic-light/80 max-w-3xl mx-auto">
              Meet our experienced practitioners who are dedicated to helping you connect with universal forces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Elena Santos',
                role: 'Founder & Master Astrologer',
                image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600',
                bio: 'With over 15 years of experience in astrology, Elena has helped countless individuals understand their cosmic blueprint.'
              },
              {
                name: 'Miguel Rivera',
                role: 'Tarot Master & Energy Healer',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
                bio: 'Miguel combines the ancient wisdom of tarot with energy healing techniques to provide holistic guidance.'
              },
              {
                name: 'Isabella Moon',
                role: 'Spiritual Coach & Meditation Guide',
                image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600',
                bio: 'Isabella specializes in helping clients develop their intuition and spiritual practices through meditation and mindfulness.'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="card text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-cosmic-accent mb-1">{member.name}</h3>
                  <p className="text-sm text-cosmic-light/70 mb-4">{member.role}</p>
                  <p className="text-cosmic-light/80">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Heart className="h-8 w-8 text-cosmic-accent mx-auto mb-4" />
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-lg text-cosmic-light/80 max-w-3xl mx-auto">
              The principles that guide our practice and our interactions with every seeker who crosses our path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Integrity & Authenticity',
                description: 'We provide honest guidance with the highest ethical standards, respecting the sacred trust our clients place in us.'
              },
              {
                title: 'Empowerment & Growth',
                description: 'Our goal is to empower you with knowledge and tools for your personal spiritual development, not to create dependency.'
              },
              {
                title: 'Respect & Inclusivity',
                description: 'We honor all spiritual paths and backgrounds, creating a safe space where everyone is welcome.'
              },
              {
                title: 'Wisdom & Continuous Learning',
                description: 'We combine ancient wisdom with modern insights, continually expanding our knowledge to better serve our community.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="card h-full">
                  <h3 className="text-xl font-serif text-cosmic-accent mb-3">{value.title}</h3>
                  <p className="text-cosmic-light/80">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;