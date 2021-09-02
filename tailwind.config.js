const colors = require('tailwindcss/colors');

module.exports = {
  // prefix: 't-', /* BEM utility scoping */
  important: true,
  darkMode: 'media',
  purge: ['./.eleventy.js', './src/**/*.html', './src/**/*.md', './src/**/*.json', './lib/shortcodes/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Inter Var', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    screens: {
      // media query ems are based on browser setting font size value, NOT :root/html
      sm: '40em', // 640px
      md: '64em', // 1024px
      lg: '80em', // 1280px
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      blue: colors.blue,
      white: colors.white,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      primary: 'var(--color-primary)',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
    extend: {
      screens: {
        print: { raw: 'print' },
        // => @media  print { ... }
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  corePlugins: {},
  plugins: [],
};
