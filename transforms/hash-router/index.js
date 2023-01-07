module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'Router' } },
    })
    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      const hasHistoryAttr = attrs.filter((a) => a.name.name === 'history').length > 0;
      if (hasHistoryAttr) {
        path.value.openingElement.name.name = 'HashRouter';
        path.value.closingElement.name.name = 'HashRouter';
        path.value.openingElement.attributes = attrs.filter((a) => a.name.name !== 'history');
      }

      let computedImport = j.importDeclaration(
        [j.importSpecifier(j.identifier('HashRouter'))],
        j.literal('react-router-dom')
      );

      let body = root.get().value.program.body;
      body.unshift(computedImport);
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
