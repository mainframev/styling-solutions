module.exports = {
  "*.{js,ts,tsx}": [
    "nx affected:lint --parallel",
    "nx affected --target=custom-target --base=main check:types",
  ],
};
