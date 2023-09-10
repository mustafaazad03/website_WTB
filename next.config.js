/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/imprint",
        destination: "/legal",
        permanent: true,
      },
      {
        source: "/impressum",
        destination: "/legal-de",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
