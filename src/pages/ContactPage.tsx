import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, PhoneCall, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cosmic-dark opacity-70"></div>
          <img 
            src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1600" 
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
            <Mail className="h-10 w-10 text-cosmic-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-cosmic-light mb-6">
              Contact <span className="text-cosmic-accent">Us</span>
            </h1>
            <p className="text-xl text-cosmic-light/90">
              Begin your spiritual journey by reaching out to our experienced guides.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-cosmic-accent/20 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-cosmic-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cosmic-light mb-1">Email Us</h3>
                    <p className="text-cosmic-light/70">contact@lasfuerzasdeluniverso.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cosmic-accent/20 p-3 rounded-lg mr-4">
                    <PhoneCall className="h-6 w-6 text-cosmic-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cosmic-light mb-1">Call Us</h3>
                    <p className="text-cosmic-light/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cosmic-accent/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-cosmic-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cosmic-light mb-1">Visit Us</h3>
                    <p className="text-cosmic-light/70">
                      123 Cosmic Avenue<br />
                      Universe City, UN 12345
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-cosmic-accent mb-4">Our Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cosmic-light">Monday - Friday</span>
                    <span className="text-cosmic-light/70">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cosmic-light">Saturday</span>
                    <span className="text-cosmic-light/70">11:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cosmic-light">Sunday</span>
                    <span className="text-cosmic-light/70">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cosmic-accent/20 mb-6">
                      <Send className="h-8 w-8 text-cosmic-accent" />
                    </div>
                    <h3 className="text-2xl font-serif text-cosmic-accent mb-4">Message Sent!</h3>
                    <p className="text-cosmic-light/80 mb-6">
                      Thank you for reaching out. One of our spiritual guides will contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif text-cosmic-accent mb-6">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-cosmic-light mb-2">Your Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-cosmic-dark/50 border border-cosmic-purple/30 rounded-md py-2 px-4 text-cosmic-light focus:outline-none focus:ring-2 focus:ring-cosmic-accent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-cosmic-light mb-2">Your Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-cosmic-dark/50 border border-cosmic-purple/30 rounded-md py-2 px-4 text-cosmic-light focus:outline-none focus:ring-2 focus:ring-cosmic-accent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-cosmic-light mb-2">Service of Interest</label>
                          <select 
                            id="service" 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-cosmic-dark/50 border border-cosmic-purple/30 rounded-md py-2 px-4 text-cosmic-light focus:outline-none focus:ring-2 focus:ring-cosmic-accent"
                            required
                          >
                            <option value="">Select a Service</option>
                            <option value="tarot">Tarot Reading</option>
                            <option value="astrology">Astrology Charts</option>
                            <option value="guidance">Spiritual Guidance</option>
                            <option value="healing">Energy Healing</option>
                            <option value="crystals">Crystal Consultation</option>
                            <option value="akashic">Akashic Records Reading</option>
                            <option value="meditation">Meditation Classes</option>
                            <option value="course">Spiritual Development Course</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-cosmic-light mb-2">Your Message</label>
                          <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full bg-cosmic-dark/50 border border-cosmic-purple/30 rounded-md py-2 px-4 text-cosmic-light focus:outline-none focus:ring-2 focus:ring-cosmic-accent"
                            required
                          ></textarea>
                        </div>
                      </div>
                      
                      <button 
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="py-16 bg-cosmic-indigo bg-opacity-30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Find Us</h2>
            <p className="text-lg text-cosmic-light/80 max-w-3xl mx-auto">
              Visit our spiritual center to experience the cosmic energies in person.
            </p>
          </div>
          
          <div className="bg-cosmic-dark/50 border border-cosmic-purple/30 rounded-lg overflow-hidden h-[400px] relative">
            {/* This is a placeholder for a map. In a real implementation, you would integrate with a maps API */}
            <div className="absolute inset-0 flex items-center justify-center bg-cosmic-indigo">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-cosmic-accent mx-auto mb-4" />
                <p className="text-cosmic-light text-lg">
                  123 Cosmic Avenue, Universe City
                </p>
                <p className="text-cosmic-light/70 mt-2">
                  Map integration would appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;