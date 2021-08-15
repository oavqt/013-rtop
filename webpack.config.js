const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/index.js', 'webpack-hot-middleware/client'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gir)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: 'Le Temp',
      template: './src/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.s?[as]ss?/i,
    }),
    new webpack.EvalSourceMapDevToolPlugin({
      test: /\.(vue|[jt]sx?)$/i,
    }),
  ],
};
