/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'from-top': 'fromTop 1s linear'
      },
      colors: {
        'aqua-green': '#7A9A93',
        'light-aqua-green': '#C3E3D7',
        'dark-gray': '#2C3231'
      },
      letterSpacing: {
        'widestest': '0.335rem'
      },
      borderWidth: {
        1: 1
      },
      keyframes: {
        fromTop: {
          from: {
            transform: 'translateY(-200%)'
          },
          to: {
            transform: 'translateY(0%)'
          }
        }
      }
    }
  },
  plugins: []
};
