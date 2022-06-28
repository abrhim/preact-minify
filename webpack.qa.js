const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { commonConfig, publicPaths } = require("./webpack.common.js");

module.exports = merge(commonConfig, {
    devtool: "source-map",
    output: {
        publicPath: publicPaths.QA,
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     API_URL: JSON.stringify(
        //         "https://commerce-int.adobe.io/search/graphql",
        //     ),
        // }),
    ],
});
