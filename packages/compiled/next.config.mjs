const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.dog.ceo"],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        { loader: "babel-loader" },
        {
          loader: "@compiled/webpack-loader",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
