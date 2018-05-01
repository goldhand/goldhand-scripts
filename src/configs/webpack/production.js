const webpackMerge = require('webpack-merge');
const common = require('./common');

module.exports = env => webpackMerge(common(env), {
  // production config
  devtool: 'source-map',
});
