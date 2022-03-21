const { useBabelRc, addBundleVisualizer, override } = require('customize-cra')

module.exports = override(
  useBabelRc(),
  addBundleVisualizer(),
);
