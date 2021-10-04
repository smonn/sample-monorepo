const defaultRules = {
  "unicorn/no-null": "off",
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  rules: defaultRules,
  overrides: [
    {
      files: [".eslintrc.js", "babel.config.js", "next.config.js"],
      rules: {
        ...defaultRules,
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: ["**/*.tsx"],
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        ...defaultRules,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
        "prettier",
      ],
    },
  ],
};
