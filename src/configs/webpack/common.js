const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('../paths');

const mode = (env) => {
  const accept = ['none', 'development', 'production'];
  if (accept.indexOf(env) !== -1) return env;
  return 'none';
};

module.exports = (env = 'production') => ({
  mode: mode(env),
  entry: [
    paths.resolveCommon('configs/polyfills.js'),
    paths.appEntry,
  ].filter(Boolean), // filter out empty strings
  output: {
    filename: '[name].[chunkhash].js',
    path: paths.appBundle,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        include: [paths.appSrc],
        use: ['babel-loader'],
      },
    ],
  },
});
