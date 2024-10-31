import prettier from 'eslint-config-prettier'
import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/'],
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'func-names': ['error', 'always'],
      /**
       * Remember to set "eslint.validate": ["javascript", "svelte"] in settings.json.
       */
      // @see https://astexplorer.net/
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ArrowFunctionExpression',
          message: 'Shorthand arrow functions are not allowed.',
        },
        {
          selector: 'ClassDeclaration',
          message: 'Classes are not allowed, use object literals instead.',
        },
      ],
    },
  },
]
