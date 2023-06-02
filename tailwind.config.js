/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/componentes/*.tsx',
  './src/navegacao/*.tsx',
  './src/paginas/home/*.tsx',
  '/App.js'
  ],
  theme: {
    extend: {
      colors: {
        'blueCorp':{
          700: '#0A66C2'
        },
        'gray': {
          200: '#C4C4CC',
          900: '#121214'
        },
        'green': {
          500: '015F43'
        }
      }

    },
  },
  plugins: [],
}

