module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["html","prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn"
  }
}