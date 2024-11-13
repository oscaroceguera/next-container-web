import type { NextConfig } from "next";
const { DOCS_URL } = process.env;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // path root
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
