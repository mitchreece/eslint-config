module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
    },
    extends: 'eslint:recommended',
    rules: {
       indent: ['error', 'tab'],
       'no-tabs': 0,
       'padded-blocks': [
           'error',
           { classes: 'always' }
       ],
       'comma-dangle': ['error', 'always-multiline'],
       'semi': ['error', 'never']
    }
}