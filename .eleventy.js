module.exports = (eleventyConfig) => {
  // Markdown
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const markdownItFootnote = require("markdown-it-footnote");
  const markdownItKatex = require("@iktakahiro/markdown-it-katex");
  const CleanCSS = require("clean-css");
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItFootnote)
    .use(markdownItKatex);

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

  // Filters
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("dateFormat", function (value) {
    const monthNames = [
      "Jan",
      "Feb",
      "Ma",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      monthNames[value.getMonth()]
    } ${value.getDate()}, ${value.getFullYear()}`;
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
