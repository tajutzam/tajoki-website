/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#DFE7FF',
          200: '#C0CFFF',
          300: '#A1B7FF',
          400: '#829FFF',
          500: '#6387FF',
          600: '#446EE9',
          700: '#2B54BF',
          800: '#1E3A8A',
          900: '#12275C',
        },
        secondary: {
          50: '#EFFBFF',
          100: '#DEF8FF',
          200: '#B0EEFF',
          300: '#83E5FF',
          400: '#55DCFF',
          500: '#27D3FF',
          600: '#0ABDFF',
          700: '#0097D1',
          800: '#006F9E',
          900: '#004F70',
        },
        accent: {
          50: '#FFF2E9',
          100: '#FFE5D3',
          200: '#FFCBA6',
          300: '#FFB17A',
          400: '#FF974D',
          500: '#FF7D21',
          600: '#E66200',
          700: '#B94E00',
          800: '#8C3A00',
          900: '#5F2700',
        },
        success: {
          500: '#22C55E',
          600: '#16A34A',
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};