module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: ["react", "jsx-a11y", "import", "babel", "jest"],
  rules: {
    "max-len": [
      "error",
      { code: 150, ignoreTrailingComments: true, ignoreComments: true }
    ],
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "no-nested-ternary": 0,
    "no-console": 0,
    "prefer-promise-reject-errors": 0,
    "no-useless-escape": 0,
    "react/sort-comp": 0,
    "react/no-access-state-in-setstate": 0,
    "react/destructuring-assignment": 0,
    "react/no-did-update-set-state": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "jsx-a11y/click-events-have-key-events": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.jsx", "**/*.test.js", "webpack.config.js"]
      }
    ]
  },
  env: { browser: true, node: true, "jest/globals": true }
};
