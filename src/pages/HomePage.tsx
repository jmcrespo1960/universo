import React from 'react';
import Hero from '../components/home/Hero';
import ServicePreview from '../components/home/ServicePreview';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import ContactCta from '../components/home/ContactCta';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicePreview />
      <AboutPreview />
      <Testimonials />
      <ContactCta />
    </>
  );
};

export default HomePage;