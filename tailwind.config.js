/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '4k': '2560px',
    },
    fontFamily: {
      primary: ['Helvetica', 'sans-serif']
    },
    extend: {
      fontSize: {
        '10': ['0.625rem', '0.75rem'],
        '40': ['2.5rem', '.9'],
      },
      colors: {
        brightGray: '#eee',
        spiroDiscoBall: '#20C0E8',
        japaneseIndigo: '#25364F',
        quicksilver: '#9BA6A8',
        water: '#D3F6FF',
        magicPotion: '#FE4D5F',
        caribbeanGreen: '#13E1B0',
        ufoGreen: '#36C66F',
      },
      boxShadow: {
        'shadow': '0px 0px 10px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
}


