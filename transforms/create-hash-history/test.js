'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'create-hash-history',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});