module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'IndexRoute' } },
    })
    .forEach((path) => {
      path.value.openingElement.name.name = 'Route';
      const attrs = path.value.openingElement.attributes;
      attrs.unshift(j.jsxAttribute(j.jsxIdentifier('path'), j.literal('/')));
      attrs.unshift(j.jsxAttribute(j.jsxIdentifier('exact'), null));
    });

  return root.toSource();
};

module.exports.type = 'js';
