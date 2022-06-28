const path = require("path");
const pkg = require("./package.json");
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const createStyledComponentsTransformer =
// require("typescript-plugin-styled-components").default;

// const styledComponentsTransformer = createStyledComponentsTransformer();

const banner = `${pkg.name}@v${pkg.version}`;
const MAJOR_VERSION = `v${pkg.version.split(".")[0]}`;

const publicPaths = {
    DEV: `http://localhost:1234/${MAJOR_VERSION}/`,
    QA: `https://searchautocompleteqa.magento-datasolutions.com/${MAJOR_VERSION}/`,
    PROD: `https://livesearch-autocomplete.magento-ds.com//${MAJOR_VERSION}/`,
};

const commonConfig = {
    target: "web",
    mode: "development",
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        filename: "file.js",
        publicPath: "",
        path: path.resolve(__dirname, "public"),
        libraryTarget: "umd",
        globalObject: "self",
    },
    resolve: {
        modules: ["src", "node_modules"],
        alias: {
            "components": path.resolve(__dirname, "src/components/"),
            "styles": path.resolve(__dirname, "src/styles/"),
            "utils": path.resolve(__dirname, "src/utils/"),
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat", // Must be below test-utils
            "react/jsx-runtime": "preact/jsx-runtime",
            "react": "preact/compat",
            // Add aliases here if needed -->  `alias: path.resolve(__dirname, "src/alias-path"),`
        },
        extensions: [
            ".tsx",
            ".ts",
            ".js",
            ".jsx",
            ".svg",
            ".css",
            ".json",
            ".mdx",
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                type: "javascript/auto",
                loader: "ts-loader",
                exclude: /node_modules/,
                // options: {
                //     getCustomTransformers: () => ({
                //         before: [styledComponentsTransformer],
                //     }),
                // },
            },
            {
                enforce: "pre",
                type: "javascript/auto",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                type: "javascript/auto",
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                loader: "url-loader",
            },
        ],
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     cleanAfterEveryBuildPatterns: ["*.LICENSE.txt"],
        // }),
        // new webpack.BannerPlugin(banner),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css",
        // }),
    ],
    devServer: {
        port: 1234,
        openPage: "index.html",
        stats: "errors-only",
        hot: true,
        writeToDisk: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
                "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },

    performance: {
        hints: false,
    },
    stats: {
        modules: false,
        warnings: false,
    },
    // optimization: {
    //     minimizer: [
    //         new TerserPlugin({
    //             extractComments: {
    //                 banner: banner,
    //             },
    //         }),
    //     ],
    // },
};

module.exports = { commonConfig, publicPaths };
