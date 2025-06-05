import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Moon, Sun, Compass, Wand2, BookOpen, Waves } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Tarot Reading',
    description: 'Unlock insights into your past, present, and future through the mystical power of tarot cards. Our expert readers interpret the symbols and energies to provide guidance on your specific questions and life situations.',
    icon: <Sparkles className="h-10 w-10 text-cosmic-accent" />,
    price: '$65',
    duration: '45 minutes',
    details: [
      'Personalized card spread based on your specific question',
      'Intuitive interpretation of card meanings',
      'Practical guidance for applying insights',
      'Follow-up email with key takeaways',
      'Available in-person or via video call'
    ]
  },
  {
    id: 2,
    title: 'Astrology Charts',
    description: 'Discover how the celestial bodies influence your life path with detailed birth chart analysis. Understand your strengths, challenges, and opportunities by exploring the cosmic blueprint you were born with.',
    icon: <Moon className="h-10 w-10 text-cosmic-accent" />,
    price: '$95',
    duration: '60 minutes',
    details: [
      'Complete natal chart calculation and analysis',
      'Exploration of sun, moon, rising signs and planetary placements',
      'Identification of key life themes and patterns',
      'Current planetary transits and their impact',
      'Digital copy of your chart and detailed report'
    ]
  },
  {
    id: 3,
    title: 'Spiritual Guidance',
    description: 'Navigate life\'s challenges with personalized spiritual coaching and energy work. Our experienced guides help you connect with your higher self and develop practices that support your spiritual growth.',
    icon: <Compass className="h-10 w-10 text-cosmic-accent" />,
    price: '$85',
    duration: '60 minutes',
    details: [
      'Personalized spiritual practice recommendations',
      'Energy assessment and balancing techniques',
      'Intuitive guidance for life challenges',
      'Meditation and mindfulness instruction',
      'Ongoing support between sessions'
    ]
  },
  {
    id: 4,
    title: 'Energy Healing',
    description: 'Restore balance to your energy centers and promote holistic wellbeing through various energy healing modalities. Experience deep relaxation and release of energetic blockages.',
    icon: <Sun className="h-10 w-10 text-cosmic-accent" />,
    price: '$75',
    duration: '50 minutes',
    details: [
      'Comprehensive energy assessment',
      'Chakra balancing and clearing',
      'Reiki energy transmission',
      'Crystal healing integration',
      'Post-session self-care recommendations'
    ]
  },
  {
    id: 5,
    title: 'Crystal Consultation',
    description: 'Discover which crystals resonate with your energy and how to use them for healing, manifestation, and spiritual growth. Learn to create a crystal grid tailored to your intentions.',
    icon: <Wand2 className="h-10 w-10 text-cosmic-accent" />,
    price: '$60',
    duration: '45 minutes',
    details: [
      'Personalized crystal recommendations',
      'Instruction on cleansing and charging methods',
      'Crystal grid creation guidance',
      'Integration with other spiritual practices',
      'Basic crystal starter kit included'
    ]
  },
  {
    id: 6,
    title: 'Akashic Records Reading',
    description: 'Access the ethereal library containing the vibrational records of your soul\'s journey. Gain insights into your soul\'s purpose, past lives, and karmic patterns.',
    icon: <BookOpen className="h-10 w-10 text-cosmic-accent" />,
    price: '$110',
    duration: '75 minutes',
    details: [
      'Sacred prayer process to access records',
      'Soul-level guidance and insights',
      'Past life information relevant to current challenges',
      'Clearing of karmic patterns',
      'Soul contract exploration'
    ]
  },
  {
    id: 7,
    title: 'Meditation Classes',
    description: 'Learn effective meditation techniques to quiet the mind, reduce stress, and enhance your spiritual connection. Classes are available for beginners to advanced practitioners.',
    icon: <Waves className="h-10 w-10 text-cosmic-accent" />,
    price: '$40',
    duration: '60 minutes',
    details: [
      'Guided meditation instruction',
      'Breathwork techniques',
      'Visualization methods',
      'Integration into daily routine',
      'Small group setting (max 8 participants)'
    ]
  },
  {
    id: 8,
    title: 'Spiritual Development Course',
    description: 'A comprehensive 8-week program designed to deepen your spiritual practice, develop your intuition, and connect with universal energies. Includes weekly classes and personalized guidance.',
    icon: <Star className="h-10 w-10 text-cosmic-accent" />,
    price: '$399',
    duration: '8 weeks',
    details: [
      'Weekly 90-minute group classes',
      'Personalized practice assignments',
      'Meditation and energy work instruction',
      'Community support group',
      'One private consultation session included'
    ]
  },
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cosmic-dark opacity-70"></div>
          <img 
            src="https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1600" 
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
              Our <span className="text-cosmic-accent">Services</span>
            </h1>
            <p className="text-xl text-cosmic-light/90">
              Explore our range of spiritual services designed to help you connect with the universal forces and transform your life.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedService(service.id)}
                className="cursor-pointer"
              >
                <div className="card group h-full flex flex-col">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-serif text-cosmic-accent mb-2">{service.title}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-cosmic-light bg-cosmic-accent/20 px-3 py-1 rounded-full text-sm">
                      {service.price}
                    </span>
                    <span className="text-cosmic-light/70 text-sm">
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-cosmic-light/70 mb-6 line-clamp-3">{service.description}</p>
                  <button 
                    className="text-cosmic-accent font-medium group-hover:underline mt-auto self-start"
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-cosmic-dark opacity-70"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-cosmic-indigo rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10">
            {services.filter(s => s.id === selectedService).map(service => (
              <div key={service.id} className="p-6 md:p-8">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-cosmic-light/70 hover:text-cosmic-accent"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-center mb-6">
                  <div className="mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-serif text-cosmic-accent">{service.title}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-cosmic-light bg-cosmic-accent/20 px-3 py-1 rounded-full text-sm">
                        {service.price}
                      </span>
                      <span className="text-cosmic-light/70 text-sm">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-cosmic-light/80 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-serif text-cosmic-light mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cosmic-accent mr-2">•</span>
                        <span className="text-cosmic-light/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn-primary w-full">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* FAQ section */}
      <section className="py-16 bg-cosmic-indigo bg-opacity-30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-cosmic-light/80 max-w-3xl mx-auto">
              Find answers to common questions about our services and spiritual practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: 'How do I prepare for my first reading or session?',
                answer: 'We recommend taking some quiet time before your session to center yourself. Consider what questions or areas of your life you\'d like guidance on. Arrive with an open mind and heart for the best experience.'
              },
              {
                question: 'Do I need to have prior experience with spiritual practices?',
                answer: 'Not at all. Our services are designed for everyone, from complete beginners to those with extensive spiritual experience. Our guides will meet you where you are and explain everything clearly.'
              },
              {
                question: 'How often should I schedule readings or sessions?',
                answer: 'This varies by individual and service type. For tarot readings and astrology charts, many clients find value in seasonal sessions (3-4 times per year). Energy healing and spiritual guidance can be more regular, such as monthly. We can help you determine what\'s best for your needs.'
              },
              {
                question: 'Are your services available online?',
                answer: 'Yes, most of our services can be conducted via video call. The energy of our work transcends physical distance, allowing us to connect with clients worldwide while maintaining the integrity and effectiveness of our practice.'
              },
              {
                question: 'What if I\'m skeptical about spiritual practices?',
                answer: 'Skepticism is natural and welcome! We don\'t require blind faith. Our approach is to provide experiences and insights that you can evaluate for yourself. Many initially skeptical clients have found value in our services through the practical results they experience.'
              },
              {
                question: 'Can these services help with specific life challenges?',
                answer: 'Absolutely. While our services are spiritual in nature, they provide practical insights and guidance that can be applied to specific challenges such as career decisions, relationship issues, personal growth, and finding purpose.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="card h-full">
                  <h3 className="text-xl font-serif text-cosmic-accent mb-3">{faq.question}</h3>
                  <p className="text-cosmic-light/70">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;