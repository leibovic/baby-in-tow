module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    // Not using prop-types
    'react/prop-types': "off",

    // Don't want to be forced to nest labels
    'jsx-a11y/label-has-associated-control': ['error', {
      assert: 'either'
    }],

    'prefer-destructuring': 'off',

    // Enfore a blank line before return statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    // Allow underscore dangles for private members (e.g. this._foo)
    'no-underscore-dangle': ['error', { allowAfterThis: true }],

    // Don't want to rename all our files
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
