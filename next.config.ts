import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export (Next.js Image optimization doesn't work with static export)
  },
  // Uncomment the following if deploying to a subdirectory like username.github.io/repository-name
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name',
};

export default nextConfig;
