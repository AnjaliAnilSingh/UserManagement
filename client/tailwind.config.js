/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mint' : '#79D7BE',
        'teal' : '#4DA1A9',
        'purple' : '#516091',
        
      }
    },
  },
  plugins: [],
}