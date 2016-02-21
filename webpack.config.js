/**
 * WEBPACK CONFIG
 */

/* eslint-disable no-var */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:5000',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.join(__dirname, 'src')
    ],
    modulesDirectories: [
      'node_modules'
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        ),
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'styles'),
          path.join(__dirname, 'node_modules')
        ]
      },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' }
    ]
  }
};
