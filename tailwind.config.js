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
        orange: colors.orange
      },
      width: {
        '15': '15%',
        '18': '18%',
        '25': '25%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '75': '75%',
        '85': '85%',
      },
      height: {
        '10': '10%',
        '15': '15%',
        '85': '85%',
        '90': '90%',
        '91': '91%',
        '93': '93%',
        '95': '95%',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
