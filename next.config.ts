import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/site.webmanifest",
        destination: "/manifest.webmanifest",
        permanent: true,
      },
      {
        source: "/manifest.json",
        destination: "/manifest.webmanifest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
