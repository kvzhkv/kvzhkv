const { readFileSync } = require("fs");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/styles/");
    eleventyConfig.addPassthroughCopy({
        "src/assets": "/",
    });
    eleventyConfig.addShortcode("inlineSvg", iconName =>
        readFileSync(`./src/icons/${iconName}.svg`).toString(),
    );
    eleventyConfig.addPairedShortcode(
        "block",
        (children, className) => `<div class="${className}">${children}</div>`,
    );
    eleventyConfig.addFilter(
        "cssmin",
        code => new CleanCSS({}).minify(code).styles,
    );
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "data",
            includes: "templates",
            htmlTemplateEngine: "njk",
        },
    };
};
