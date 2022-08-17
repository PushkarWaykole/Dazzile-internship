/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my_light_blue': '#F7F7FC',
        'my_grey':"#E2E2EA",
        'my_dark_blue':"#5541D7",
        'my_dark_grey':"#92929D",
        'my_green':"#42BDA1",
        'my_dark_slate':"#11142D"

      },
    },
  },
  plugins: [],
}
