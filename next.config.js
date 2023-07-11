/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/jhonathanalencar/test-blogposts/main/images/**",
      },
    ],
    // domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
