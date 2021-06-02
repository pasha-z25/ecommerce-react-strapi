const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    liveReload: false
  },
  // entry: './src/main.js',
  entry: ['react-hot-loader/patch', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '~src': path.resolve(__dirname, 'src/'),
      '~utils': path.resolve(__dirname, 'src/utils/'),
      '~assets': path.resolve(__dirname, 'src/assets/'),
      '~scenes': path.resolve(__dirname, 'src/scenes/'),
      '~styles': path.resolve(__dirname, 'src/styles/'),
      '~components': path.resolve(__dirname, 'src/components/')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new MiniCssExtractPlugin({
      filename: 'common.css'
    }),
    new HtmlWebpackPlugin({
      title: 'Custom React Application',
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      },
      inject: false,
      templateContent: ({ htmlWebpackPlugin }) => `
        <!DOCTYPE html>
        <html lang="en">
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
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
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
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /^((?!\.module).)*css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
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
                localIdentName: '[local]__[sha1:hash:hex:10]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        // test: /^((?!\.module).)*(sass|scss)$/i,
        test: /^((?!\.module).)*s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = config
