/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        eunoia: "#E5E0FF",
        eunoiatext: "#674188",
      }
    },
  },
  plugins: [],
}
