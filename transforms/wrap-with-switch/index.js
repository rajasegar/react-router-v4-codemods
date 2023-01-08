module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'Router' } },
    })
    .forEach((path) => {
      const children = path.value.children;
      const newEl = j.jsxElement(
        j.jsxOpeningElement(j.jsxIdentifier('Switch'), [], false),
        j.jsxClosingElement(j.jsxIdentifier('Switch')),
        children
      );

      const hasSwitch = root.findJSXElements('Switch').length > 0;
      if (!hasSwitch) {
        path.value.children = [j.jsxText('\n  '), newEl, j.jsxText('\n')];
      }
    });

  return root.toSource();
};

module.exports.type = 'js';
