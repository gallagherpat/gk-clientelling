/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [{
        protocol: 'https',
        hostname: 'assets.peterglenn.com',
        port: '',
        pathname: '/**'
      }]
    },
}

module.exports = nextConfig
