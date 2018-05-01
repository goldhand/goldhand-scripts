/**
 * Polyfills for the browser
 */

// Uses core-js and covers most polyfill needs
require('babel-polyfill');

// Fetch is not included with core-js
if (typeof fetch === 'undefined') {
  require('whatwg-fetch');
}

// React uses window.requestAnimationFrame
if (typeof requestAnimationFrame === 'undefined') {
  require('raf/polyfill');
}
