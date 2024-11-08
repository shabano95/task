/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-img.jpg')",
        'div1': "url('/asset1.jpeg')",
        'div2': "url('/asset 2.jpeg')",
        'div3': "url('/asset 3.jpeg')",
        'div4': "url('/asset 4.jpeg')",
        'div5': "url('/asset 5.jpeg')",
        'div6': "url('/asset 6.jpeg')",
        'div7': "url('/asset 7.jpeg')",
        'div8': "url('/asset 8.jpeg')",
        'ux': "url('ux-design.png')",
      },
      fontFamily: {
        'nono': "Nunito Sans, serif",
      },
      container: {
        width: "1000px",
        height: "min-h-screen",
      },
    },
  },
  plugins: [],
}