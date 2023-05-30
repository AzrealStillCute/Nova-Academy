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
        "photo" : "600px",
        "video" : "1000px"
      } ,
      height: {
        "hero" : "600px",
        "photo" : "380px"
      } ,
      fontFamily : {
        "heading" : ['Raleway', 'sans-serif'],
        "body" : ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'mobile': '0 -5px 50px -12px rgb(0 0 0 / 0.25)',
      }

    },
  },
  plugins: [],
}

