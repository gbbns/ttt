/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/customers/',
      },
    ];
  },
};

module.exports = nextConfig;
