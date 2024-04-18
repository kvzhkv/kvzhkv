module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/assets": "/",
    });
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
