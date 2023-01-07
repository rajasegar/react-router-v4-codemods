'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'wrap-with-switch',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});