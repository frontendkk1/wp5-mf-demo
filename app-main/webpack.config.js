const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    output: {
        publicPath: "http://localhost:3000/",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app_main",
            library: { type: "var", name: "app_main" },
            filename: "remoteEntry.js",
            remotes: {
                app_share: "app_share@http://localhost:3001/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
