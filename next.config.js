/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    output: 'export',
  distDir: 'builtversion',
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.pexels.com', 'ibb.co', 'i.ibb.co', 'dropbox.com'],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig


