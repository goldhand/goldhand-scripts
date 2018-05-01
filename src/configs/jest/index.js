/**
 * Jest configuration
 * https://facebook.github.io/jest/docs/en/configuration.html
 */
const paths = require('../paths');

// Ignored in tests and coverage
const ignorePatterns = [
  '<rootDir>/build/',
  '<rootDir>/flow-typed/',
  '<rootDir>/scripts/',
  '<rootDir>/configs/',
  '/node_modules/',
  '/declarations/',
  '/temp/',
  'index.js',
];

module.exports = {
  verbose: true,
  rootDir: paths.resolveApp(),
  setupFiles: [
    paths.resolveCommon('configs/polyfills.js'), // need to import polyfills first
    paths.resolveCommon('configs/jest/setup-enzyme.js'),
  ],
  collectCoverage: false, // override with --coverage flag in cli
  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
    'cobertura',
    'json-summary',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coverageDirectory: '<rootDir>/build/coverage',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coveragePathIgnorePatterns: [...ignorePatterns],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)(spec|test).js?(x)',
  ],
  testPathIgnorePatterns: [...ignorePatterns],
  testURL: 'http://localhost',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
};
