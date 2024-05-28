/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['aceternity.com', 'www.google.com'],

  },
  output:'export',
  distDir: 'out',
};

export default nextConfig;
