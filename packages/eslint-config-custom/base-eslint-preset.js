module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    'prettier/prettier': ['off', {}, { usePrettierrc: true }],
    'import/prefer-default-export': 'off',
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore', '=': 'none' } },
    ],
    'react/require-default-props': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'global-require': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'linebreak-style': 'off',
    'arrow-body-style': 'off',
    'no-bitwise': 'off',
    '@typescript-eslint/indent': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enum'],
        format: ['PascalCase'],
        prefix: ['E']
      },
      {
        selector: ['interface'],
        format: ['PascalCase'],
        prefix: ['I']
      }
    ]
  },
};
