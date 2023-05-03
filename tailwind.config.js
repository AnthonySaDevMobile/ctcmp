/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-header': 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
      },
      colors:{
        'bg-yellow-ct': '#ffe900',
        'bg-black-ct': '#161616'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.35em',
      },      
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Montserrat-Italic': ['Montserrat-Italic'],
        'Montserrat-Bold': ['Montserrat-Bold'],
        'Unimed': ['Unimed-Bold'],
      },
    },
  },
  plugins: [],
}
