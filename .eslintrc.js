module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-typescript-prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: `./tsconfig.json`,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': ['error', { ts: 'never' }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'no-unused-expressions': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/extensions': ['error', 'never', { json: 'always' }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'prettier/prettier': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
  },
};
