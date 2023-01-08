'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'add-exact-prop',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
