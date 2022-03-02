module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-alert': 'error',
        'no-debugger': 'error',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-plusplus': 'off',
        'no-empty-pattern': 'off',
        'no-underscore-dangle': 'off',
        'no-case-declarations': 'off',
        'no-else-return': 'off',
        'padded-blocks': 'off',
        'no-tabs': 'off',
        'default-case': 'error',
        'comma-dangle': 'error',
        'no-nested-ternary': 'off',
        'consistent-return': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'import/prefer-default-export': 'off',
        'max-len': ['error', { code: 120 }],
        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'prefer-arrow-callback': 'off',
        'no-new-object': 'off',
        'no-irregular-whitespace': 'off',
        'no-unused-vars':'off'
    }
}
