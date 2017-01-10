module.exports = {
    env: {
        es6: true
    },
    extends: [
        'airbnb-base',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    parser: 'babel-eslint',
    rules: {
        'arrow-body-style': [0],
        'arrow-parens': [0],
        'class-methods-use-this': [0],
        'comma-dangle': [2, 'never'],
        'func-names': [0],
        'guard-for-in': [0],
        'handle-callback-err': [0],
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        "no-await-in-loop": [0],
        'no-mixed-operators': [0],
        'no-param-reassign': [0],
        'no-plusplus': [0],
        'no-restricted-syntax': [0],
        'no-unused-expressions': [0],
        'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
        'no-use-before-define': [2, 'nofunc'],
        'no-var': [0],
        'quotes': [2, 'single'],
        'vars-on-top': [0]
    },
    globals: {
        _: false,
        logger: false
    }
};