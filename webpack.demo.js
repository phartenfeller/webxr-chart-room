const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [
                '@babel/plugin-proposal-decorators',
                { decoratorsBeforeExport: true },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new RemovePlugin({
      before: {
        test: [
          {
            folder: './demo',
            method: (absoluteItemPath) =>
              new RegExp(/(\.js|\.txt)$/, 'm').test(absoluteItemPath),
            recursive: true,
          },
        ],
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: '[name].js',
  },
};
