/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        projectFade: {
          '0%': { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-smooth': {
          '0%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' },
        },

        /*  HERO */
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
       
        projectFade: 'projectFade 1s ease forwards',
        'bounce-smooth': 'bounce-smooth 0.4s ease-out',

        /* HERO */
        fadeIn: 'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
