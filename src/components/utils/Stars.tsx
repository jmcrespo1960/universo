import React, { useEffect, useRef } from 'react';

const Stars: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    
    // Clear previous stars
    container.innerHTML = '';
    
    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 2;
      
      // Random animation delay
      const delay = Math.random() * 4;
      
      // Apply styles
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={starsRef} className="parallax-stars" />;
};

export default Stars;