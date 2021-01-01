/* https://flaviocopes.com/tailwind-setup/ */

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-extend-rule'),
    require('postcss-custom-selectors'),
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('postcss-preset-env')({ stage: 1 }) : null,
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null
  ],
};