/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'quick-pulse':  {
          '0%, 100%': { opacity: '100%' },
          '50%':      { opacity: '50%' }
        },
        'show-modal': {
          '0%':   {opacity: '0', transform: 'translateY(-100%)'},
          '100%': {opacity: '100%', transform: 'translateY(0%)'}
        }
      },
      animation:  {
        'quick-pulse':  'quick-pulse 1s ease-in-out infinite',
        'show-modal':   'show-modal .3s ease-in'
      },
      fontFamily: {
        title: ['"Silkscreen"', 'cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

