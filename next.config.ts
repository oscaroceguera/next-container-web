import type { NextConfig } from "next";
const { DOCS_URL } = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/tickets",
        destination: `${DOCS_URL}`,
      },
      {
        source: "/tickets/:path*",
        destination: `${DOCS_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
