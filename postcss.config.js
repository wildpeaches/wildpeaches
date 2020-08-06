/* https://flaviocopes.com/tailwind-setup/ */

const purgecss = require('@fullhuman/postcss-purgecss');

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-extend-rule'),
    require('postcss-custom-selectors'),
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: ['./www/**/*.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
  ],
};