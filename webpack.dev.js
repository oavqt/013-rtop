const { merge } = require('webpack-merge');
const theBaseConfig = require('./webpack.base');
const webpack = require('webpack');

const theDevConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      test: /\.s?[as]ss?$/i,
    }),
    new webpack.EvalSourceMapDevToolPlugin({
      test: /\.(vue|[jt]sx?)$/i,
    }),
  ],
};

module.exports = merge(theBaseConfig, theDevConfig);
