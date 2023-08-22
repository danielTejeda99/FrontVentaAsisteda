/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        sanchez: ['var(--font-sanchez)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        orange: colors.orange,
        colmena3: "#FEC82F",
        'c1': '#FEC82F',
        'c2':'#0097AE',
        'c3':'#E6EDF3',
        'c4':'#E6F3F5',
        green300: '#D9ECEF',
        green0: '#007587',
        bluetext: '#032D50',
        greenText: '#6B7280',
        green200: '#006271',
        colorText: '#606773',
        '#008296': '#008296',
        blackText: '#25282D'

      },
      width: {
        '15': '15%',
        '18': '18%',
        '25': '25%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '75': '75%',
        '80': '80%',
        '85': '85%',
        '220': '220px',
        '320': '320px'
      },
      height: {
        '10': '10%',
        '15': '15%',
        '85': '85%',
        '90': '90%',
        '91': '91%',
        '93': '93%',
        '95': '95%',
        '100': '100%',
        '200': '200px',
        '208': '208px'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
