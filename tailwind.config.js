/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 1, 1)'
      },
      keyframes: {
        slide:{
          '0%': {
            transform: 'scale(1.5)',
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'scale(1)',
            transform: 'translateX(0%)'
          }
        },
        reverseSlide: {
          '0%': {
            transform: 'scale(1)',
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'scale(1.5)',
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {slide: 'slide 300ms ease-in-out', reverseSlide: 'reverseSlide 300ms ease-in-out'}
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

