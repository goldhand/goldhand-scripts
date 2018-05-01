/**
  * Webpack config entry - routes to webpack configs using the --env argurment
  *
  * @example
  * $ webpack --env=production  // uses ./configs/webpack/production.js
  *
  * @usage
  * $ webpack --config=./configs/webpack/index.js --env=[production, development]
  */

module.exports = (env = 'production') =>
  require(`./${env}`)(env); // eslint-disable-line global-require,import/no-dynamic-require
