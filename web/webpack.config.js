const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    devtool: 'eval-source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'common.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            },
                        }
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /^((?!\.module).)*css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.module\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]__[sha1:hash:hex:7]'
                            },
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /^((?!\.module).)*s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },
}

module.exports = config;