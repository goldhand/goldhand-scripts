const webpackMerge = require('webpack-merge');
const common = require('./common');

module.exports = env => webpackMerge(common(env), {
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    disableHostCheck: true,
    host: '0.0.0.0', // make host available to network
  },
});
