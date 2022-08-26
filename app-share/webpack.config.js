const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    output: {
        publicPath: "http://localhost:3001/",
    },
    devServer: {
        port: 3001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app_share",
            library: { type: "var", name: "app_share" },
            filename: "remoteEntry.js",
            exposes: {
                "./Sum": "./src/Sum",
            },
        }),
        new HtmlWebpackPlugin(),
    ],
};
