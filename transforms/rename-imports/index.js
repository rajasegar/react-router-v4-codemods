module.exports = function transformer(file, api) {

		const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.ImportDeclaration, {
      source: { value: 'react-router' },
    })
    .forEach((path) => {
      path.value.source.value = 'react-router-dom';
    });

		return root.toSource({ quote: 'single' });
		
};

module.exports.type = 'js';
