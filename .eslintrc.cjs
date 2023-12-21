/* eslint-env node */

module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		// See: https://typescript-eslint.io/linting/typed-linting
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-typescript',
		'plugin:prettier/recommended',
		'plugin:vue/recommended',
		'plugin:prettier-vue/recommended',
	],
	// See: https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
	parser: 'vue-eslint-parser',
	plugins: ['@typescript-eslint'],
	overrides: [
		// Cypress
		{
			// prettier-ignore
			files: [
				'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
				'cypress/support/**/*.{js,ts,jsx,tsx}'
			],
			extends: ['plugin:cypress/recommended'],
		},
		// Vue
		{
			files: ['./**/*.{vue}'],
			rules: {
				// Use `props`, `emit`, etc. variable names consistently.
				'vue/require-macro-variable-name': 'error',
				// Require prop documentation.
				'vue/require-prop-comment': 'error',
				// Require prop typing.
				'vue/require-typed-object-prop': 'error',
				// Require ref<type>(...) typing.
				'vue/require-typed-ref': 'error',
				// Enforce static class names order.
				'vue/static-class-names-order': 'error',
				// Enforce v-for "in" delimiter.
				'vue/v-for-delimiter-style': 'error',
				// Enforce consistent event handlers.
				'vue/v-on-handler-style': 'error',
				// Require valid defineOptions compiler macro.
				'vue/valid-define-options': 'error',
				// Require type definitions in emits.
				'vue/require-emit-validator': 'error',
				// Require shorthand for boolean attributes.
				'vue/prefer-true-attribute-shorthand': 'error',
				// Require static class names to be in separate class attribute.
				'vue/prefer-separate-static-class': 'error',
				// Require Boolean comes first in component prop types.
				'vue/prefer-prop-type-boolean-first': 'error',
				// Require use of defineOptions instead of default export.
				'vue/prefer-define-options': 'error',
				// Require padding lines in component definition.
				'vue/padding-lines-in-component-definition': 'error',
				// Require newlines between sibling tags in <template>.
				'vue/padding-line-between-tags': 'error',
				// Require padding lines between SFC blocks.
				'vue/padding-line-between-blocks': 'error',
				// Disallow use of v-text.
				'vue/no-v-text': 'error',
				// Disallow unnecessary v-bind directives.
				'vue/no-useless-v-bind': 'error',
				// Disallow unnecessary mustache interpolations. {{ 'Lorem ipsum' }}
				'vue/no-useless-mustaches': 'error',
				// Disallow using v-else-if/v-else on the same element as v-for.
				'vue/no-use-v-else-with-v-for': 'error',
				// Disallow unused properties.
				'vue/no-unused-properties': 'error',
				// Disallow unused emit declarations.
				'vue/no-unused-emit-declarations': 'error',
				// Reports unsupported Vue features.
				'vue/no-unsupported-features': [
					'error',
					{
						version: '^3.3.11', // Keep in-sync with package.json.
					},
				],
				// Disallow undefined SFC properties.
				'vue/no-undef-properties': 'error',
				// Disallow use of undefined components in <template>.
				'vue/no-undef-components': 'error',
				// Disallow this usage in a beforeRouteEnter method.
				'vue/no-this-in-before-route-enter': 'error',
				// Disallow static inline style attributes.
				'vue/no-static-inline-styles': 'error',
				// Disallow usages that lose the reactivity of props passed to setup.
				'vue/no-setup-props-reactivity-loss': 'error',
				// Require props with default values to be optional.
				'vue/no-required-prop-with-default': 'error',
				// Disallow usages of ref objects that can lead to loss of reactivity.
				'vue/no-ref-object-reactivity-loss': 'error',
				// Disallow to pass multiple objects into array to class.
				// :class="[{'foo': isFoo}, {'bar': isBar}]"
				'vue/no-multiple-objects-in-class': 'error',
				// Disallow empty <template> <script> <style> blocks.
				'vue/no-empty-component-block': 'error',
				// Require inheritAttrs to be set to false when using v-bind="$attrs".
				'vue/no-duplicate-attr-inheritance': 'error',
				// Disallow boolean prop defaults.
				'vue/no-boolean-default': 'error',
				// Require Promise or callback style in nextTick.
				'vue/next-tick-style': 'error',
				// Require new lines between multi-line props.
				'vue/new-line-between-multi-line-property': 'error',
				// Enforce consistent indentation in HTML comments.
				'vue/html-comment-indent': 'error',
				// Enforce consistent line brake in HTML comments.
				'vue/html-comment-content-newline': 'error',
				// Require type attribute on <button>.
				'vue/html-button-has-type': 'error',
				// Require types in defineProps.
				'vue/define-props-declaration': 'error',
				// Require defineEmits and defineProps at top of component.
				'vue/define-macros-order': 'error',
				// Require types in defineEmits
				'vue/define-emits-declaration': 'error',
				// Enforce camelCase event names.
				'vue/custom-event-name-casing': 'error',
				// Require PascalCase component names.
				'vue/component-options-name-casing': 'error',
				// Require PascalCase component names.
				'vue/component-name-in-template-casing': 'error',
				// Require <script setup> and Composition API.
				'vue/component-api-style': 'error',
				// Require line breaks after opening and before closing component blocks.
				'vue/block-tag-newline': 'error',
				// Enforce order of component blocks
				'vue/block-order': 'error',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		// See: https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
		parser: '@typescript-eslint/parser',
		project: [
			// prettier-ignore
			'./tsconfig.app.json',
			'./tsconfig.node.json',
			'./tsconfig.vitest.json',
			'./tsconfig.cypress.json',
		],
		tsconfigRootDir: __dirname,
	},
};
