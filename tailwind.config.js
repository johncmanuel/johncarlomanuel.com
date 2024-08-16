const personaThreeReloadPalette = {
  // "blue-1": "#6d9ac7",
  "blue-1": "#14c3fc",
  "blue-2": "#1269cc",
  "blue-3": "#51eefc",
  "blue-4": "#000229",
  "pure-white": "#ffffff",
  "grey-1": "#303030",
  "green-1": "#3af903",
  "green-2": "#48ff03"
};

// Utilized https://www.csshero.org/mesher/ to create these gradients.
const darkHourGradient = {
  "dark-hour-gradient": `
          radial-gradient(at 80% 7%, hsla(124,55%,20%,1) 0px, transparent 50%),
          radial-gradient(at 40% 20%, hsla(104,62%,17%,1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(99,31%,9%,1) 0px, transparent 50%)
        `
};

const darkHour = {
  "dark-hour": "hsla(99,52%,10%,1)"
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  blocklist: ["ring"],
  theme: {
    extend: {
      colors: personaThreeReloadPalette,
      backgroundImage: darkHourGradient,
      backgroundColor: darkHour
    }
    // container: {
    //   center: true,
    //   padding: {
    //     default: "1rem"
    //   }
    // }
  },
  darkMode: "selector"
};
