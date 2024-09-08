import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPrettierRecommended from "eslint-plugin-prettier/recommended"

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
})


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...eslintPrettierRecommended,
  ...compat.extends('eslint-config-airbnb'),
  {
    rules: {
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      eqeqeq: 'error',
      'no-console': 'off',
      'consistent-return': 'off',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'none',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];