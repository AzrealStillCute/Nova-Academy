/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "menu" : "31px",
        "photo" : "500px",
        "video" : "1000px"
      } ,
      height: {
        "hero" : "500px",
        "photo" : "500px",
        "photo-small" : "420px"
      } ,
      fontFamily : {
        "heading" : ['Raleway', 'sans-serif'],
        "body" : ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'active': '0 -5px 20px -12px rgb(0 0 0 / 0.25)',
      }

    },
  },
  plugins: [],
}

