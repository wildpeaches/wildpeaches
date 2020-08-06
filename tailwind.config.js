module.exports = {
  important: true,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1680px'
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
  variants: {}, 
  corePlugins: {
  },
  plugins: [
  ],
};
