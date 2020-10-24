const dateFilter = require("./src/filters/date-filter");
const w3DateFilter = require("./src/filters/w3-date-filter");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItKatex = require("@iktakahiro/markdown-it-katex");
const markdownItLazyLoad = require("markdown-it-image-lazy-loading");
const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItImageLazyLoading = require("markdown-it-image-lazy-loading");

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
    .use(markdownItKatex)
    .use(markdownItImageLazyLoading);

  // Use markdownIt with markdownItAttrs for markdown parsing
  // Allows for classes and id's to be applied in markdown without
  // HTML
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.setDataDeepMerge(true);

  // CSS needs to be compiled with `npm run css`
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/styles/**/*.min.css");
  // eleventyConfig.addPassthroughCopy('src/_content/portfolio/**/*.{png|gif|jpg|webp}');
  eleventyConfig.addPassthroughCopy({ "src/assets/siteroot": "/" });

  //Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Add Filters
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("dateFilter", dateFilter);
  eleventyConfig.addFilter("w3DateFilter", w3DateFilter);

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "www",
    },
    templateFormats: ["md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
