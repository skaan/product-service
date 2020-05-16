/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  return {
    mode: options.mode,
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../public"),
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"]
    },
    devtool: "source-map",
    devServer: {
      hot: true,
      historyApiFallback: true,
      contentBase: './dist',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'eslint-loader',
          enforce: 'pre'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(eot|woff|woff2|ttf)$/,
          loaders: 'url-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./index.template.html')
      }),
      new CleanWebpackPlugin(),
    ],
  }
};