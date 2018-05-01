const config = require('./src/configs/jest');

module.exports = {
  ...config,
  testEnvironment: 'node',
};
