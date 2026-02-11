
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Nasalization', 'Arial Black', 'sans-serif'],
        'body': ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        imo: {
          deep: "#0A1628",
          navy: "#0C2340",
          ocean: "#1565C0",
          wave: "#1E88E5",
          sky: "#42A5F5",
          foam: "#90CAF9",
          sand: "#FFF8E1",
          coral: "#FF7043",
          teal: "#00897B",
          green: "#2E7D32",
          neon: "#4DD0E1",        // мягкий циан (бирюза) вместо кислотного неона
          magenta: "#26C6DA",     // чуть другой оттенок бирюзы
          lime: "#80DEEA",        // светлая бирюза
        },
      },
      boxShadow: {
        'brutal': '0 4px 20px rgba(21, 101, 192, 0.15)',
        'brutal-sm': '0 2px 12px rgba(21, 101, 192, 0.1)',
        'brutal-white': '0 4px 20px rgba(255, 255, 255, 0.05)',
        'brutal-coral': '0 4px 20px rgba(255, 112, 67, 0.15)',
        'brutal-lime': '0 4px 20px rgba(77, 208, 225, 0.15)',
        'neon-glow': '0 0 20px rgba(77, 208, 225, 0.2)',
        'neon-glow-sm': '0 0 10px rgba(77, 208, 225, 0.15)',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0C2340 0%, #1565C0 50%, #1E88E5 100%)',
        'gradient-hero': 'linear-gradient(180deg, #050d1a 0%, #0C2340 40%, #1565C0 100%)',
        'gradient-neon': 'linear-gradient(135deg, #4DD0E1 0%, #42A5F5 50%, #1E88E5 100%)',
      },
      borderRadius: {
        'brutal': '1rem',
        'brutal-tl': '1.5rem 0.5rem 0.5rem 0.5rem',
        'brutal-br': '0.5rem 0.5rem 1.5rem 0.5rem',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, addUtilities }) {
      addVariant('light', '.light &');
      addUtilities({
        '.brutal-border': {
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.brutal-border-neon': {
          border: '1px solid rgba(77, 208, 225, 0.3)',
        },
        '.brutal-border-coral': {
          border: '1px solid rgba(255, 112, 67, 0.3)',
        },
      });
    }),
  ],
};
