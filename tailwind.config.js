/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx", 
    "./src/components/*.tsx"
  ],
  theme: {
    extend: {
    },
    colors: {
      "minhacor": {
        200: '#ddd'
      },
      "green": {
        300: '#27ae60'
      }
    }
  },
  plugins: [],
}

