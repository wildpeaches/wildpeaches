const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  purge: ['./www/**/*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1280px'
    },
    colors: {
      gray: colors.warmGray,
      blue: colors.blue,
      white: colors.white,
      green: colors.green,
      red: colors.red,
      teal: colors.teal
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
    }
  }, 
  corePlugins: {
  },
  plugins: [
  ],
};
