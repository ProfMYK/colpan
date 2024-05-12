/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        background: {
            primary: '#EDF0C3',
            secondary: '#EEEFE4',
        },
        foreground: {
            primary: '#171717',
            secondary: '#6D6D6D',
        },
        primary: '#FFFA7B',
        secondary: '#C082FF',
        test: {
            1: '#FF7B7B',
            2: '#7BFF7B',
        },
        transparent: 'transparent',
        bullshit: '#171717BB',
        white: '#FFFFFF',
    },
    fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
        serif: ['"Righteous"', 'serif'],
    }
  },
  plugins: [],
}

