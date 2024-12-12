/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'border-show':  {
          '0%': { 'border-color': 'rgba(0, 0, 0, 0)' },
          '100%': { 'border-color': 'rgba(0, 0, 0, .8)' },
        },
        'show-modal': {
          '0%':   {opacity: '0', transform: 'translateY(-100%)'},
          '100%': {opacity: '100%', transform: 'translateY(0%)'}
        },
        'new-task': {
          '0%': {transform: 'translateY(-50%)'},
          '100%': {transform: 'translateY(0%)'}
        }
      },
      animation: {
        'border-show':  'border-show .6s',
        'show-modal':   'show-modal .3s ease-in',
        'new-task':     'new-task .2s'
      }
    },
  },
  plugins: [],
}

