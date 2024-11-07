/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './node_modules/preline/dist/*.js',
    './src/pages/**/*.{js,ts}',
    './src/components/**/*.{js,ts}',
    './src/layouts/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#015AFD',
        secondary: '#FED220',
        success: '#188035',
        danger: '#D64A4A',
        warning: '#F2B124',
        info: '#9CADD3',
        black: {
          50: '#43464D',
          100: '#241B1B',
          300: '#030C1C',
          400: '#585555',
          500: '#222222',
          800: '#282525',
          900: '#000000',
        },
        blue: {
          50: '#F2F5F9',
          100: '#D3D9E3',
          200: '#BBC9E8',
          300: '#9CADD3',
          400: '#2458F4',
        },
        red: {
          50: '#FFEAEA',
          100: '#D64A4A',
        },
        green: {
          50: '#E4FFEC',
          100: '#188035',
        },
        yellow: {
          50: '#FEF7EA',
          100: '#FBD47F',
          200: '#FFBE32',
          300: '#F2B124',
          400: '#E7AB2B',
          500: '#FED220',
          600: '#FFC600',
        },
      },
      fontFamily: {
        bevietnamPro: [
          'Be Vietnam Pro',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      lineHeight: {
        initial: 'initial',
        inherit: 'inherit',
        unset: 'unset',
      },
      letterSpacing: {
        wide: '0.015em',
        tight: '-0.03em',
      },
      spacing: {
        4.5: '18px',
        5.5: '22px',
        7.5: '30px',
        8.5: '34px',
        9.5: '38px',
        13: '52px',
        14: '54px',
        15: '56px',
        16: '60px',
        17: '64px',
        18: '68px',
        19: '72px',
        22: '86px',
        34: '136px',
        fill: '-webkit-fill-available',
      },
      zIndex: {
        px: '1',
        0.5: '2',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        sm: '500',
        base: '1028',
        lg: '1524',
        xl: '2028',
        primary: '9999',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
          sm: '0px',
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate global styles
    }),
    require('@tailwindcss/typography'),

    // @variant
    ({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('supports-grid', '@supports (display: grid)');
    },

    ({ addComponents }) => {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '958px',
          },
          '@screen xl': {
            maxWidth: '1264px',
          },
          '@screen 2xl': {
            maxWidth: '1304px',
          },
        },
      });
    },
  ],
};
