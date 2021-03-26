const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../../tailwind.config.js');

const cssConfig = resolveConfig(tailwindConfig);

module.exports = {
  lang: 'en-US',
  name: 'Wild Peaches',
  url: 'https://wildpeaches.xyz',
  tagline: 'Mind-sized STEM ideas and experiments, beyond the textbook.',
  imgDir: '/assets/img/',
  themeColor: cssConfig.theme.colors.primary,
  backgroundColor: cssConfig.theme.colors.backgroundColor,

  authors: [
    {
      firstName: 'Jan',
      lastName: 'De Wilde',
      url: 'https://jandewil.de',
      email: 'hi@jandewil.de',
      avatar:
        'https://gravatar.com/avatar/0467288626c0cfc671200f96c34dc192?s=512',
      social: {
        github: 'https://github.com/jandw',
        twitter: 'https://twitter.com/jandw',
      },
    },
    {
      firstName: 'John',
      lastName: 'Peach',
      email: 'john.x.peach@gmail.com',
      social: {
        github: 'https://github.com/xerxeszorgon',
      },
    },
  ],
};
