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
        const [historyAttr] = attrs.filter((a) => a.name.name === 'history');
        historyAttr.value = j.jsxExpressionContainer(j.identifier('history'));
      }

      const hasCreateHashHistoryImport =
        root.find(j.ImportDeclaration, {
          source: { value: 'history/createHashHistory' },
        }).length > 0;
      if (!hasCreateHashHistoryImport) {
        let computedImport = j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier('createHashHistory'))],
          j.literal('history/createHashHistory')
        );

        let body = root.get().value.program.body;
        body.unshift(computedImport);

        const vardecl = j.variableDeclaration('const', [
          j.variableDeclarator(
            j.identifier('history'),
            j.callExpression(j.identifier('createHashHistory'), [])
          ),
        ]);

        body.unshift(vardecl);
      }
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
