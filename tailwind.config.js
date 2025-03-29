/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          primary: '#2B95FF',
          secondary: '#00E5FF',
          background: '#040837',
        },
        gradient: {
          'hero-text': 'linear-gradient(to right, #2B95FF, #00E5FF)',
          'hero-bg': 'linear-gradient(to bottom right, rgba(43, 149, 255, 0.05), transparent, rgba(0, 229, 255, 0.05))',
        },
        primary: {
          DEFAULT: '#6B46C1',
          hover: '#805AD5',
          light: '#9F7AEA',
          dark: '#553C9A'
        },
        secondary: {
          DEFAULT: '#4299E1',
          hover: '#63B3ED',
          light: '#90CDF4',
          dark: '#3182CE'
        },
        background: {
          DEFAULT: '#040837',
          light: 'rgba(4, 8, 55, 0.5)'
        }
      },
      keyframes: {
        'star-movement-top': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(100%)' }
        },
        'star-movement-bottom': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' }
        },
        shimmer: {
          'from': { 'background-position': '200% 0' },
          'to': { 'background-position': '-200% 0' },
        },
        'border-spin': {
          'to': { transform: 'translateX(-50%)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'star-movement-top': 'star-movement-top var(--speed, 6s) linear infinite',
        'star-movement-bottom': 'star-movement-bottom var(--speed, 6s) linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-spin': 'border-spin 2s linear infinite',
        marquee: 'marquee 30s linear infinite'
      }
    },
  },
  plugins: [],
} 