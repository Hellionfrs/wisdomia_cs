/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      level: "verbose",
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wisdomia-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
