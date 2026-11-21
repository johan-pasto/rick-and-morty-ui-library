/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        portal: { DEFAULT: '#97CE4C', glow: '#b8ff5c', dark: '#5a8a1f' },
        morty: '#F0E14A',
        rick: '#00B0C8',
        schwifty: '#E89AC7',
        space: { 900: '#070b10', 800: '#0d131a', 700: '#141c26' },
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        portal: '0 0 30px rgba(151,206,76,.35)',
        'portal-lg': '0 0 60px rgba(151,206,76,.45)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%,100%': { opacity: '.35' },
          '50%': { opacity: '1' },
        },
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'spin-reverse': 'spin-reverse 12s linear infinite',
      },
    },
  },
  plugins: [],
};