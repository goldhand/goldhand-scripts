module.exports = {
  presets: [
    require('babel-preset-env'),
    require('babel-preset-stage-0'),
    require('babel-preset-react'),
    require('babel-preset-flow'),
  ],
  sourceMaps: true,
  env: {
    production: {
      ignore: [
        'spec.js',
      ],
    },
  },
};
