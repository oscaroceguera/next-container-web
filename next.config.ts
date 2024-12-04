import type { NextConfig } from "next";
const { DOCS_URL } = process.env;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tickets",
        destination: `${DOCS_URL}/tickets`,
      },
      {
        source: "/tickets/:path+",
        destination: `${DOCS_URL}/tickets/:path+`,
      },
    ];
  },
};

export default nextConfig;
