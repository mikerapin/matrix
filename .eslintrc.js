// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'arrow-body-style': 0,
    'no-undef': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '(?:t|T)ype$',
          match: false,
        },
      },
    ],
  },
};
