import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // accept all image source
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
