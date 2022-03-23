require('dotenv').config();
const CleanCSS = require('clean-css');

const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItImageLazyLoading = require('markdown-it-image-lazy-loading');
const markdownItKatex = require('@iktakahiro/markdown-it-katex');

const collections = require('./src/utils/collections');

const betterSlugFilter = require('./src/filters/better-slug');
const dateFilter = require('./src/filters/date-filter');
const dumpFilter = require('@jamshop/eleventy-filter-dump');
const markdownFilter = require('./src/filters/markdown-filter');
const statFilter = require('./src/filters/stat-filter');
const w3DateFilter = require('./src/filters/w3-date-filter');

const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = (eleventyConfig) => {
  // Markdown
  const options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };
  const markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItFootnote)
    .use(markdownItKatex, { strict: false })
    .use(markdownItImageLazyLoading)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        symbol: '#',
        class: 'text-gray-300 border-b-4 border-transparent  hover:border-gray-200 hover:text-gray-500',
        placement: 'before'
      }),
    });

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('src/assets/styles');

  // Use markdownIt with markdownItAttrs for markdown parsing
  // Allows for classes and id's to be applied in markdown without
  // HTML
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.setDataDeepMerge(true);

  // CSS needs to be compiled with `npm run css`
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/scripts');
  eleventyConfig.addPassthroughCopy('src/assets/vectors');
  eleventyConfig.addPassthroughCopy('src/assets/styles/style.min.css');
  eleventyConfig.addPassthroughCopy({ 'src/assets/siteroot': '/' });
  eleventyConfig.addPassthroughCopy({ 'node_modules/katex/dist/fonts': 'assets/fonts' });

  // Collections
  Object.entries(collections).map(([key, value]) => {
    eleventyConfig.addCollection(key, value);
  });

  // Browsersync Configuration
  eleventyConfig.setBrowserSyncConfig({
    // Disable ghostMode so it does not interfere
    // with syncing in Sizzy browser.
    ghostMode: false,
  });

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  // Shortcodes
  eleventyConfig.addShortcode('pullquote', require('./lib/shortcodes/pullquote.js'));

  eleventyConfig.addPairedShortcode('letter', function (contents) {
    const parsedMarkDown = markdownLib.render(contents);
    const html = `
    <div class="full-bleed">
      <div id="letter" class="text-sm text-gray-00 md:letter w-max-800">
      ${parsedMarkDown}
      </div>
    </div>`;
    return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
  });

  eleventyConfig.addPairedShortcode('table', function (contents) {
    const parsedMarkDown = markdownLib.render(contents);
    const html = `
    <div class="table-wrapper full-bleed my-16">
      <div class="w-max-900">
        ${parsedMarkDown}
      </div>  
    </div>`;
    return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
  });

  // Filters
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('dump', dumpFilter);
  eleventyConfig.addFilter('markdownFilter', markdownFilter);
  eleventyConfig.addFilter('slug', betterSlugFilter);
  eleventyConfig.addFilter('stat', statFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: '_includes',
      layouts: '_layouts',
      input: 'src',
      output: 'www',
    },
    templateFormats: ['md', 'html', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
