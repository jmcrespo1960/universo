import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Stars } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cosmic-dark bg-opacity-90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Moon className="h-8 w-8 text-cosmic-accent" />
          <span className="text-cosmic-accent font-serif text-xl md:text-2xl font-medium">Las Fuerzas del Universo</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-lg font-medium hover:text-cosmic-accent transition-colors duration-300 ${
                    (location.pathname === '/' && item === 'Home') || 
                    location.pathname === `/${item.toLowerCase()}` 
                      ? 'text-cosmic-accent' 
                      : 'text-cosmic-light'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="md:hidden text-cosmic-light" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-cosmic-indigo bg-opacity-95 backdrop-blur-md"
        >
          <ul className="flex flex-col space-y-4 p-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-lg block py-2 hover:text-cosmic-accent transition-colors duration-300 ${
                    (location.pathname === '/' && item === 'Home') || 
                    location.pathname === `/${item.toLowerCase()}` 
                      ? 'text-cosmic-accent' 
                      : 'text-cosmic-light'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;