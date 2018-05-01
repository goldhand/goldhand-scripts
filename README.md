# goldhand-scripts
Scripts I commonly use in open source work.

## Getting Started

### Set up `package.json`
```json
"config": {
  "entry": "src/index.js",
  "src": "src",
  "bundle": "dist",
  "cjs": "cjs",
  "build": ""
},
"devDependencies": {
  "goldhand-scripts": "^1.0.0"
}
```
### Config options
```js
entry: 'src/index.js', // main app entry point
src: 'src', // package source code
bundle: 'dist', // webpack build directory
cjs: 'cjs', // node style "commonJS" build directory
build: '', // build directory where "cjs" and "bundle" will output
```

## Exports

### Webpack
#### `webpack.config.js`
```js
module.exports = require('emc-editor-common/webpack');
```

### Babel
#### `.babelrc`
```json
{"presets": ["emc-editor-common/babel"]}
```

### Flow
TBD

### Jest
#### `jest.config.js`
```js
module.exports = require('emc-editor-common/jest');
```

### Eslint
Exports the [`NodeJS-eslint-config-aplus`] package.
#### `.eslintrc`
```json
{"extends": "./node_modules/emc-editor-common/eslint.js"}
```
