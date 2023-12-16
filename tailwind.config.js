/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  // coffee best theme frl
  daisyui: { themes: ["fantasy", "coffee"] }
};
