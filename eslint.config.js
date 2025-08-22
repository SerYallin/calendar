import js from '@eslint/js';
import globals from 'globals';
import { configs } from 'eslint-config-airbnb-extended/legacy';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import configsPettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config([
  globalIgnores(['dist', 'jest.config.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      ...configs.react.typescript,
      configsPettier,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
      '@typescript-eslint/no-shadow': 'off',
    },
    plugins: {
      import: pluginImport,
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
]);
