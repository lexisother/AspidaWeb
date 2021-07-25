function resolvePlugin(plugin, options) {
    return {
        resolve: plugin,
        options: options
    };
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    flags: {PRESERVE_WEBPACK_CACHE: true},
    plugins: [
        resolvePlugin("gatsby-plugin-react-helmet"),
        resolvePlugin("gatsby-plugin-sass", {
            sassOptions: {
                includePaths: ["src/css"]
            }
        }),
        resolvePlugin("gatsby-transformer-json"),
        resolvePlugin("gatsby-source-filesystem", {
            name: "data",
            path: `${__dirname}/data/`,
            typeName: `Json`
        }),
        resolvePlugin("gatsby-plugin-typegen")
    ]
};
