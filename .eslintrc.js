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
    "prettier",
  ],
  overrides: [
    {
      files: ["next.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
      ],
    },
  ],
};
