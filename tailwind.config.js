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
    container: false
  },
  plugins: [
    function( {addComponents} ){
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: '0 auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen xxl': {
            maxWidth: '1680px',
          },
        },
      });
    }
  ],
};
