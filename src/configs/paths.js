/**
 * Application configuration paths
 */
const readPkgUp = require('read-pkg-up');
const path = require('path');
const fs = require('fs');

const pkgConfigDefaults = {
  entry: 'src/index.js', // main app entry point
  src: 'src', // package source code
  bundle: 'dist', // webpack build directory
  cjs: 'cjs', // node style "commonJS" build directory
};

const {pkg, path: pkgPath} = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const pkgConfig = Object.prototype.hasOwnProperty.call(pkg, 'config')
  ? {...pkg.config, ...pkgConfigDefaults}
  : pkgConfigDefaults;

const resolveRelativePath = startingPath => (relativePath = '') =>
  path.resolve(startingPath, relativePath);


/**
 * Resolves a path relative to the depending project's root directory
 * @func
 * @param  {string} [relativePath=''] relative path
 * @return {string} resolved path
 */
const resolveApp = resolveRelativePath(path.dirname(pkgPath));

/**
 * Resolves a path relative to this package's source (./src) directory
 * @func
 * @param  {string} [relativePath=''] relative path
 * @return {string} resolved path
 */
const resolveCommon = resolveRelativePath(
  fs.realpathSync(path.dirname(__dirname)),
);

module.exports = {
  pkg,
  pkgConfig,
  appEntry: resolveApp(pkgConfig.entry),
  appSrc: resolveApp(pkgConfig.src),
  appBundle: resolveApp(pkgConfig.bundle),
  appCjs: resolveApp(pkgConfig.cjs),
  resolveApp,
  resolveCommon,
};
