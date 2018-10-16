const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['@babel/polyfill','./src/index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  devServer: {
   hot: true,
   port: 5000,
   historyApiFallback: true,
 },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      },

      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/i,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: './public/'}
    ])
  ]
}
