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
      screens: {
        xs: { max: '420px' },
        '3xl': '1600px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#015AFD',
        primaryBlue: '#005AFF',
        primaryRed: '#ED4F35',
        primaryYellow: '#F3D747',
        primaryDark: '#111928',
        secondary: '#F3D747',
        success: '#188035',
        danger: '#D64A4A',
        warning: '#F2B124',
        info: '#9CADD3',
        dark: '#1F1F1F',
        black: {
          50: '#43464D',
          100: '#241B1B',
          600: '#545454',
          700: '#3B3B3B',
          800: '#2B2B2B',
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
          800: '#2ACDDE',
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
        cyan: {
          400: '#2ACDDE',
        },
      },
      fontFamily: {
        bevietnamPro: [
          'Be Vietnam Pro',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        boren: ['Boren', ...defaultTheme.fontFamily.sans],
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
          DEFAULT: '16px',
          sm: '0px',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),

    // @variant
    ({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('supports-grid', '@supports (display: grid)');
    },

    // @container
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
            maxWidth: '732px',
          },
          '@screen lg': {
            maxWidth: '948px',
          },
          '@screen xl': {
            maxWidth: '1295px',
          },
          '@screen 2xl': {
            maxWidth: '1324px',
          },
        },
      });
    },

    // @background(Gradient)
    ({ addUtilities }) => {
      addUtilities({
        '.bg-gradient-primary': {
          backgroundImage:
            'linear-gradient(to right, #1F1F1F 3%, #005AFF 39%, #A0CCF7 65%, #ED4F35 98% ,#ED4F35 100%)',
        },
        '.bg-gradient-primary45': {
          backgroundImage:
            'linear-gradient(145deg, #1F1F1F 3%, #005AFF 39%, #A0CCF7 65%, #ED4F35 98% ,#ED4F35 100%)',
        },
        '.bgGradient-Primary180': {
          backgroundImage:
            'linear-gradient(180deg, rgba(31,31,31,1) 9%, rgba(24,44,81,1) 17%, rgba(19,53,116,1) 21%, rgba(4,82,225,1) 33%, rgba(0,90,255,1) 37%, rgba(144,193,248,1) 64%, rgba(160,204,247,1) 67%, rgba(183,166,188,1) 79%, rgba(237,79,53,1) 100%)',
        },
        '.bg-regular': {
          backgroundImage:
            'linear-gradient(180deg, #022159 30.46%, #005AFF 102.99%)',
        },
        '.bg-regular45': {
          backgroundImage:
            'linear-gradient(150deg, #022159 30.46%, #005AFF 102.99%)',
        },
        '.bg-regular45_Sticky': {
          backgroundImage:
            'linear-gradient(180deg, #022159 30.46%, #022159 102.99%)',
        },
        '.bg-vip': {
          backgroundImage:
            'linear-gradient(180deg, #D38350 17.54%, #ED4F35 100.53%)',
        },
        '.bg-vipV2': {
          backgroundImage:
            'linear-gradient(180deg, #FF8335 2.54%, #ED4F35 100%)',
        },
        '.bg-vip45': {
          backgroundImage:
            'linear-gradient(150deg, #D38350 17.54%, #ED4F35 100.53%)',
        },
        '.bg-vip45_Sticky': {
          backgroundImage:
            'linear-gradient(180deg, #D38350 30.46%, #D38350 102.99%)',
        },
      });
    },
  ],
};
