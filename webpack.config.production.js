/**
 * WEBPACK CONFIG
 */

/* eslint-disable no-var */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index-prod.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
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
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]
  }
};
