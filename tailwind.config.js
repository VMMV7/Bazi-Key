// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{vue,js,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8224e3",
        theme: "#8224e3",
        black: "rgb(51, 51, 51)",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1520px",
        },
      },
      screens: {
        md: "790px",
      },
      padding: {
        xs: "4px",
        sm: "8px",
        ms: "10px",
        md: "16px",
        lg: "24px",
        xl: "36px",
        "2xl": "52px",
      },
      margin: {
        xs: "4px",
        sm: "8px",
        ms: "10px",
        md: "16px",
        lg: "24px",
        xl: "36px",
        "2xl": "52px",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      md: ".90rem",
      lg: "1.2rem",
      xl: "1.4rem",
      "2xl": "1.6rem",
      "3xl": "1.8rem",
      "4xl": "2rem",
      "5xl": "2.2rem",
      "6xl": "2.6rem",
      "7xl": "3rem",
      "8xl": "4rem",
    },
  },
};
