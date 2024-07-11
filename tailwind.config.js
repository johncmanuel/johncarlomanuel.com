// const daisyui = require("daisyui");

const personaThreeReloadPalette = {
  // "blue-1": "#6d9ac7",
  "blue-1": "#14c3fc",
  "blue-2": "#1269cc",
  "blue-3": "#51eefc",
  "blue-4": "#000229",
  "pure-white": "#ffffff",
  "grey-1": "#303030"
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  blocklist: ["ring"],
  theme: {
    extend: {
      colors: personaThreeReloadPalette
    }
    // container: {
    //   center: true,
    //   padding: {
    //     default: "1rem"
    //   }
    // }
  },
  darkMode: "selector"
  // plugins: [daisyui],
  // coffee best theme frl
  // daisyui: { themes: ["fantasy", "coffee"] }
};
