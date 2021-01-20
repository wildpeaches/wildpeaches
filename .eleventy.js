require("dotenv").config();
const dateFilter = require("./src/filters/date-filter");
const w3DateFilter = require("./src/filters/w3-date-filter");
const dumpFilter = require("@jamshop/eleventy-filter-dump");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItKatex = require("@iktakahiro/markdown-it-katex");
const markdownItImageLazyLoading = require("markdown-it-image-lazy-loading");
const markdownItAnchor = require("markdown-it-anchor");
const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

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
      permalink: true,
      permalinkSymbol: "#",
      permalinkClass: "text-gray-400 border-b-0  hover:border-b-2",
      permalinkBefore: true,
    });

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_tmp/style.css");

  // Use markdownIt with markdownItAttrs for markdown parsing
  // Allows for classes and id's to be applied in markdown without
  // HTML
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.setDataDeepMerge(true);

  // CSS needs to be compiled with `npm run css`
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/styles/style.min.css");
  eleventyConfig.addPassthroughCopy({ "src/assets/siteroot": "/" });

  //Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  // Shortcodes
  eleventyConfig.addNunjucksShortcode(
    "pullquote",
    require("./lib/shortcodes/pullquote.js")
  );

  // Add Filters
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("dateFilter", dateFilter);
  eleventyConfig.addFilter("w3DateFilter", w3DateFilter);
  eleventyConfig.addFilter("dump", dumpFilter);

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "www",
    },
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
