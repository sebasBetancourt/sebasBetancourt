import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ngrok / tunnels hit Next as a different Origin; without this, /_next chunks
  // and HMR get blocked in `next dev` and React fails to hydrate.
  allowedDevOrigins: [
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.app",
    "*.ngrok.io",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
