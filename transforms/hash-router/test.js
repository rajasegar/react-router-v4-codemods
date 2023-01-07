'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'hash-router',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});