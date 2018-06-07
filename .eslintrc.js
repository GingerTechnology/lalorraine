module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      // 'optionalDependencies': ['test/unit/index.js'],
    }],
    'no-param-reassign': [2, {
        'props': false
    }],
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
      node: {
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
}
