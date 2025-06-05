import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cosmic-blue bg-opacity-30 backdrop-blur-md pt-16 pb-8 border-t border-cosmic-purple/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Moon className="h-6 w-6 text-cosmic-accent" />
              <span className="text-cosmic-accent font-serif text-xl font-medium">Las Fuerzas del Universo</span>
            </Link>
            <p className="text-cosmic-light/80 mb-6">
              Discover the cosmic forces that shape your destiny and guide your spiritual journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cosmic-light/70 hover:text-cosmic-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cosmic-light/70 hover:text-cosmic-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cosmic-light/70 hover:text-cosmic-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-cosmic-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-cosmic-light/70 hover:text-cosmic-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-cosmic-accent mb-4">Services</h3>
            <ul className="space-y-2">
              {['Tarot Reading', 'Astrology Charts', 'Spiritual Guidance', 'Energy Healing'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-cosmic-light/70 hover:text-cosmic-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-cosmic-accent mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-cosmic-accent mt-1" />
                <span className="text-cosmic-light/70">contact@lasfuerzasdeluniverso.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cosmic-purple/20">
          <p className="text-center text-cosmic-light/60 text-sm">
            &copy; {new Date().getFullYear()} Las Fuerzas del Universo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;