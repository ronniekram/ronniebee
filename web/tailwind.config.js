const { fontFamily } = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: `currentColor`,
        transparent: `transparent`,
        black: `black`,
        white: `#FFFDF5`,
        grey: {
          100: `#EBEBEB`,
          200: `#D6D6D6`,
          300: `#C2C2C2`,
          400: `#525252`,
          500: `#3D3D3D`,
          600: `#212121`,
        },
        teal: {
          100: `#F1F6F9`,
          200: `#D5E4EC`,
          300: `#ABC9D8`,
          400: `#8FB6CC`,
          500: `#5792B2`,
          600: `#40718C`,
        },
        red: {
          100: `#FAF0F0`,
          200: `#F0D1D1`,
          300: `#D17575`,
          400: `#C24747`,
          500: `#A63838`,
          600: `#872D2D`,
        },
        yellow: {
          100: `#FFFCEB`,
          200: `#FFF9D6`,
          300: `#FFF6C2`,
          400: `#FFF099`,
          500: `#FFED85`,
          600: `#FFE862`,
        },
      },
      fontSize: {
        "2xs": [`11px`, `14.3px`],
        "xs": [`12px`, `24px`],
        "sm": [`14px`, `22.4px`],
        "base": [`16px`, `25.6px`],
        "lg": [`18px`, `28.8px`],
        "xl": [`20px`, `35px`],
        "2xl": [`24px`, `36px`],
        "3xl": [`32px`, `39px`],
        "4xl": [`36px`, `43.2px`],
        "5xl": [`48px`, `57.6px`],
        "6xl": [`60px`, `57px`],
        "7xl": [`72px`, `68.4px`],
        "8xl": [`96px`, `91.2px`],
        "9xl": [`108px`, `102.6px`],
        "10xl": [`160px`, `152px`],
      },
      fontWeight: {
        xthin: 100,
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semi: 600,
        bold: 700,
        xbold: 800,
        black: 900,
      },
      fontFamily: {
        sans: [`var(--sans)`],
        display: [`var(--display)`],
        mono: [`var(--mono)`],
      },
      dropShadow: {
        sm: `0px, 2px rgba(33, 33, 33, 0.15)`,
        md: `0px, 4px rgba(33, 33, 33, 0.15)`,
        lg: `0px, 8px rgba(33, 33, 33, 0.15)`,
        xl: `0px, 16px rgba(33, 33, 33, 0.15)`,
      },
    },
  },
};
