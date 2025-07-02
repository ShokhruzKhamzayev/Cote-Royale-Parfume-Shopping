import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.prismic.io"
      }
    ]
  }
};

export default nextConfig;
