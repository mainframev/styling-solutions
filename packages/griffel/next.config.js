const { withGriffelCSSExtraction } = require("@griffel/next-extraction-plugin");

module.exports = withGriffelCSSExtraction()({
  images: {
    domains: ["images.dog.ceo"]
  },
  webpack(config) {
    // If your project uses TypeScript
    config.module.rules.unshift({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "@griffel/webpack-loader",
          options: {
            babelOptions: {
              presets: ["next/babel"]
            }
          }
        }
      ]
    });

    return config;
  }
});
