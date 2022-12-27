const path = require('path');
const HtmlExtractPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/authenticate.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlExtractPlugin({
            template: './public/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    }
}