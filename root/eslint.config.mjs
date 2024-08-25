import typescriptPlugin from '@typescript-eslint/eslint-plugin';
// import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';
import globals from 'globals';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      ...typescriptPlugin.configs['recommended-type-checked'].rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import-order': [
        'error',
        {
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          pathGroupsExcludeImportTypes: ['builtin'],
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      emcaversions: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
);
