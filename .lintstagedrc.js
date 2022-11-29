const path = require("path");

const lint = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(" --file ")} && tsc --noEmit`;

module.exports = {
  "*.{ts,tsx}": [lint],
};
