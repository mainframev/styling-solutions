const path = require("path");

module.exports = {
  "*.{js,ts,tsx}": "pnpm lint:all && pnpm check:types:all",
};
