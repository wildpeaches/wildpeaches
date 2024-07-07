/* https://flaviocopes.com/tailwind-setup/ */

const cssnano = require('cssnano');
const postcssLogical = require('postcss-logical');
const postcssEasyImport = require('postcss-easy-import');
const postcssExtendRule = require('postcss-extend-rule');
const postcssCustomSelectors = require('postcss-custom-selectors');
const postcssCustomMedia = require('postcss-custom-media');
const postcssMediaMinmax = require('postcss-media-minmax');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssLogical({ dir: 'ltr' }),
    postcssEasyImport(),
    postcssExtendRule(),
    postcssCustomSelectors(),
    postcssCustomMedia(),
    postcssMediaMinmax(),
    tailwindcss(),
    process.env.NODE_ENV === 'production' ? postcssPresetEnv({ stage: 1 }) && cssnano({ preset: 'default' }) : null,
  ],
};
