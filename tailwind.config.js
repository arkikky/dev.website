/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./node_modules/preline/dist/*.js",
    "./src/pages/**/*.{js,ts}",
    "./src/components/**/*.{js,ts}",
    "./src/layouts/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#DEE813",
        secondary: "#2458F4",
        black: {
          50: "#43464D",
          100: "#241B1B",
          300: "#030C1C",
          400: "#585555",
          500: "#222222",
          800: "#282525",
          900: "#000000",
        },
      },
      fontFamily: {
        staraSemiBold: [
          "Stara SemiBold",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        staraBold: [
          "Stara Bold",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        staraExtraBold: [
          "Stara ExtraBold",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        bevietnamPro: [
          "Be Vietnam Pro",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      lineHeight: {
        initial: "initial",
        inherit: "inherit",
        unset: "unset",
      },
      letterSpacing: {
        wide: "0.015em",
        tight: "-0.03em",
      },
      spacing: {
        4.5: "18px",
        13: "52px",
        14: "54px",
        15: "56px",
        16: "60px",
        17: "64px",
        18: "68px",
        19: "72px",
        22: "86px",
        34: "136px",
        fill: "-webkit-fill-available",
      },
      zIndex: {
        px: "1",
        0.5: "2",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        sm: "500",
        base: "1028",
        lg: "1524",
        xl: "2028",
        primary: "9999",
      },
      screens: {
        xs: "370px",
        small: "423px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "0px",
        },
        screens: {
          sm: "640px",
          md: "720px",
          lg: "958px",
          xl: "1149px",
          "2xl": "1295px",
        },
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("tailwind-scrollbar-hide"),

    // @variant
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    },
  ],
};
