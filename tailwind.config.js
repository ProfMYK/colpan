/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      //     background: {
      //         primary: '#EDF0C3',
      //         secondary: '#EEEFE4',
      //     },
      //     foreground: {
      //         primary: '#171717',
      //         secondary: '#6D6D6D',
      //     },
      //     primary: '#FFFA7B',
      //     secondary: '#C082FF',
      //     test: {
      //         1: '#FF7B7B',
      //         2: '#7BFF7B',
      //     },
      //     transparent: 'transparent',
      //     bullshit: '#171717BB',
      //     white: '#FFFFFF',
      //     secondaryDark: '#a766e8',
      //     primaryDark: '#f2ed68'
      // },

      background: {
        primary: '#282A36',
        secondary: '#44475A',
      },
      foreground: {
        primary: '#F8F8F2',
        secondary: '#c2c2bc',
      },
      primary: '#BD93F9',
      secondary: '#FFB86C',
      test: {
        1: '#FF5555',
        2: '#50FA7B',
      },
      transparent: 'transparent',
      bullshit: '#171717BB',
      white: '#282A36',
      primaryDark: '#9f6fe3',
      secondaryDark: '#e6a055'
    },
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
      serif: ['"Righteous"', 'serif'],
    }
  },
  plugins: [],
}

