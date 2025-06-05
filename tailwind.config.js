/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#121A3E',
          purple: '#2D1B4E',
          indigo: '#1F2A6B',
          blue: '#172554',
          accent: '#D4AF37',
          light: '#F0EAD6',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'cosmic-gradient': 'linear-gradient(to right, #121A3E, #2D1B4E)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};