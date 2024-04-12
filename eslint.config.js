import eslint from '@eslint/js';
import vueEslintParser from 'vue-eslint-parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// ESLint Configuration File (9.x preview)
// See: https://eslint.org/docs/latest/use/configure/configuration-files-new
export default [
	/* Global Rules */

	{
		linterOptions: {
			// Report unused eslint comments.
			reportUnusedDisableDirectives: "error",
		},
		rules: {
			// Nothing yet
		},
	},
	eslint.configs.recommended,

	/* Extended Configs */
	
	// See: https://typescript-eslint.io/linting/typed-linting
	typescriptEslintPlugin.configs['recommended-type-checked'],

	{
		// files: [
		// 	'./frontend/**/*.vue',
		// 	'./frontend/**/*.ts',
		// ],
		languageOption: {
			// ecmaVersion: 'latest', // default
			// See: https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
			parser: vueEslintParser.parseForESLint,
			parserOptions: {
				// See: https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
				parser: '@typescript-eslint/parser',
				project: [
					'./cypress/tsconfig.json',
					'./frontend/tsconfig.app.json',
					'./frontend/tsconfig.vitest.json',
					'./tsconfig.json',
					'./tsconfig.node.json',
				],
				// tsconfigRootDir: __dirname,
				tsconfigRootDir: '.',
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
		},
		rules: {
			
		},
	},
];
