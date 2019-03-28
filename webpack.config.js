/* eslint-disable no-undef */
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve('src/'),
  entry: {
    client: './index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './[name].[hash:8].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
}