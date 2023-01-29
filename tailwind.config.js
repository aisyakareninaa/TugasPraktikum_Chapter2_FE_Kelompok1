/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        eunoia: "#C3ACD0",
        eunoiatext: "#674188",
      }
    },
  },
  plugins: [],
}
