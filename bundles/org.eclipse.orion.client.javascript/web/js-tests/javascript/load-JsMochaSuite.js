/*eslint-env amd*/
/* eslint-disable missing-nls */
require({
	baseUrl: '../../',
	paths: {
		text: 'requirejs/text',
		i18n: 'requirejs/i18n',
		domReady: 'requirejs/domReady',
		estraverse: 'estraverse/estraverse',
		esprima: 'esprima/esprima',
		escope: 'escope/escope',
		logger: 'javascript/logger',
		doctrine: 'doctrine/doctrine'
	},
	packages: [
		{
			name: "eslint/conf",
			location: "eslint/conf"
		},
		{
			name: "eslint",
			location: "eslint/lib",
			main: "eslint"
		},
	]
});
require(['mocha/sauce'], function(mocha) {
	mocha.setup('bdd');
	require([
			'js-tests/javascript/astManagerTests',
			'js-tests/javascript/ternAssistTests',
			'js-tests/javascript/esprimaTolerantTests',
			'js-tests/javascript/dependencyTests',
			'js-tests/javascript/finderTests',
			'js-tests/javascript/occurrencesTests',
			'js-tests/javascript/outlinerTests',
			'js-tests/javascript/validatorTests',
			'js-tests/javascript/lruTests',
			'js-tests/javascript/quickfixTests',
			'js-tests/javascript/eslintCoreTests',
			'js-tests/javascript/eslintRuleTests',
			], function(){
		mocha.run();
	});
});