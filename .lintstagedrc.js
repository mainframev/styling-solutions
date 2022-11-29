module.exports = {
  "*.{js,ts,tsx}": ["nx affected:lint --parallel", "nx affected:check:types --parallel"],
};
