import type { NextConfig } from "next";
const { DOCS_URL } = process.env;
console.log("🚀 ~ DOCS_URLd:", DOCS_URL);

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/tickets",
        destination: `${DOCS_URL}`,
      },
      {
        source: "/tickets/:path*",
        destination: `${DOCS_URL}/:path*`,
      },
      // {
      //   source: "/tickets/detail/:path*",
      //   destination: `${DOCS_URL}/detail/:path*`,
      // },
    ];
  },
};

export default nextConfig;
