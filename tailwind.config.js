const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Signika: ['"Signika"', ...defaultTheme.fontFamily.sans],
        pressStart: ['"Press Start 2P"', "cursive"],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        glow: [
          "0 0 5px #03e9f4",
          "0 0 25px #03e9f4",
          "0 0 50px #03e9f4",
          "0 0 100px #03e9f4",
        ],
      },
    },
  },
  plugins: [],
};
