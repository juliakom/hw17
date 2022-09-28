const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target : 'node',
  externals: [nodeExternals()],
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
  },
};