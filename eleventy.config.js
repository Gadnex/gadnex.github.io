import Shiki from "@shikijs/markdown-it";
import MarkdownIt from "markdown-it";

export default async function (eleventyConfig) {

    eleventyConfig.setInputDirectory("src");

    eleventyConfig.setTemplateFormats([
        "html",
        "md",
        "jpg",
        "png",
        "svg"
    ]);

    eleventyConfig.addPassthroughCopy("src/*/*.css");
    eleventyConfig.addPassthroughCopy("src/*/*.js");

    const options = {
        html: true,
        breaks: true,
        linkify: true,
    };

    let markdownLib = MarkdownIt(options)
        .use(
            await Shiki({
                themes: {
                    light: 'github-dark',
                    dark: 'github-dark',
                }
            }),
        );

    eleventyConfig.setLibrary("md", markdownLib);
};