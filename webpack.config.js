"use strict";

var path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss?$/,
        include: path.join(__dirname, 'src', 'styles'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.join(__dirname, 'src', 'components')
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8080' ,
      "Access-Control-Allow-Methods": "OPTIONS",
    },
    contentBase: "./dist",
    port: 8080,
    host: "127.0.0.1",
    historyApiFallback: true
  }
}