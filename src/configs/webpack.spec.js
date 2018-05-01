jest.mock('./paths');
jest.mock('./polyfills');
const webpack = require('webpack');

/**
 * runCompiler promise
 * @param {object} config - webpack config
 * @returns {Promise} - resolves webpack stats
 */
const runWebpack = config => new Promise(
  // TODO: writing the bundles to disk is triggering endless test runs in watch mode
  (resolve, reject) => webpack(config, (err, stats) => {
    if (err) {
      reject(err);
    } else {
      resolve(stats);
    }
  }),
);

describe('webpack', () => {
  it('has a default export', () => {
    expect(() => {
      require('./webpack')('production');
    }).not.toThrow();
  });
});

describe('webpack.common.js', () => {
  it('is a valid webpack config by default', async () => {
    expect.assertions(1);
    expect.hasAssertions();
    const config = require('./webpack/common')();
    await expect(runWebpack(config)).resolves.toBeTruthy();
  });
  it('has no webpack errors or warnings', async () => {
    expect.assertions(2);
    expect.hasAssertions();
    const config = require('./webpack/common')();
    const stats = await runWebpack(config);
    expect(stats.compilation.errors).toHaveLength(0);
    expect(stats.compilation.warnings).toHaveLength(0);
  });
});

describe('webpack.development.js', () => {
  it('is a valid webpack config by default', async () => {
    expect.assertions(1);
    expect.hasAssertions();
    const config = require('./webpack/development')('development');
    await expect(runWebpack(config)).resolves.toBeTruthy();
  });
  it('has no webpack errors or warnings', async () => {
    expect.assertions(2);
    expect.hasAssertions();
    const config = require('./webpack/development')('development');
    const stats = await runWebpack(config);
    expect(stats.compilation.errors).toHaveLength(0);
    expect(stats.compilation.warnings).toHaveLength(0);
  });
});

describe('webpack.production.js', () => {
  it('is a valid webpack config by default', async () => {
    expect.assertions(1);
    expect.hasAssertions();
    const config = require('./webpack/production')('production');
    await expect(runWebpack(config)).resolves.toBeTruthy();
  });
  it('has no webpack errors or warnings', async () => {
    expect.assertions(2);
    expect.hasAssertions();
    const config = require('./webpack/production')('production');
    const stats = await runWebpack(config);
    expect(stats.compilation.errors).toHaveLength(0);
    expect(stats.compilation.warnings).toHaveLength(0);
  });
});
