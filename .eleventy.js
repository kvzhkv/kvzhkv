module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/favicon.ico": "favicon.ico",
        "src/CNAME": "CNAME",
    });
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "templates",
            htmlTemplateEngine: "njk",
        },
    };
};
