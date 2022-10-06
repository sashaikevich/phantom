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
        "highlight-muted": "rgb(236 240 254)",
        hover: "rgb(59 86 186)",
        success: "rgb(26 137 100)",
        error: "rgb(148 27 16)",
        info: {
          DEFAULT: "rgb(13 134 171)",
          light: "rgb(235 250 255)",
        },
        heading: {
          DEFAULT: "rgb(30 30 31)",
          primary: "rgb(30 30 31)",
          secondary: "rgb(115 112 110)",
        },
        body: {
          secondary: "rgb(115 112 110)",
          tertiary: "rgb(179 175 171)",
        },
        warning: {
          DEFAULT: "rgb(233 130 12)",
          light: "rgba(255 250 235)",
        },
        brdr: "rgb(217 212 208)",
      },
      fontFamily: {
        sans: ["Qanelas", "sans-serif"],
      },
      fontSize: {
        body: "16px",
        "body-s": ["12px", "16px"],
        "body-m": ["14px", "20px"],
        "body-l": ["16px", "24px"],
        "heading-s": ["20px", "24px"],
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
