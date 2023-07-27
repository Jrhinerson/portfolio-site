/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      peach: 'rgb(244,162,140)',
      lightgray: 'rgb(200,221,218)',
      darkteal: 'rgb(83,113,117)',
      medteal: 'rgb(0,133,139)',
      lightteal: 'rgb(111,209,201)',
      yellow: 'rgb(240,204,80)',
      darkorange: 'rgb(235,126,77)'
    },
    extend: {
      boxShadow: {
        'lrg': '0 0 9px 1px',
      }
    },
  },
  plugins: [],
}
