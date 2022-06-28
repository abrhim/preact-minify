const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { commonConfig, publicPaths } = require("./webpack.common.js");

module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        publicPath: publicPaths.PROD,
    },
    plugins: [
        new webpack.DefinePlugin({
            API_URL: JSON.stringify("https://commerce.adobe.io/search/graphql"),
        }),
    ],
    optimization: {
        minimize: true,
    },
});
