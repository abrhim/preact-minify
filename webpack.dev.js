const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { commonConfig, publicPaths } = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: publicPaths.DEV,
    },
    devServer: {
        contentBase: "./dist",
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: "Search Storefront Autocomplete",
            template: __dirname + "/public/index.html",
            inject: "body",
            filename: "index.html",
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(
                "https://commerce-int.adobe.io/search/graphql",
            ),
        }),
    ],
});
