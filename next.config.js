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
      },
      {
        protocol: 'https',
        hostname: '2.bp.blogspot.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'golfteamproducts.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'straighttohellapparel.com',
        port: '',
        pathname: '/**'
      }
    ]
    },
}

module.exports = nextConfig
