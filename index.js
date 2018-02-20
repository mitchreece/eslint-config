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
       'semi': ['error', 'never'],
       'eol-last': ['error', 'always'],
       'no-multiple-empty-lines': ['error', {
            max: 2,
            maxEOF: 0, // = 1 (Some editors are off by 1)
            maxBOF: 0
       }]
    }
}