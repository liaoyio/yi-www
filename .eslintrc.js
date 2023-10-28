module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        'no-multiple-empty-lines': [2, { max: 2 }], // 最多一个空行
        'max-empty-lines': 2
      }
    ],
    indent: 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off'
  }
}
