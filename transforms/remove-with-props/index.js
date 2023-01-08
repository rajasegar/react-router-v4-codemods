module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.VariableDeclarator, {
      init: { callee: { name: 'withProps' } },
    })
    .forEach((path) => {
      const hocName = path.value.id.name;
      const hocProps = path.value.init.arguments[1].properties;
      root
        .find(j.JSXElement, {
          openingElement: { name: { name: 'Route' } },
        })
        .filter((c) => {
          const attrs = c.value.openingElement.attributes;

          return (
            attrs.filter(
              (a) =>
                a.name.name === 'component' &&
                a.value.type === 'JSXExpressionContainer' &&
                a.value.expression.name === hocName
            ).length > 0
          );
        })
        .forEach((c) => {
          const [compAttr] = c.value.openingElement.attributes.filter(
            (a) => a.name.name === 'component'
          );
          compAttr.name.name = 'render';

          const newProps = hocProps.map((h) => {
            return j.jsxAttribute(
              j.jsxIdentifier(h.key.name),
              j.jsxExpressionContainer(j.identifier('title'))
            );
          });

          const newComp = j.jsxElement(
            j.jsxOpeningElement(
              j.jsxIdentifier('Dashboard'),
              [...newProps, j.jsxSpreadAttribute(j.jsxIdentifier('props'))],
              true
            ),
            null,
            [],
            false
          );

          compAttr.value = j.jsxExpressionContainer(
            j.arrowFunctionExpression(
              [j.jsxIdentifier('props')],
              j.blockStatement([j.returnStatement(newComp)]),
              true
            )
          );
        });

      j(path.parentPath.parentPath).remove();
    });

  return root.toSource();
};

module.exports.type = 'js';
