module.exports = {
    parser: '@typescript-eslint/parser', // allows eslint to understand TypeScript syntax
    parserOptions: {
        ecmaVersion: 2020, // includes features like optional chaining and nullish coalescing
        sourceType: 'module', // code is written using ES6 modules (import/export), not scripts.
    },
    settings: {
        react: {
            version: 'detect', // automatically detect the version of React installed and adjust its rules accordingly
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended', // accessibility rules
        'plugin:eslint-comments/recommended',
        'prettier', // disables eslint rules that conflict with Prettier
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-unused-vars': 'off', // disabled, because of using the typescript version of this rule instead.
        '@typescript-eslint/no-unused-vars': ['error'], // reports variables declared but not used
        '@typescript-eslint/no-var-requires': 'off', // reports usage of require(), as import/export are preferred.
        'react/prop-types': 'off', // disabled, as typescript is used for type checking instead of prop-types.
        'react/jsx-uses-react': 'off', // disabled because it's not necessary with the new JSX Transform introduced in React >= 17
        'react/react-in-jsx-scope': 'off', // disabled because it's not necessary with the new JSX Transform introduced in React >= 17
        '@typescript-eslint/explicit-module-boundary-types': 'off', // disabled
        // when enabled, this rule enforces that exported function and class method return types must be explicitly annotated.
    },
};
