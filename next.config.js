/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  basePath: '/porto-reza',
  images: {
    domains: ['upload.wikimedia.org'],
  },
}

module.exports = nextConfig
