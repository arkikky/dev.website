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
        primary: "#015AFD",
        secondary: "#FED220",
        success: "#188035",
        danger: "#D64A4A",
        warning: "#F2B124",
        info: "#9CADD3",
        light: "#F8F8F8",
        dark: "#241B1B",
        black: {
          50: "#43464D",
          100: "#241B1B",
          300: "#030C1C",
          400: "#585555",
          500: "#222222",
          800: "#282525",
          900: "#000000",
        },
        gray: {
          50: "#E6E6E6",
          100: "#E0E0E0",
          200: "#E1E1E1",
          300: "#778090",
          400: "#7C8493",
          600: "#273A5A",
          700: "#89919D",
          800: "#595959",
        },
        blue: {
          50: "#F2F5F9",
          100: "#D3D9E3",
          200: "#BBC9E8",
          300: "#9CADD3",
          400: "#2458F4",
          500: "#2B4A86",
          600: "#1E386B",
          700: "#192A4B",
          900: "#0043DE",
        },
        red: {
          50: "#FFEAEA",
          100: "#D64A4A",
        },
        green: {
          50: "#E4FFEC",
          100: "#188035",
        },
        yellow: {
          50: "#FEF7EA",
          100: "#FBD47F",
          200: "#FFBE32",
          300: "#F2B124",
          400: "#E7AB2B",
          500: "#FED220",
          600: "#FFC600",
        },
      },
      fontFamily: {
        bevietnamPro: [
          "Be Vietnam Pro",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        "bevietnam-pro": [
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
      },
      zIndex: {
        px: "1",
        0.5: "2",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        xs: "252",
        sm: "558",
        base: "1024",
        lg: "1528",
        xl: "2045",
        "2xl": "2577",
        "3xl": "3051",
        "4xl": "3537",
        "5xl": "4031",
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
          "2xl": "1276px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 7.5s linear infinite",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms")({
      strategy: "class", // only generate global styles
    }),
    // Or with a custom prefix:
    require("@headlessui/tailwindcss")({ prefix: "ui" }),

    // Variant's
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    },

    // Typography
    ({ addBase, theme }) => {
      addBase({
        ".h2": {
          fontFamily: theme("fontFamily.bevietnamPro"),
          fontSize: theme("fontSize.2xl"),
          lineHeight: theme("lineHeight.8"),
          fontWeight: theme("fontWeight.normal"),

          "@screen sm": [
            {
              fontSize: "40px",
              lineHeight: "54px",
            },
          ],
        },
        ".body": {
          fontFamily: theme("fontFamily.bevietnamPro"),
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.6"),
          fontWeight: theme("fontWeight.normal"),

          "@screen sm": [
            {
              fontSize: theme("fontSize.2xl"),
              lineHeight: theme("lineHeight.8"),
            },
          ],
        },
        ".body-sm": {
          fontFamily: theme("fontFamily.bevietnamPro"),
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.6"),
          fontWeight: theme("fontWeight.normal"),

          "@screen sm": [
            {
              fontSize: theme("fontSize.xl"),
              lineHeight: theme("lineHeight.8"),
            },
          ],
        },
      });
    },

    // Buttons
    ({ addComponents, theme }) => {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme("borderRadius.sm"),
          fontFamily: theme("fontFamily.bevietnam/pro"),
          fontSize: theme("fontSize.sm"),
          fontWeight: "700",
          lineHeight: theme("lineHeight.normal"),
          letterSpacing: theme("letterSpacing.wide"),
          outline: "none",
          position: "relative",
          paddingTop: theme("padding.4"),
          paddingBottom: theme("padding.4"),
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
          width: theme("width.max"),
        },
        ".btn-sm": {
          fontSize: theme("fontSize.xs"),
          paddingTop: theme("padding.2"),
          paddingBottom: theme("padding.2"),
          paddingLeft: theme("padding.2"),
          paddingRight: theme("padding.2"),
        },
        ".btn-lg": {
          fontSize: theme("fontSize.sm"),
          paddingTop: theme("padding.4"),
          paddingBottom: theme("padding.4"),
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
        },
        ".btn-pill": {
          borderRadius: theme("borderRadius.full"),
        },
        ".btn-square": {
          borderRadius: theme("borderRadius.none"),
        },
        ".btn-block": {
          width: theme("width.full"),
        },
        ".btn-max": {
          width: theme("width.max"),
        },
      });
    },

    // Buttons (Variants)
    ({ addComponents, theme }) => {
      addComponents({
        ".btn-primary": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.primary"),
        },
        ".btn-secondary": {
          color: theme("textColor.black.900"),
          backgroundColor: theme("backgroundColor.secondary"),
        },
      });
    },
  ],
};
