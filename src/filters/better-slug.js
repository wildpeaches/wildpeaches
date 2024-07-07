const slugify = require('slugify');

const escapeStringRegexp = require('escape-string-regexp');

const removals = '<>.~":/?#[]{}()@!$\'()*+,;=';

function betterSlug(input, options = {}) {
  // Extend default configuration
  const config = {
    ...{
      extensions: {},
      removals,
    },
    ...options,
  };

  if (config.extensions) {
    slugify.extend(config.extensions);
  }

  return slugify(input, {
    replacement: '-',
    remove: new RegExp(`[${escapeStringRegexp(config.removals)}]`, 'g'),
    lower: true,
  });
}

module.exports = (value) => {
  const slug = betterSlug(value);
  return slug;
};
