/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#286806',
        lightGreen: 'rgba(0, 79, 0, 0.08)',
        smallButton: "#FCB954",
        smallButtonLight: "#fff5e6"
      }
    },
  },
  screens: {
    xs: "300px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
}
