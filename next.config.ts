import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET_ID: process.env.SANITY_STUDIO_DATASET_ID,
    SANITY_STUDIO_API_VERSION: process.env.SANITY_STUDIO_API_VERSION,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
