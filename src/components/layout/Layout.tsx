import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Stars from '../utils/Stars';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col cosmic-bg relative">
      <Stars />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;