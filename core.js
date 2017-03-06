module.exports = {
    env: {
        es6: true
    },
    extends: [
        './configurations/core.js'
    ],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            { 'devDependencies': [ '**/*.spec.js', '**/spec.js' ] }
        ]
    }
};
