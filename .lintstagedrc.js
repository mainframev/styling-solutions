module.exports = {
  "*.{js,ts,tsx}": [
    "nx affected --target=custom-target --base=main lint",
    "nx affected --target=custom-target --base=main check:types",
  ],
};
