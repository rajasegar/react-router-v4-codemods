module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'Route' } },
    })
    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      const hasExactAttr = attrs.filter((a) => a.name.name === 'exact').length > 0;
      if (!hasExactAttr) {
        path.value.openingElement.attributes.unshift(
          j.jsxAttribute(j.jsxIdentifier('exact'), null)
        );
      }
    });

  return root.toSource();
};

module.exports.type = 'js';
