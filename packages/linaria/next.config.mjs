import withLinaria from "next-linaria";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.dog.ceo"],
  }
  // swcMinify: true,
}

export default withLinaria(nextConfig);
