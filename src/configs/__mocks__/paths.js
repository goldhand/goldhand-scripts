const path = require('path');

const pkgConfig = {
  entry: 'entry.js',
  src: '',
  bundle: 'temp/bundle',
  cjs: 'temp/cjs',
};

const stubsDir = path.resolve(process.cwd(), '__stubs__');

const resolveRelativePath = startingPath => (relativePath = '') =>
  path.resolve(startingPath, relativePath);

const resolveApp = resolveRelativePath(stubsDir);

const resolveCommon = resolveRelativePath(path.resolve(__dirname, '../../'));

module.exports = {
  pkg: require('../../../__stubs__/package.json'),
  pkgConfig,
  appEntry: resolveApp(pkgConfig.entry),
  appSrc: resolveApp(),
  appBundle: resolveApp(pkgConfig.bundle),
  appCjs: resolveApp(pkgConfig.cjs),
  resolveApp,
  resolveCommon,
};
