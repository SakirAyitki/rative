/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['your-domain.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://your-domain.com',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 