module.exports = {
  parser: "@typescript-eslint/parser",
  extends: "plugin:@typescript-eslint/recommended",
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
