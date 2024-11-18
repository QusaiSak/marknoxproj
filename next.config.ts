import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Ensures a static export
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

export default nextConfig;
