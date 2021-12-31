module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./src/styles/tailwind.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
