module.exports = (eleventyConfig) => {
  // Markdown
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const markdownItFootnote = require("markdown-it-footnote");
  const CleanCSS = require("clean-css");

  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItFootnote);

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

  // Filters
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "www",
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
