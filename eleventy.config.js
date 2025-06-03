module.exports = function (eleventyConfig) {

    eleventyConfig.setInputDirectory("src");

    eleventyConfig.setTemplateFormats([
        "html",
        "md",
        "jpg",
        "png",
        "svg"
    ]);

    eleventyConfig.addPassthroughCopy("src/*.css");
    eleventyConfig.addPassthroughCopy("src/*.js");
};