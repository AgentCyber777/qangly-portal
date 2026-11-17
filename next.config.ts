import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ngrok арқылы кіруге рұқсат береміз (жаңа қосылған жол)
  allowedDevOrigins: ['peaselike-delcie-unprecedential.ngrok-free.dev'],

  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;