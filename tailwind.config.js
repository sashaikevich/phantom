/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*", "./public/**/*.html"],
  theme: {
    // spacing: {
    //   default from: https://tailwindcss.com/docs/customizing-spacing
    // }
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        primary: "rgb(245 241 239)",
        highlight: "rgb(82 115 232)",
        hover: "rgb(59 86 186)",
        success: "rgb(26 137 100)",
        error: "rgb(148 27 16)",
        info: {
          light: "rgb(235 250 255)",
          DEFAULT: "rgb(13 134 171)",
        },
        heading: {
          primary: "rgba(30 30 31)",
          DEFAULT: "red" /* to see mistakes */,
        },
      },
      fontFamily: {
        sans: ["Qanelas", "sans-serif"],
      },
      fontSize: {
        body: "16px",
        "body-m": ["14px", "20px"],
        "heading-m": ["24px", "32px"],
      },
    },
    container: {
      padding: "1rem",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
      addVariant("sibling", "& + *")
    },
  ],
  prefix: "tw-",
}
