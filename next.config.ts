import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ascend/index.html", destination: "/", permanent: true },
      { source: "/ascend/about.html", destination: "/about", permanent: true },
      {
        source: "/ascend/careers.html",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/ascend/contact.html",
        destination: "/contact",
        permanent: true,
      },
      { source: "/ascend", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
