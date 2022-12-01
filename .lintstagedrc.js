module.exports = {
  "*.{js,ts,tsx}": [
    "nx affected:lint --parallel --target=custom-target --base=main",
    "nx affected --target=custom-target --base=main check:types",
  ],
};
