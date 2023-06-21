/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        contact: "url('./src/assets/contact_bg.jpg')",
        map: "url(./src/assets/map.jpg)"
      }
    },
  },
  plugins: [],
};
