/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".bg-color": {
          backgroundColor: '#F0F2F5'
        },
      });
    }),
  ],
  daisyui: {
    themes: ["light"],
  },
};
