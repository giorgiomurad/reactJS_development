/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'project-color':  {
          1:  '#422f10',
          2:  '#ba9760'
        }
      },
      backgroundColor: {
        'backdrop-modal': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'merriweather': ['Merriweather'],
      },
      keyframes: {
        'show-modal': {
          '0%':   {opacity: '0', transform: 'translateY(-100%)'},
          '100%': {opacity: '100%', transform: 'translateY(0%)'}
        },
      },
      animation: {
        'show-modal':   'show-modal .3s ease-in',
      }
    },
  },
  plugins: [],
}

