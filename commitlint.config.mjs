// Reference: https://commitlint.js.org/reference/configuration.html
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [2, "always", 500],
    "footer-max-line-length": [2, "always", 200],
  },
};

export default config;
