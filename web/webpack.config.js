const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'eval-source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'common.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Custom React Application',
            'meta': {
                'viewport': 'width=device-width, initial-scale=1',
            },
            inject: false,
            templateContent: ({htmlWebpackPlugin}) => `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8"/>
                        <title>${htmlWebpackPlugin.options.title}</title>
                        ${htmlWebpackPlugin.tags.headTags}
                    </head>
                    <body>
                        <div id="app"></div>
                        ${htmlWebpackPlugin.tags.bodyTags}
                    </body>
                </html>
              `
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