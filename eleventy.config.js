module.exports = function (eleventyConfig) {

    eleventyConfig.setInputDirectory("src");

    eleventyConfig.setTemplateFormats([
        "html",
        "md",
        "jpg",
        "png"
    ]);

    eleventyConfig.addPassthroughCopy("src/*.css");
};