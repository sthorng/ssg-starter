module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./src/styles/tailwind.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
